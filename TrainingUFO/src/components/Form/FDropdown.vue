<template>
    <div class="dropdown" :class="{ 'dropdown-trigger--contrast': contrast }">
        <HeadlessPopover 
            v-model="isOpen"
            :maxHeight="345"
            :repositionHeight="210"
            @opened="opened"
            :fullWidth="fullWidth"
            autoFocus
            v-bind="$attrs">
            <template #trigger="{ open }">
                <div class="trigger" :class="{ 'trigger--open': open }" :disabled="disabled">
                    <div class="toggle-text">
                        <span v-if="label" style="font-weight: 600">{{label}}&nbsp;</span>
                        <slot v-if="options.includes(toRaw(modelValue))" name="label" :datum="modelValue" />
                        <template v-else>Select One...</template>
                    </div>

                    <div class="toggle-caret">
                        keyboard_arrow_down
                    </div>
                </div>
            </template>

            <template #content="{ open }">
                <div class="menu-border">
                    <div ref="menu" class="menu" :class="{ 'menu--open': open }">
                        <button
                            v-for="(option, index) in options" 
                            :key="option"
                            :ref="(el) => { roving.registerFocusGroupItem(el, option, index); optionEls[index] = el; }"
                            class="menu-item"
                            :class="{ 'menu-item--selected': option === toRaw(modelValue) }"
                            @click="select(option)">
                            <slot name="label" :datum="option" />
                        </button>
                    </div>
                </div>
            </template>
        </HeadlessPopover>
    </div>
</template>

<script>
    import { useRovingFocusGroup } from "../../composables/useRovingFocusGroup.js";
    import { ref, toRaw, computed } from "vue";
    import HeadlessPopover from "../Headless/HeadlessPopover.vue";

    export default {
        name: "FDropdown",
        components: { HeadlessPopover },
        props: {
            modelValue: null,
            label:     { type: String,  default: undefined },
            options:   { type: Array,   required: true },
            disabled:  { type: Boolean, default: false },
            contrast:  { type: Boolean, default: false },
            fullWidth: { type: Boolean, default: false }
        },
        emits: ["update:modelValue"],
        data: () => ({
            toRaw,
            isOpen: false,
            optionEls: []
        }),
        setup(props) {
            const menu   = ref(null);
            const roving = useRovingFocusGroup(menu, computed(() => {
                const modelValue = props.modelValue;
                const options    = props.options;

                if (modelValue && options.includes(toRaw(modelValue)))
                    return modelValue;
                
                return options[0] ?? null;
            }), { orientation: "vertical", wrap: false, autoReset: false });

            return { menu, roving };
        },
        methods: {
            select(option) {
                if (this.modelValue !== option) {
                    this.$emit("update:modelValue", option);
                    this.isOpen = false;
                }
            },
            opened() {
                this.roving.getFocusedElement()?.scrollIntoView?.({ block: "center" });
            }
        },
        mounted() {
            if (!this.modelValue && this.options.length)
                this.$emit("update:modelValue", this.options[0]);
        }
    };
</script>

