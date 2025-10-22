<template>
    <figure style="contain: inline-size;">
        <img 
            v-bind="filterByKeyRegex($attrs, /^(aria-|id$|src$|alt$|loading$)/i)" 
            loading="lazy"
            class="img" 
            :style="{
                'aspect-ratio': aspectRatio,
                'width': width
            }">

        <figcaption class="caption" :style="{ 'width': width }">
                {{caption}}
        </figcaption>
    </figure>
</template>

<script>
    import { filterByKeyRegex } from "@/util/filterByKey.js";

    export default {
        inheritAttrs: false,
        props: {
            aspectRatio: { type: String, required: true },
            width:       { type: String, default: "500px" },
            caption:     { type: String, default: null }
        },
        data: () => ({ filterByKeyRegex })
    }
</script>

<style scoped>
    .img {
        margin-top: 28px;
        max-width: 100%;
        box-shadow: 0 0 10px 0 rgb(0 0 0 / 0.1);
        content-visibility: auto;
    }

    .caption {
        font-family: var(--font-body);
        color: var(--text-lighter);
        font-size: 1.6rem;
        text-align: center;
        margin-top: 8px;
        max-width: 100%;
        letter-spacing: 0.04em;
    }
</style>