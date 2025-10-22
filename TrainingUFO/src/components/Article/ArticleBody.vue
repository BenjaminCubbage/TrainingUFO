<template>
    <section class="article">
        <slot />
    </section>
</template>

<style scoped>
    .article {
        margin-top: 12px;
    }

    :deep(h2) {
        position: relative;
        z-index: 0;

        color: var(--text);
        font-family: var(--font-heading);
        font-size: 2.6rem;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 1.15;

        margin-top: 6rem;

        width: auto;
        justify-self: left;
    }

    :deep(h2::before) {
        content: "";
        position: absolute;
        z-index: -1;

        left: -4px;
        bottom: 1px;

        width: 90px;
        height: 10px;

        background: var(--secondary-lght);
        transform: skew(-10deg);
    }

    :deep(h3) {
        position: relative;
        z-index: 0;

        color: var(--text);

        font-family: var(--font-heading);
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 1.15;

        margin-top: 3.5rem;
        margin-right: 24px;

        width: auto;
        justify-self: left;
    }

    :deep(p), :deep(ol), :deep(ul) {
        color: var(--text);
        font-size: 1.7rem;
        line-height: 2;

        margin-top: 2.5rem;
        letter-spacing: 0.04em;
    }

    :deep(p + p) {
        margin-top: 2.5rem;
    }

    :deep(li > :is(ol, ul)) {
        margin-top: 1rem;
    }
</style>