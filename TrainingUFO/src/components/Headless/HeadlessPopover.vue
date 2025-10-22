<template>
    <div style="display: contents;">
        <div class="wrapper" :class="{'wrapper--full-width': fullWidth}">
            <button
                ref="trigger"
                class="popover-trigger"
                @click="toggle"
                @keydown.esc="close">
                <slot name="trigger" :open="modelValue" />
            </button>

            <teleport to="body">
                <transition name="popover" appear :duration="{ enter: 120, leave: 180 }">
                    <div
                        v-show="modelValue"
                        ref="menu"
                        tabindex="-1"
                        class="popover-bounds"
                        :style="{
                            left: `${coords.left}px`,
                            top: `${coords.top}px`,
                            maxHeight: computedHeight + 'px',
                            maxWidth: matchTriggerWidth ? coords.width + 'px' : 'auto',
                        }"
                        @keydown.esc="close"
                        @keydown.tab="handleTab">
                        <slot name="content" :open="modelValue" />
                    </div>
                </transition>
            </teleport>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ["update:modelValue", "opened", "closed"],
        props: {
            modelValue: { type: Boolean, default: false },
            // Absolute ceiling the popover will ever grow to
            maxHeight: { type: Number, default: () => window.innerHeight - 16 },
            // Minimum comfortable height; below this we try another placement
            repositionHeight: { type: Number, default: 100 },
            // Lock popover width to trigger width?
            matchTriggerWidth: { type: Boolean, default: false },
            // Focus first focusable element when opened
            autoFocus: { type: Boolean, default: true },
            // Trigger takes full width
            fullWidth: { type: Boolean, default: false }
        },
        data: () => ({
            placement: "bottom",
            coords: { left: 0, top: 0, width: 0 },
            computedHeight: 0
        }),
        methods: {
            close() {
                this.$emit("update:modelValue", false);
            },
            toggle() {
                this.$emit("update:modelValue", !this.modelValue);
            },
            queryFirstFocusable() {
                return this.$refs.menu?.querySelector(
                    ':is(button, input, [href], select, textarea, [tabindex]):not([tabindex="-1"])'
                );
            },
            queryEveryFocusable() {
                return this.$refs.menu?.querySelectorAll(
                    ':is(button, input, [href], select, textarea, [tabindex]):not([tabindex="-1"])'
                );
            },
            reposition() {
                const trigger = this.$refs.trigger;
                const menu = this.$refs.menu;
                if (!trigger || !menu) return;

                const gap = 8;
                const screenPad = 8;
                const rect = trigger.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                const availableBelow = Math.max(0, viewportHeight - rect.bottom - screenPad - gap);
                const availableAbove = Math.max(0, rect.top - screenPad - gap);

                // BOTTOM
                if (menu.offsetHeight <= availableBelow || availableBelow >= this.repositionHeight) {
                    const height = Math.floor(Math.min(this.maxHeight, availableBelow, menu.offsetHeight + 1));
                    this.placement = "bottom";
                    this.coords = { left: rect.left, top: rect.bottom + gap, width: rect.width };
                    this.computedHeight = height;

                    return;
                }

                // TOP
                if (menu.offsetHeight <= availableAbove || availableAbove >= this.repositionHeight) {
                    const height = Math.floor(Math.min(this.maxHeight, availableAbove, menu.offsetHeight + 1));
                    this.placement = "top";
                    this.coords = { left: rect.left, top: rect.top - height - gap, width: rect.width };
                    this.computedHeight = height;
                    return;
                }

                // OVERLAP
                let top = rect.top;
                let height = Math.min(this.maxHeight, viewportHeight - rect.top - screenPad);
                if (height < this.repositionHeight) {
                    // Try shifting upward
                    top = Math.max(screenPad, viewportHeight - this.maxHeight - screenPad);
                    height = Math.min(this.maxHeight, viewportHeight - screenPad * 2);
                }

                // Last resort: fill as much as possible while staying on-screen
                if (height < this.repositionHeight) {
                    top = screenPad;
                    height = viewportHeight - screenPad * 2;
                }

                this.placement = "overlap";
                this.coords = { left: rect.left, top, width: rect.width };
                this.computedHeight = Math.floor(height);
            },
            scheduleReposition() {
                const menu = this.$refs.menu;
                if (!menu) 
                    return;

                menu.style.left = "-9999px";
                menu.style.top = "-9999px";
                menu.style.height = "auto";
                
                this.computedHeight = 99999;
                requestAnimationFrame(() => this.reposition());
            },
            handleGlobalClick(e) {
                const trigger = this.$refs.trigger;
                const menu = this.$refs.menu;
                if (!trigger?.contains(e.target) && !menu?.contains(e.target)) 
                    this.close();
            },
            handleGlobalScroll(e) {
                const trigger = this.$refs.trigger;
                const menu = this.$refs.menu;
                if (!trigger?.contains(e.target) && !menu?.contains(e.target)) 
                    this.close();
            },
            handleTab(e) {
                const focusable = this.$refs.menu?.querySelectorAll(
                    ':is(button, input, [href], select, textarea, [tabindex]):not([tabindex="-1"])'
                );

                if (!focusable?.length) 
                    return;

                const first = focusable[0];
                const last  = focusable[focusable.length - 1];

                if (!e.shiftKey && document.activeElement === last)
                    this.close();
                else if (e.shiftKey && document.activeElement === first)
                    this.close();
            }
        },
        mounted() {
            window.addEventListener("resize", this.close);
            window.addEventListener("scroll", this.handleGlobalScroll, true);
            document.addEventListener("mousedown", this.handleGlobalClick);
        },
        beforeUnmount() {
            window.removeEventListener("resize", this.close);
            window.removeEventListener("scroll", this.handleGlobalScroll, true);
            document.removeEventListener("mousedown", this.handleGlobalClick);
        },
        watch: {
            modelValue(open) {
                switch (open) {
                case true:
                    this.$nextTick(() => {
                        this.scheduleReposition();
                        if (this.autoFocus)
                            this.queryFirstFocusable()?.focus();

                        requestAnimationFrame(() => {
                            this.$nextTick(() => this.$emit("opened"));
                        });
                    });
                    break;

                case false:
                    this.$refs.trigger?.focus();
                    this.$nextTick(() => this.$emit("closed"));
                    break;
                }
            }
        }
    };
</script>

<style scoped>
    .wrapper {
        display: inline-flex;
        justify-self: start;
        align-self: start;
    }

    .wrapper--full-width {
        display: flex;
        width: 100%;
    }

    .popover-trigger {
        flex: 1;
    }

    .popover-bounds {
        display: grid;
        grid-template: minmax(0, 1fr) / minmax(0, 1fr);
        align-items: start;

        position: fixed;
        pointer-events: auto;
        z-index: var(--z-index-popover);
        opacity: 1;
        will-change: opacity, transform;
    }

    .popover-enter-active,
    .popover-leave-active {
        transition: opacity 180ms ease, transform 180ms ease;
    }

    .popover-leave-active {
        pointer-events: none;
    }

    .popover-enter-to,
    .popover-leave-from {
        opacity: 1;
        transform: scale(1);
    }

    .popover-enter-from,
    .popover-leave-to {
        opacity: 0;
        transform: scale(0.98);
    }
</style>