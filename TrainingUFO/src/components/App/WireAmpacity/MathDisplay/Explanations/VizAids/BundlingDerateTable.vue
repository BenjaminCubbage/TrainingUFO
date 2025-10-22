<template>
    <MiniTable
        :columns="['Multiplier']"
        :rowLabels="miniTableRowLabels"
        :rows="miniTableRows"
        :selected="miniTableSelection" />
</template>

<script>
    import { NEC } from '@/models/NEC/_NEC';
    import { AmpacityCalculator } from '@/models/AmpacityCalculator';
    import MiniTable from './MiniTable.vue';

    export default {
        components: { MiniTable },
        props: {
            calculator: AmpacityCalculator
        },
        data: () => ({
            NEC
        }),
        computed: {
            validCounts() {
                return this.NEC.ConductorCounts.ordered;
            },

            countIndex() {
                return this.validCounts.indexOf(this.calculator.conductorCount);
            },

            miniTableRowLabels() {
                return this.validCounts.map(c => c.label);
            },

            miniTableRows() {
                const multipliers = this.NEC.ConductorCountMultipliers;

                // only include the multiplier column (omit conductor count)
                return this.validCounts.map(count => {
                    const entry = multipliers[count];
                    return [entry ? entry.multiplier.label : '—'];
                });
            },

            miniTableSelection() {
                const row = this.countIndex;
                return row !== -1 ? { row, col: 0 } : null;
            }
        }
    };
</script>