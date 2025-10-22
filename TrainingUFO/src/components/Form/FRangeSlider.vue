<template>
    <div v-bind="filterByKeyRegex($attrs, /^(class|style|data-)/i)">
        <input 
            class="range" 
            type="range" 
            :min="rangeMin" 
            :max="rangeMax"
            :value="inputValue"
            v-model.number="inputValue"
            :style="{'--min': rangeMin, '--max': rangeMax, '--value': inputValue}"
            v-bind="filterByKeyRegex($attrs, /^(id|name|tabindex|title|aria-)/i)" />
    </div>
</template>

<script>
    import { filterByKeyRegex } from "@/util/filterByKey.js";

    export default {
        inheritAttrs: false,
        props: {
            modelValue: null,
            minValue: { type: Number, required: false },
            maxValue: { type: Number, required: false },
            options: { type: Array, default: null }
        },
        data: () => ({
            inputValue: 0,
            filterByKeyRegex
        }),
        computed: {
            rangeMin() { return !this.options ? this.minValue : 0; },
            rangeMax() { return !this.options ? this.maxValue : this.options.length - 1; },
        },
        watch: {
            modelValue: {
                handler(newValue) {
                    if (this.options) {
                        const i = this.options.indexOf(newValue);

                        if (i >= 0)
                            this.inputValue = i;
                        else
                            this.$emit("update:modelValue", this.options[0]);
                    } else if (this.minValue && this.maxValue) {
                        this.inputValue = Math.min(Math.max(newValue, this.minValue), this.maxValue);
                    }
                },
                immediate: true
            },
            options: {
                handler(newValue) {
                    if (newValue) {
                        const i = newValue.indexOf(this.modelValue);
                        if (i >= 0)
                            this.inputValue = i;
                        else
                            this.$emit("update:modelValue", newValue[0]);
                    }
                },
                immediate: true
            },
            inputValue(newValue) {
                if (this.options && newValue < this.options.length)
                    this.$emit("update:modelValue", this.options[newValue]);
                else if (this.minValue && this.maxValue)
                    this.$emit("update:modelValue", newValue);
            }
        }
    }
</script>

<style scoped>
    .range {
        -webkit-appearance: none;
        appearance: none;
        display: block;
        width: 100%;
        background: transparent;
        outline: none;
        cursor: pointer;

        --track-size: 6px;
        --thumb-size: 16px;
        --thumb-border: 2px;
        --track: var(--border-light);
        --fill:  var(--secondary-main);
        --thumb: var(--secondary-main);
        --fill-hover: var(--secondary-dark);
        --track-hover: var(--secondary-dark);

        --min: 0; 
        --max: 0; 
        --value: 0;
    }

    .range:focus-visible { 
        outline: 2px solid var(--fill); 
        outline-offset: 2px; 
    }

    .range::-webkit-slider-runnable-track {
        height: var(--track-size);
        border-radius: 999px;
        background:
            linear-gradient(var(--fill) 0 0) 0/ 
            calc( (var(--value) - var(--min)) * 100% / (var(--max) - var(--min)) ) 100% 
            no-repeat,
            var(--track);
        cursor: pointer;
    }

    .range::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: var(--thumb-size);
        height: var(--thumb-size);
        border-radius: 50%;
        background: var(--thumb);
        border: var(--thumb-border) solid var(--fill);
        margin-top: calc((var(--track-size) - var(--thumb-size)) / 2);
        box-shadow: none;
        cursor: pointer;
    }

    .range::-webkit-slider-thumb:hover {
        background: var(--fill-hover);
        border-color: var(--fill-hover);
    }

    .range:hover::-webkit-slider-runnable-track { 
        background:
            linear-gradient(var(--fill-hover) 0 0) 0/ 
            calc( (var(--value) - var(--min)) * 100% / (var(--max) - var(--min)) ) 100% 
            no-repeat,
            var(--track);
    }

    .range::-webkit-slider-thumb:hover {
        background: var(--fill-hover);
        border-color: var(--fill-hover);
    }

    .range:hover::-webkit-slider-runnable-track { 
        background:
            linear-gradient(var(--fill-hover) 0 0) 0/ 
            calc( (var(--value) - var(--min)) * 100% / (var(--max) - var(--min)) ) 100% 
            no-repeat,
            var(--track);
    }

    .range::-moz-range-track {
        height: var(--track-size);
        background: var(--track);
        border-radius: 999px;
        cursor: pointer;
    }

    .range::-moz-range-progress {
        height: var(--track-size);
        background: var(--fill);
        border-radius: 999px;
        cursor: pointer;
    }

    .range::-moz-range-thumb {
        width: calc(var(--thumb-size) - 4px);
        height: calc(var(--thumb-size) - 4px);
        border-radius: 50%;
        background: var(--thumb);
        border: var(--thumb-border) solid var(--fill);
        box-shadow: none;
        cursor: pointer;
    }
    
    .range::-moz-focus-outer { 
        border:0; 
    }

    .range::-moz-range-thumb:hover,
    .range:active::-moz-range-thumb {
        background: var(--fill-hover);
        border-color: var(--fill-hover);
    }

    .range:hover::-moz-range-progress {
        background: var(--fill-hover);
        border-color: var(--fill-hover);
    }
</style>