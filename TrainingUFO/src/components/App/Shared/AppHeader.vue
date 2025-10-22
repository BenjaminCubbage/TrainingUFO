<template>
    <header class="app-header">
        <h1 class="title">
            {{title}}
        </h1>

        <p class="subheading">
            <slot />
        </p>
    </header>
</template>

<script>
    export default {
        props: { title: { type: String, required: true } }
    }
</script>

<style scoped>
    .app-header { 
        --px: 24px; 
        --py: 8px;

        font-family: var(--font-heading);
        padding-right: var(--px);
        padding-top: 36px;
    }

    .title {
        background: var(--bg-contrast-l0);
        color: var(--text-contrast);
        display: inline;
        padding: var(--py) var(--px);
        text-transform: uppercase;
        letter-spacing: 0.035em;
        font-size: 3.4rem;
        font-weight: 700;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
    }

    .subheading {
        padding-left: var(--px);
        font-size: 1.6rem;
        margin-top: 24px;
        font-weight: 600;
        color: var(--text-light);
        letter-spacing: 0.035em;
        text-transform: uppercase;
        line-height: 1.5;
    }
</style>