<template>
    <div class="bundling-derate-expl">
        <BundlingDerateTable :calculator="calculator" style="justify-self: stretch;" />

        <div class="fig-cap">
            <span class="fig-cap-cite">NEC 2023 Table 310.15(C)(1)</span>
            <span class="fig-cap-body">
                Adjustment Factors for More Than Three Current-Carrying Conductors
            </span>
        </div>
    </div>
</template>

<script>
    import BundlingDerateTable from './VizAids/BundlingDerateTable.vue';
    import { NEC } from '@/models/NEC/_NEC';
    import { AmpacityCalculator } from '@/models/AmpacityCalculator';

    export default {
        components: {
            BundlingDerateTable
        },
        props: {
            calculator: AmpacityCalculator
        },
        data: () => ({
            NEC
        })
    };
</script>

<style scoped>
.fig-cap {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    margin: 12px 8px;
    line-height: 1.5;
    letter-spacing: 0.03em;
}

.fig-cap-cite {
    display: inline-block;
    margin-left: 10px;
    position: relative;
    color: var(--text-contrast);
    z-index: 0;
    margin-right: 18px;
    flex-shrink: 0;
    align-self: start;
}

.fig-cap-cite::before {
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -12px;
    right: -12px;
    background: var(--bg-contrast-l0);
    z-index: -1;
    transform: skew(-10deg);
}

.fig-cap-note {
    font-weight: 500;
    font-style: italic;
    white-space: nowrap;
}
</style>