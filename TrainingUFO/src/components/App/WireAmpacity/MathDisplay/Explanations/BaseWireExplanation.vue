<template>
    <figure>
        <BaseWireTable :calculator="calculator" style="justify-self: stretch;" />

        <figcaption class="fig-cap">
            <span class="fig-cap-cite">
                NEC 2023 Table 310.16—{{calculator.conductorMaterial.label}}
            </span>
            <span class="fig-cap-body">
                Ampacities of Insulated Conductors with not more than Three Current-Carrying Conductors in Raceway, Cable, or Earth (Directly Buried)
            </span>
            <br />
            <span style="font-weight: 500; color: var(--text-light); display: inline-block; margin-top: 4px;">
                Table abbreviated to conserve space
            </span>
        </figcaption>
    </figure>
</template>

<script>
    import BaseWireTable from './VizAids/BaseWireTable.vue';
    import { NEC } from '@/models/NEC/_NEC.js';
    import { AmpacityCalculator } from '@/models/AmpacityCalculator.js';

    export default {
        components: {
            BaseWireTable
        },
        props: {
            calculator: AmpacityCalculator
        },
        data: () => ({
            NEC
        })
    }
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

    .fig-cap--secondary {
        font-weight: 500;
    }
</style>