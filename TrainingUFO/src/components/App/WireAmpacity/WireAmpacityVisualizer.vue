<template>
    <div class="viz">
        <AppHeader :title="'Wire Ampacity  Visualizer'">
            Based on the <b style="color: var(--text); 
                                   text-decoration: underline; 
                                   text-decoration-color: var(--secondary-main);
                                   text-decoration-thickness: 3px">2023</b> edition of the NEC. Not affiliated—Always verify results!
        </AppHeader>

        <div class="grid">
            <div class="viz-results-container">
                <div ref="hoistBeginTrigger" class="hoist-begin-trigger"></div>
                <div ref="hoistEndTrigger" class="hoist-end-trigger"></div>

                <div
                    ref="results" 
                    class="viz-results" 
                    :class="[
                        { 'viz-results--sticky': hoistBegin },
                        { 'viz-results--beyond': hoistEnd }
                    ]">
                    <VisualizerSummary
                        class="viz-summ"
                        :class="{'viz-summ--visible': floorToTenth(calculator.adjustedWireAmpacity())}"
                        :summary1Title="'Adjusted Wire Ampacity'"
                        :summary1Value="`${floorToTenth(calculator.adjustedWireAmpacity())}A`"
                        :summary2Title="'Continuous Loads (80%)'"
                        :summary2Value="`${floorToTenth(calculator.adjustedWireAmpacity() * 0.8)}A`" />

                    <transition name="viz-too-hot-anim" appear :duration="{ enter: 1000, leave: 1000 }">
                        <TooHot class="viz-too-hot" v-show="calculator.tooHot()" />
                    </transition>

                    <VisualizerChart class="viz-chart" :calculator="calculator"/>
                </div>
            </div>
            
            <MathDisplay class="viz-math" :calculator="calculator" />

            <div class="viz-opts">
                <VisualizerOptsPanel :calculator="calculator"/>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    import { AmpacityCalculator } from '@/models/AmpacityCalculator';
    import { floorToTenth } from '@/util/floorToDecimal';
    import { useStickyStatus } from "@/composables/useStickyStatus";
    
    import AppHeader from '@/components/App/Shared/AppHeader.vue';
    import VisualizerChart from './VisualizerChart.vue';
    import VisualizerOptsPanel from './VisualizerOptsPanel.vue';
    import VisualizerSummary from './VisualizerSummary.vue';
    import ContentContainer from '@/components/Layout/ContentContainer.vue';
    import TooHot from './TooHot.vue';
    import MathDisplay from './MathDisplay/MathDisplay.vue';

    export default {
        components: {
            VisualizerChart,
            VisualizerOptsPanel,
            VisualizerSummary,
            ContentContainer,
            TooHot,
            MathDisplay,
            AppHeader
        },
        props: {
            calculator: AmpacityCalculator
        },
        data: () => ({
            floorToTenth
        }),
        setup() {
            const hoistBeginTrigger = ref(null);
            const hoistEndTrigger = ref(null);
            const hoistBegin = useStickyStatus(hoistBeginTrigger).isStuck;
            const hoistEnd   = useStickyStatus(hoistEndTrigger).isStuck;

            return { hoistBeginTrigger, hoistEndTrigger, hoistBegin, hoistEnd };
        }
    }
</script>

<style scoped>
    .viz {
        container: viz / inline-size;
        display: flex;
        flex-flow: column nowrap;
        gap: 24px;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: minmax(0, auto) minmax(0, auto);
        grid-template-areas: "results opts"
                             "math    opts";

        gap: 96px 48px;
        --chart-height: min(400px, calc(100dvh - var(--navbar-sticky-offset-height) - 16px));
    }

    .viz-results-container {
        grid-area: results;
        display: grid;
        grid-template: minmax(0, 1fr) / minmax(0, 1fr);
    }

    .viz-results {
        grid-area: 1 / 1;
        display: grid;
        grid-template: minmax(0, auto) / minmax(0, auto);
        align-self: start;
        z-index: 200;
        transition: margin 200ms ease, box-shadow 200ms ease, transform 300ms ease, clip-path 200ms ease;
    }

    .hoist-begin-trigger {
        grid-area: 1 / 1;
        align-self: start;
        justify-self: start;
        width: 1px;
        height: 1px;
        pointer-events: none;
        position: relative;
        background: transparent;
        top: calc(var(--viz-results-sticky-top) * -1);
    }

    .hoist-end-trigger {
        grid-area: 1 / 1;
        z-index: 1;
        width: 1px;
        height: calc(100% - var(--chart-height) - var(--navbar-sticky-offset-height) - 70px);
        pointer-events: none;
        background: transparent;
        bottom: 50dvh;
    }

    .viz-chart, .viz-summ, .viz-too-hot { grid-area: 1 / 1; }
    .viz-chart   { z-index: 1; }
    .viz-summ    { z-index: 2; }
    .viz-too-hot { z-index: 3; }

    .viz-chart {
        z-index: 1;
        height: var(--chart-height);
    }

    .viz-summ {
        pointer-events: none;
        opacity: 0.2;
        filter: grayscale(100%);
        transition: opacity 200ms ease, filter 200ms ease;
    }

    .viz-summ--visible {
        opacity: 1;
        filter: grayscale(0);
    }

    .viz-math {
        grid-area: math;
    }

    .viz-too-hot {
        will-change: opacity, transform;
        padding-bottom: 50px;
        transform-origin: bottom center;
    }

    .viz-too-hot-anim-enter-from,
    .viz-too-hot-anim-leave-to {
        transform: scale(0.9);
        opacity: 0;
    }

    .viz-too-hot-anim-enter-to,
    .viz-too-hot-anim-leave-from {
        transform: scale(1);
        opacity: 1;
    }

    .viz-too-hot-anim-enter-active,
    .viz-too-hot-anim-leave-active {
        transition: opacity 200ms ease, transform 400ms ease;
    }

    .viz-too-hot--visible {
        transform: scale(1);
    }

    .viz-opts {
        width: 240px;
        justify-self: center;
        grid-area: opts;
        align-self: start;
    }

    @container viz (max-width: 850px) {
        .grid {
            --viz-results-sticky-top: calc((100dvh - var(--navbar-sticky-offset-height) - var(--chart-height)) / 2 + var(--navbar-sticky-offset-height));

            gap: 48px 12px;
            grid-template-columns: 1fr auto;
            grid-template-rows: minmax(0, auto) minmax(0, auto);
            grid-template-areas: "results opts"
                                 "math    math";
        }

        .viz-results {
            position: sticky;
            top: var(--viz-results-sticky-top);
            border-radius: 3px;
            box-shadow: 0 12px 12px var(--bg-l1);
        }

        .viz-results--sticky {
            transform: scale(1.01);
            box-shadow: 0 3px 10px 2px rgb(0 0 0 / 0.06);
        }
    }

    @container viz (max-width: 650px) {
        .grid {
            --viz-results-sticky-top: calc(var(--navbar-sticky-offset-height) - 1px);
            --chart-height: max(200px, 30dvh);
            
            grid-template-areas: initial;
            grid-template-columns: [opts results math] minmax(0, 1fr);
            grid-template-rows: [results-start] var(--chart-height) [opts] auto [results-end math] auto;
            gap: 36px;
        }

        .viz-results {
            transform-origin: top;
            clip-path: circle(100% at 50% 50%);
        }
        
        .viz-results--sticky {
            transform: scale(calc((100dvw + 4px) / ((100dvw) - 2 * var(--main-padding-x-mob))));
        }

        .viz-results--beyond {
            clip-path: circle(0% at 50% 0%);
        }
    }
</style>