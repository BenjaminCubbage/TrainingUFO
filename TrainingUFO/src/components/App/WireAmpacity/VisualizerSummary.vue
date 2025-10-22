<template>
    <div class="summary">
        <div class="summary-content">
            <label class="summary-title" style="grid-column: sum 1">
                {{summary1Title}}
            </label>
            
            <output class="summary-value summary-value--large" style="grid-column: sum 1">
                {{summary1Value}}
            </output>

            <label class="summary-title" style="grid-column: sum 2">
                {{summary2Title}}
            </label>

            <output class="summary-value summary-value" style="grid-column: sum 2">
                {{summary2Value}}
            </output>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            summary1Title: { type: String, default: undefined },
            summary2Title: { type: String, default: undefined },
            summary1Value: { type: String, default: undefined },
            summary2Value: { type: String, default: undefined }
        }
    }
</script>

<style scoped>
    .summary {
        container: summary / size;
        pointer-events: none;
    }

    .summary-content {
        display: grid;
        align-self: flex-start;
        justify-self: start;
        grid-template-rows: [title] auto [value] auto;
        grid-template-columns: [sum] auto [sum] auto;
        gap: 0 48px;
        margin: 24px;
    }

    .summary-title {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        line-height: 0.8em;
        font-weight: 600;
        color: var(--text-lightest);
        letter-spacing: 0.04em;
        pointer-events: all;

        grid-row: title;
    }

    .summary-value {
        position: relative;
        align-self: start;
        font-family: var(--font-heading);
        font-size: 2.4rem;
        font-weight: 700;
        color: var(--text-lighter);
        letter-spacing: 0.04em;
        line-height: 1.4em;
        pointer-events: all;
        grid-row: value;
    }

    .summary-value--large {
        line-height: 1.2em;
        font-size: 3.6rem;
        color: var(--primary-main);
    }

    .summary-value::after {
        content: "";
        position: absolute;
        height: 4px;
        width: 30px;
        background: var(--secondary-lght);

        left: 0px;
        bottom: 0px;
        transform: skew(-20deg, 0deg);
    }

    @container summary (max-width: 500px) {
        .summary-content {
            margin: 12px;
            gap: 0 12px;
            grid-template-columns: [sum] 1fr [sum] 1fr;
            justify-self: stretch;

            align-items: center;
        }
    }
</style>