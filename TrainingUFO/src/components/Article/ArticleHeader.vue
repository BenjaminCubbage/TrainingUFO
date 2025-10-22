<template>
    <header class="article-header">
        <h1 class="title">
            {{title}}
        </h1>

        <p class="article-info">
            <span class="author">{{author}}</span>&nbsp;&nbsp;—&nbsp;&nbsp;<span class="date">{{date}}</span>
        </p>
    </header>
</template>

<script>
    export default {
        props: {
            title: { type: String, required: true },
            author: { type: String, required: true },
            date: { type: String, required: true }
        }
    }
</script>

<style scoped>
    .title {
        display: block;
        position: relative;

        font-size: 6rem;
        font-family: var(--font-heading);
        font-weight: 700;
        letter-spacing: 0.025em;
        line-height: 1.15;
        color: var(--text-contrast);

        padding: 1rem 0;
        margin-top: 3.5rem;
        margin-right: 24px;
        margin-bottom: 1rem;
        margin-left: -2px;
    }

    .title::before {
        content: "";
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -24px;
        right: -24px;
        
        background: var(--bg-contrast-l0);
        z-index: -1;
    }

    .article-info {
        display: block;
        position: relative;

        font-size: 1.6rem;
        font-family: var(--font-heading);
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 2;
        text-transform: uppercase;
        color: var(--text-lighter);
        margin-top: 24px;
    }

    .author {
        color: var(--text);
        font-weight: 700;
        text-decoration: underline;
        text-decoration-color: var(--secondary-main);
        text-decoration-thickness: 3px;
    }

    .date {
        color: var(--text-light);
        font-weight: 700;
    }

    @media only screen and (max-width: 650px) {
        .title {
            font-size: 4rem;
        }
    }
</style>