<style scoped>
    .dropdown {
        display: contents;
        --dropdown-assume-background: var(--bg-l1);
        --dropdown-label-text-color: var(--text-lighter);
        --dropdown-trigger-text-color: var(--text);
        --dropdown-trigger-text-color-open: var(--text);
        --dropdown-trigger-background-color: var(--bg-l2);
        --dropdown-trigger-background-color-hover: var(--bg-l1);
        --dropdown-trigger-background-color-open: var(--bg-l0);
        --dropdown-trigger-border-color: var(--border-light);
        --dropdown-trigger-border-color-hover: var(--border);
        --dropdown-trigger-border-color-open: var(--border);
    }

    .dropdown--contrast {
        --dropdown-assume-background: var(--bg-contrast-l0);
        --dropdown-label-text-color: var(--text-contrast);
        --dropdown-trigger-text-color: var(--text-contrast);
        --dropdown-trigger-text-color-open: var(--text-contrast);
        --dropdown-trigger-background-color: var(--bg-contrast-l0);
        --dropdown-trigger-background-color-hover: var(--bg-contrast-l1);
        --dropdown-trigger-background-color-open: var(--bg-contrast-l2);
        --dropdown-trigger-border-color: var(--border-contrast-light);
        --dropdown-trigger-border-color-hover: var(--border-contrast);
        --dropdown-trigger-border-color-open: var(--border-contrast);
    }

    .trigger {
        display: flex;
        justify-content: space-between;

        position: relative;

        padding: var(--control-padding);
        padding-right: 30px;

        font-family: var(--font-heading);
        font-weight: 500;
        letter-spacing: 0.05em;
        color: var(--dropdown-trigger-text-color);

        border: 1px solid var(--dropdown-trigger-border-color);
        border-radius: var(--control-radius);
        background: var(--dropdown-trigger-background-color);

        cursor: pointer;

        box-shadow: var(--control-outset-none), 
                    var(--control-inset-none), 
                    0 0 0 0px var(--dropdown-assume-background), 
                    0 0 0 0px var(--secondary-lght);

        transition: box-shadow 200ms ease, background 200ms ease;
    }

    .trigger:hover:not(.trigger--open) {
        border-color: var(--dropdown-trigger-border-color-hover);
        background: var(--dropdown-trigger-background-color-hover);
        box-shadow: var(--control-outset-none), 
                    var(--control-inset), 
                    0 0 0 0px var(--dropdown-assume-background), 
                    0 0 0 0px var(--secondary-lght);
    }

    .trigger--open {
        color: var(--dropdown-trigger-text-color-open);
        border-color: var(--dropdown-trigger-border-color-open);
        background: var(--dropdown-trigger-background-color-open);
        box-shadow: var(--control-outset-none),
                    var(--control-inset), 
                    0 0 0 2px var(--dropdown-assume-background), 
                    0 0 0 4px var(--secondary-lght);
    }

    .trigger:disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    .toggle-text {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .toggle-caret {
        font-family: var(--font-material-symbols-outlined); 
        line-height: 1; 
        width: 8px;
        height: 8px;
        position: relative;
        left: 5px;
        display: grid;
        align-self: center;
        align-content: center;

        font-size: 2.1rem;
        user-select: none;
        font-variation-settings: 'FILL' 0, 'wght' 280, 'GRAD' 0, 'opsz' 24;
    }

    .menu-border {
        display: grid;
        grid-template: minmax(0, 1fr) / minmax(0, 1fr);
        border: 1px solid var(--border-lightest);
        border-radius: var(--control-radius);
        box-shadow: var(--control-outset);
        max-height: 100%;
        overflow: hidden;
    }

    .menu {
        display: flex;
        flex-direction: column;
        min-height: 0;
        overscroll-behavior: contain;
        background: var(--bg-l2);
        overflow: auto;
        transition: opacity 200ms ease, transform 200ms ease;
    }

    .menu:not(.menu--open) .menu-item::after {
        transition-delay: 200ms;
    }

    .menu-item {
        position: relative;
        z-index: 0;
        display: grid;
        grid-template-columns: auto 1fr;
        font-family: var(--font-heading);
        color: var(--text-light);
        font-weight: 500;
        letter-spacing: 0.05em;
        font-size: 1.6rem;
        text-align: left;
        padding: calc(var(--control-padding-y) + 4px) var(--control-padding-x);
        background: transparent;
    }

    .menu-item:disabled {
        pointer-events: none;
    }

    .menu-item--selected {
        color: var(--text);
    }

    .menu-item::after {
        content: "";
        position: absolute;
        z-index: -1;
        inset: 3px;
        background: transparent;
        border-radius: var(--control-radius);
        transition: background-color 0ms linear;
    }

    .menu-item:hover::after,
    .menu-item--selected::after {
        background: var(--bg-l0);
    }
</style>