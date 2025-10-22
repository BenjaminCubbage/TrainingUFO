<template>
    <div class="wrapper">
        <div ref="modes" class="modes" @focusout="onFocusOut">
            <button 
                v-for="(option, index) in options" 
                :class="{'mode': true, 'mode--selected': modelValue==option}" 
                @click="select(option)"
                :ref="el => { roving.registerFocusGroupItem(el, option, index); }"
                :key="option">
                <slot name="label" :datum="option" />
            </button>
        </div>
        
        <div class="body">
            <div v-for="(option, index) in options" v-show="option == modelValue" :key="index">
                <slot :name="`mode-${index}`" />
            </div>
        </div>
    </div>
</template>

<script>
    import { ref, toRef } from "vue";
    import { useRovingFocusGroup } from "../../composables/useRovingFocusGroup.js";

    export default {
        props: {
            modelValue: {
                required: true
            },
            options: {
                type: Array,
                default: []
            }
        },
        setup(props) {
            const modes  = ref(null);
            const roving = useRovingFocusGroup(modes, toRef(props, "modelValue"), { orientation: "horizontal", wrap: false });
            return { modes, roving };
        },
        methods: {
            select(option) {
                this.$emit("update:modelValue", option);
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        container: container / inline-size;

        display: grid;
        font-size: 1.6rem;
    }

    .modes {
        display: flex;
        flex-direction: row;
        box-shadow: inset 0 -1px 0 var(--border-lightest);
    }

    .mode {
        padding: 10px 20px 6px 20px;

        color: var(--text-lighter);
        font-family: var(--font-heading);
        font-weight: 600;

        font-size: 1.8rem;
        text-transform: uppercase;

        border-bottom: 4px solid transparent;
        line-height: 1em;
        flex-shrink: 1;

        display: flex;
        align-items: end;
    }

    .mode--selected {
        border-color: var(--secondary-main);
        color: var(--text);
    }

    .mode:hover:not(.mode--selected) {
        background: rgba(0, 0, 0, 0.03);
    }
</style>