<template>
    <div class="math-display-container">
        <div class="math-display">
            <div class="math-step">
                <div class="step-heading">
                    <span class="step-number">1</span> Wire Ampacity Before Derating
                </div>

                <div class="step-body">
                    {{baseWireAmpacityStr}}
                </div>
            </div>

            <BaseWireExplanation :calculator="calculator" />
            
            <div class="math-step">
                <div class="step-heading">
                    <span class="step-number">2</span> Temperature Correction
                </div>

                <div class="step-body">
                    {{baseWireAmpacityStr}} × {{temperatureCorrectionStr}} = {{temperatureCorrectedAmpacityStr}}
                </div>
            </div>

            <TempCorrectionExplanation class="math-expl" :calculator="calculator" />

            <div class="math-step">
                <div class="step-heading">
                    <span class="step-number">3</span> Bundling Derating
                </div>

                <div class="step-body">
                    {{temperatureCorrectedAmpacityStr}} × {{conductorCountMultiplierStr}} = {{adjustedWireAmpacityStr}}
                </div>
            </div>

            <BundlingDerateExplanation class="math-expl" :calculator="calculator" />
        </div>
    </div>
</template>



<script>
    import { floorToHundredth } from '@/util/floorToDecimal.js';

    import { AmpacityCalculator } from '@/models/AmpacityCalculator.js';
    import BaseWireExplanation from './Explanations/BaseWireExplanation.vue';
    import BundlingDerateExplanation from './Explanations/BundlingDerateExplanation.vue';
    import TempCorrectionExplanation from './Explanations/TempCorrectionExplanation.vue';

    export default {
        components: {
            BaseWireExplanation,
            BundlingDerateExplanation,
            TempCorrectionExplanation
        },
        props: {
            calculator: AmpacityCalculator
        },
        computed: {
            baseWireAmpacityStr() {
                return floorToHundredth(this.calculator.baseWireAmpacity()) + "A";
            },
            temperatureCorrectionStr() {
                return floorToHundredth(this.calculator.temperatureCorrectionFactor());
            },
            temperatureCorrectedAmpacityStr() {
                return floorToHundredth(this.calculator.baseWireAmpacity() * this.calculator.temperatureCorrectionFactor()) + "A";
            },
            conductorCountMultiplierStr() {
                return floorToHundredth(this.calculator.conductorCountMultiplier());
            },
            adjustedWireAmpacityStr() {
                return floorToHundredth(this.calculator.baseWireAmpacity() * 
                                        this.calculator.temperatureCorrectionFactor() * 
                                        this.calculator.conductorCountMultiplier()) + "A";
            }
        }
    }
</script>

<style scoped>
    .math-display-container {
        container: math-display-container / inline-size;
    }

    .math-display {
        display: grid;

        grid-template-rows: 1fr;
        grid-template-columns: [math] 10fr [expl] 9fr;
        gap: 48px 0;
    }

    .math-step {
        grid-column: math;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;

        font-family: var(--font-heading);
        font-size: 1.7rem;
        line-height: 2;
        padding: 10px 20px 30px 40px;
        letter-spacing: 0.03em;
        color: var(--text);
        white-space: nowrap;
        overflow: auto;
    }

    .step-heading {
        font-weight: 600;
        margin-left: -39px;
        margin-top: 20px;
        font-size: 2.3rem;
    }
    
    .step-number {
        position: relative;
        z-index: 0;
        display: inline-block; 
        color: white; 
        width: 25px;
        text-align: center;
        font-size: 3rem;
        line-height: 1.5;
        margin-right: 16px;
        margin-left: 16px;
        font-weight: 600;
    }

    .step-number::before {
        content: "";
        position: absolute;
        z-index: -1;
        inset: 0 -12px;
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        background: var(--bg-contrast-l0); 
    }

    .step-body {
        position: relative;
        font-size: 3rem;
        font-weight: 700;
        color: var(--primary-main);
        line-height: 1;
        margin-left: 24px;
    }

    .step-body::after {
        content: "";
        position: absolute;
        height: 4px;
        width: 30px;
        background: var(--secondary-lght);

        left: 0px;
        bottom: -5px;
        transform: skew(-20deg, 0deg);
    }

    .math-expl {
        grid-column: expl;
    }

    @container math-display-container (max-width: 750px) {
        .math-display {
            grid-auto-rows: minmax(0, auto);
            grid-template-columns: [math expl] minmax(0, auto);
            
            gap: 0 0;
        }
        

        .step-heading {
            margin-top: 32px;
            font-size: 2.1rem;
        }

        .math-step {
            padding: 10px 20px 20px 40px;
        }
    }
</style>