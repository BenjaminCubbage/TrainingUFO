<template>
    <div 
        ref="buttons"
        class="buttons" 
        :class="[
            { 'buttons--contrast':   contrast },
            { 'buttons--full-width': fullWidth }
        ]"
        @focusout="onFocusOut"
        v-bind="filterByKeyRegex($attrs, /^(class|style|data-)/i)">
        <button v-for="(datum, index) in options" :key="datum"
                :ref="el => { roving.registerFocusGroupItem(el, datum, index); }"
                class="button"
                :class="{'button--selected': modelValue == datum}"
                @click="select(datum)">
            <slot name="label" :datum="datum" />
        </button>
    </div>
</template>

<script>
    import { ref, toRef } from "vue";
    import { filterByKeyRegex } from "@/util/filterByKey.js";
    import { useRovingFocusGroup } from "../../composables/useRovingFocusGroup.js";

    export default {
        inheritAttrs: false,
        props: {
            modelValue: null,
            options:    { type: Array,   required: true },
            contrast:   { type: Boolean, default: false },
            fullWidth:  { type: Boolean, default: false }
        },
        data: () => ({
            filterByKeyRegex
        }),
        setup(props) {
            const buttons = ref(null);
            const roving = useRovingFocusGroup(buttons, toRef(props, "modelValue"), { orientation: "horizontal", wrap: false });
            return { buttons, roving };
        },
        methods: {
            select(datum) {
                this.$emit("update:modelValue", datum);
            }
        }
    }
</script>

<style scoped>
    .buttons {
        --segmented-button-label-text-color: var(--text-lighter);
        --segmented-button-border-color: var(--border);
        --segmented-button-border-color-hover: var(--border);
        --segmented-button-border-color-selected: var(--border);
        --segmented-button-background-color: var(--bg-l2);
        --segmented-button-background-color-hover: var(--bg-l1);
        --segmented-button-background-color-selected: var(--bg-l0);
        --segmented-button-text-color: var(--text-light);
        --segmented-button-text-color-hover: var(--text);
        --segmented-button-text-color-selected: var(--text);
        
        align-self: start;
        justify-self: start;
        display: flex;
    }

    .buttons--contrast {
        --segmented-button-label-text-color: var(--text-contrast);
        --segmented-button-border-color: var(--border-contrast-light);
        --segmented-button-border-color-hover: var(--border-contrast);
        --segmented-button-border-color-selected: var(--border-contrast);
        --segmented-button-background-color: var(--bg-contrast-l0);
        --segmented-button-background-color-hover: var(--bg-contrast-l1);
        --segmented-button-background-color-selected: var(--bg-contrast-l2);
        --segmented-button-text-color: var(--text-contrast);
        --segmented-button-text-color-hover: var(--text-contrast);
        --segmented-button-text-color-selected: var(--text-contrast);
    }

    .buttons--full-width {
        width: 100%;
    }

    .button {
        flex-grow: 1;
        width: 100%;
        background: var(--segmented-button-background-color);
        border: 1px solid var(--segmented-button-border-color);
        border-width: 1px 0;
        padding: var(--control-padding);
        font-family: var(--font-heading);
        font-weight: 600;
        font-size: 1.65rem;
        letter-spacing: 0.04em;
        color: var(--segmented-button-text-color);
        cursor: pointer;
    }

    .button:hover:not(.button--selected) {
        border-color: var(--segmented-button-border-color-hover);
        color: var(--segmented-button-text-color-hover);
        background: var(--segmented-button-background-color-hover);
        box-shadow: var(--control-inset), 
                    inset -0.5px 0 0 var(--segmented-button-border-color-hover), 
                           0.5px 0 0 var(--segmented-button-border-color-hover),
                    inset  0.5px 0 0 var(--segmented-button-border-color-hover),
                          -0.5px 0 0 var(--segmented-button-border-color-hover);

        z-index: 2;
    }

    .button:first-child:hover:not(.button--selected) {
        box-shadow: var(--control-inset), 
                    inset -0.5px 0 0 var(--segmented-button-border-color-hover),
                           0.5px 0 0 var(--segmented-button-border-color-hover);
    }

    .button:last-child:hover:not(.button--selected) {
        box-shadow: var(--control-inset), 
                    inset 0.5px 0 0 var(--segmented-button-border-color-hover),
                         -0.5px 0 0 var(--segmented-button-border-color-hover);
    }

    .button--selected {
        background: var(--segmented-button-background-color-selected);

        box-shadow: var(--control-inset), 
                    inset -0.5px 0 0 var(--segmented-button-border-color-selected), 
                           0.5px 0 0 var(--segmented-button-border-color-selected),
                    inset  0.5px 0 0 var(--segmented-button-border-color-selected),
                          -0.5px 0 0 var(--segmented-button-border-color-selected);
        color: var(--segmented-button-text-color-selected);
        border-color: var(--segmented-button-border-color-selected);

        z-index: 3;

        cursor: default;
    }

    .button:only-child {
        border-radius: var(--control-radius);
    }

    .button:first-child {
        border-top-left-radius: var(--control-radius);
        border-bottom-left-radius: var(--control-radius);
        border-left-width: 1px;
    }

    .button:last-child {
        border-top-right-radius: var(--control-radius);
        border-bottom-right-radius: var(--control-radius);
        border-right-width: 1px;
    }
    
    .button--selected:first-child {
        box-shadow: var(--control-inset), 
                    inset -0.5px 0 0 var(--segmented-button-border-color-selected),
                           0.5px 0 0 var(--segmented-button-border-color-selected);
    }
    
    .button--selected:last-child {
        box-shadow: var(--control-inset), 
                    inset 0.5px 0 0 var(--segmented-button-border-color-selected),
                         -0.5px 0 0 var(--segmented-button-border-color-selected);
    }
</style>