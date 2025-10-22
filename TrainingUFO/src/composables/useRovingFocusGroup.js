import { onUnmounted, onMounted, watch, ref, isRef } from "vue";

export function useRovingFocusGroup(focusGroupContainerRef, activeGroupItemKeyRef, userOpts = { }) {
    const opts = {
        orientation: userOpts.orientation ?? "vertical",
        wrap:        userOpts.wrap ?? true
    };

    const state = {
        groupItems:   [],
        focusedIndex: 0
    };

    const isGroupFocusedRef = ref(false);

    if (!isRef(focusGroupContainerRef) || !isRef(activeGroupItemKeyRef))
        console.warn(
            "[useRovingFocusGroup] focusGroupContainerRef and activeGroupItemKeyRef must be ref()"
        );
    
    onMounted(() => {
        focusGroupContainerRef.value?.addEventListener("focusout", handleFocusChanged);
        focusGroupContainerRef.value?.addEventListener("focusin",  handleFocusChanged);
    });

    onUnmounted(() => {
        state.groupItems.forEach(groupItem => {
            groupItem?.removeEventListener?.("focusout", handleFocusChanged);
        });

        focusGroupContainerRef.value?.removeEventListener?.("focusout", handleFocusChanged);
        focusGroupContainerRef.value?.removeEventListener?.("focusin",  handleFocusChanged);
    });

    watch(focusGroupContainerRef, (newValue, oldValue) => {
        if (oldValue === newValue)
            return;

        oldValue?.removeEventListener?.("focusout", handleFocusChanged);
        oldValue?.removeEventListener?.("focusin",  handleFocusChanged);
        newValue?.addEventListener?.("focusout", handleFocusChanged);
        newValue?.addEventListener?.("focusin",  handleFocusChanged);
    });

    watch(activeGroupItemKeyRef, (newValue, oldValue) => {
        const oldElement = state.groupItems.find(gi => gi && gi.key === oldValue)?.element;
        const newElement = state.groupItems.find(gi => gi && gi.key === newValue)?.element;

        if (!isGroupFocusedRef.value) {
            if (oldElement) oldElement.tabIndex = -1;
            if (newElement) newElement.tabIndex = 0;
        }
    });

    watch(isGroupFocusedRef, newValue => {
        const index = state.groupItems.findIndex(gi => gi && gi.key === activeGroupItemKeyRef.value);

        if (index === -1)
            return;

        const element = state.groupItems[index]?.element;
        
        if (newValue)
            state.focusedIndex = index;

        if (element &&  newValue) element.tabIndex = -1;
        if (element && !newValue) element.tabIndex = 0;
    });

    function handleFocusChanged(e) {
        switch (e.type) {
        case "focusin":
            isGroupFocusedRef.value = true;
            break;

        case "focusout":
            if (!e.relatedTarget || focusGroupContainerRef.value?.contains(e.relatedTarget) === false)
                isGroupFocusedRef.value = false;
            break;
        }
    }

    function registerFocusGroupItem(element, key, index) {
        // If the element already exists in groupItems, it was moved.
        // Remove the original entry.
        const duplicateIndex = state.groupItems.findIndex(gi => gi && gi?.element === element);
        if (duplicateIndex !== -1)
            state.groupItems[duplicateIndex] = null;

        state.groupItems[index]?.removeEventListener?.("keydown", handleKeydown);
        state.groupItems[index] = element ? {
            element,
            key
        } : null;

        if (element) {
            element.addEventListener("keydown", handleKeydown);

            if (key !== activeGroupItemKeyRef.value) 
                element.tabIndex = -1;

            if (key === activeGroupItemKeyRef.value) {
                element.tabIndex = 0;
                state.focusedIndex = index;
            }
        }
    }

    function focusNext()  { focusByIndex(findNextGroupItemIndex(state.focusedIndex,      { backwards: false })); }
    function focusPrev()  { focusByIndex(findNextGroupItemIndex(state.focusedIndex,      { backwards: true  })); }
    function focusFirst() { focusByIndex(findNextGroupItemIndex(-1,                      { backwards: false })); }
    function focusLast()  { focusByIndex(findNextGroupItemIndex(state.groupItems.length, { backwards: true  })); }

    function focusByIndex(index) {
        if (index >= 0 && index < state.groupItems.length) {
            state.focusedIndex = index;
            state.groupItems[index]?.element?.focus()
        }
    }

    function findNextGroupItemIndex(start, { backwards = false } = {}) {
        const delta = backwards ? -1 : 1;
        const len   = state.groupItems.length;
        let index   = start;

        for (let i = 0; i < len; ++i) {
            index = opts.wrap ? fmod(index + delta, len) : clamp(index + delta, 0, len - 1);

            if (state.groupItems[index]) {
                return index;
            }
        }

        return -1;
    }

    function handleKeydown(e) {
        const eat = fn => {
            e.preventDefault();
            e.stopPropagation();
            fn();
        };

        if (opts.orientation === "horizontal") {
            if (e.key === "ArrowRight") return eat(focusNext);
            if (e.key === "ArrowLeft")  return eat(focusPrev);
        } else {
            if (e.key === "ArrowDown")  return eat(focusNext);
            if (e.key === "ArrowUp")    return eat(focusPrev);
        }

        if (e.key === "Home")           return eat(focusFirst);
        if (e.key === "End")            return eat(focusLast);
    }

    function fmod(n, m) { return ((n % m) + m) % m; }
    function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }

    return {
        registerFocusGroupItem,
        isGroupFocusedRef,
        getFocusedElement: () => state.groupItems[state.focusedIndex]?.element
    };
}
