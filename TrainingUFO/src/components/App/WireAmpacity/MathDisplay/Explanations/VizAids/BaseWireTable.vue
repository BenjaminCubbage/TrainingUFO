<template>
    <div class="base-wire-table">
        <MiniTable
            :columns="['60°C', '75°C', '90°C']"
            :rowLabels="miniTableRowLabels"
            :rows="miniTableRows"
            :selected="miniTableSelection" />
    </div>
</template>

<script>
    import { NEC } from '@/models/NEC/_NEC';
    import { AmpacityCalculator } from '@/models/AmpacityCalculator';
    import MiniTable from './MiniTable.vue';

    export default {
        components: {
            MiniTable
        },
        props: {
            calculator: AmpacityCalculator
        },
        data: () => ({
            NEC
        }),
        methods: {
            ampacityStr(ampacity) {
                return ampacity ? `${ampacity}A` : "—";
            }
        },
        computed: {
            validGauges() {
                return this.calculator.getAllValidWireGauges(NEC.ConductorRatings.RATED_90);
            },

            gaugeIndex() {
                return this.validGauges.indexOf(this.calculator.wireGauge);
            },

            surroundingGauges() {
                const gauges = this.validGauges;
                const i = this.gaugeIndex;

                if (i === -1) return [];

                const start = Math.max(0, Math.min(i - 1, gauges.length - 3));
                const end   = Math.min(start + 3, gauges.length);

                return gauges.slice(start, end);
            },

            miniTableRowLabels() {
                return this.surroundingGauges.map(g => g.label);
            },

            miniTableRows() {
                return this.surroundingGauges.map(g => [
                    this.ampacityStr(this.calculator.baseWireAmpacity(g, NEC.ConductorRatings.RATED_60)),
                    this.ampacityStr(this.calculator.baseWireAmpacity(g, NEC.ConductorRatings.RATED_75)),
                    this.ampacityStr(this.calculator.baseWireAmpacity(g, NEC.ConductorRatings.RATED_90))
                ]);
            },

            miniTableSelection() {
                if (this.gaugeIndex === -1) return null;

                const total = this.validGauges.length;
                const i = this.gaugeIndex;

                const start = Math.max(0, Math.min(i - 1, total - 3));
                const row = i - start;

                const rating = this.calculator.insulationRating;
                const colMap = {
                    [NEC.ConductorRatings.RATED_60]: 0,
                    [NEC.ConductorRatings.RATED_75]: 1,
                    [NEC.ConductorRatings.RATED_90]: 2
                };

                const col = colMap[rating];
                if (col == null) {
                    console.warn(`[MathDisplay] invalid insulation rating: ${rating}`);
                    return null;
                }

                return { row, col };
            }
        }
    }
</script>