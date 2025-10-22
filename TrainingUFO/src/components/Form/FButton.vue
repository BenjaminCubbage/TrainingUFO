<template>
    <div style="display: contents;">
        <div class="wrapper">
            <button class="button" @click="this.$emit('click')">
                <slot />
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ["click"]
    }
</script>

<style scoped>
    .wrapper {
        display: grid;
        font-size: 1.6rem;
    }

    .button {
        position: relative;

        padding: var(--control-padding);
        font-family: var(--font-heading);
        font-weight: 600;
        letter-spacing: 0.04em;
        color: var(--text-light);

        border: 1px solid var(--border-light);
        border-radius: var(--control-radius);
        background: var(--bg-l2);

        cursor: pointer;
        box-shadow: var(--control-outset);
    }

    .button:hover {
        background: var(--bg-l1);
    }

    .button:active {
        box-shadow: var(--control-inset);
        background: var(--bg-l0);
    }
</style>