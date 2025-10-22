<template>
    <div class="temp-correction-table">
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
        components: { MiniTable },
        props: {
            calculator: AmpacityCalculator
        },
        data: () => ({
            NEC
        }),
        computed: {
            validTemps() {
                return this.NEC.AmbientTemperatures.ordered;
            },

            tempIndex() {
                return this.validTemps.indexOf(this.calculator.ambientTemperature);
            },

            surroundingTemps() {
                const temps = this.validTemps;
                const i = this.tempIndex;

                if (i === -1) 
                    return [];

                const start = Math.max(0, Math.min(i - 1, temps.length - 3));
                const end   = Math.min(start + 3, temps.length);

                return temps.slice(start, end);
            },

            miniTableRowLabels() {
                return this.surroundingTemps.map(t => t.celsius.label);
            },

            miniTableRows() {
                const factors = this.NEC.TemperatureCorrectionFactors;

                return this.surroundingTemps.map(temp => {
                    const entry = factors[temp];
                    if (!entry)
                        return ['—', '—', '—'];

                    if (temp === NEC.AmbientTemperatures.C10_OR_LESS) {
                        console.log(entry);
                    }

                    return [
                        entry[this.NEC.ConductorRatings.RATED_60].label,
                        entry[this.NEC.ConductorRatings.RATED_75].label,
                        entry[this.NEC.ConductorRatings.RATED_90].label
                    ];
                });
            },

            miniTableSelection() {
                if (this.tempIndex === -1) 
                    return null;

                const total = this.validTemps.length;
                const i = this.tempIndex;

                const start = Math.max(0, Math.min(i - 1, total - 3));
                const row = i - start;

                const rating = this.calculator.insulationRating;
                const colMap = {
                    [this.NEC.ConductorRatings.RATED_60]: 0,
                    [this.NEC.ConductorRatings.RATED_75]: 1,
                    [this.NEC.ConductorRatings.RATED_90]: 2
                };

                const col = colMap[rating];
                if (col == null) {
                    console.warn(`[TempCorrectionTable] invalid insulation rating: ${rating}`);
                    return null;
                }

                return { row, col };
            }
        }
    };
</script>