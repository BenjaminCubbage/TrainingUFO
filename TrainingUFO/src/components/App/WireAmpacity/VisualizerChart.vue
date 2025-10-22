<template>
    <SVGSeamlessBarChart v-model="calculator.wireGauge"
                        :xAxis="xAxis" 
                        :yAxis="yAxis" 
                        :minScale="300">
        <template #tickLabel="{ xValue }">
            #{{ xValue.value }}
        </template>
    </SVGSeamlessBarChart>
</template>

<script>
    import FSegmentedButton from '../../Form/FSegmentedButton.vue';
    import SVGSeamlessBarChart from './Chart/SVGSeamlessBarChart.vue';
    import MathDisplay from './MathDisplay/MathDisplay.vue';

    import { NEC } from '../../../models/NEC/_NEC.js';
    import { AmpacityCalculator } from '../../../models/AmpacityCalculator';

    export default {
        components: { 
            SVGSeamlessBarChart,
            FSegmentedButton,
            MathDisplay
        },
        props: {
            calculator: AmpacityCalculator
        },
        data: () => ({
            NEC,
            showMathDisplay: false,
        }),
        computed: {
            xAxis() {
                const a = this.calculator.conductorCount;
                const b = this.calculator.ambientTemperature;
                return this.calculator.getAllValidWireGauges();
            },
            yAxis() {
                return gauge => this.calculator.adjustedWireAmpacity(gauge);
            }
        }
    }
</script>