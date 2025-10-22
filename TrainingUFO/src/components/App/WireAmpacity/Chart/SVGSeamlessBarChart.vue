<template> 
  <div class="chart-container">
    <div class="chart">
      <svg class="bars" viewBox="0 0 1000 240" preserveAspectRatio="none">
        <rect
          v-for="bar in barGeometry"
          :key="bar.i"
          class="bar"
          :class="{ 'bar--selected': bar.xValue !== null && bar.xValue === modelValue }"
          :x="bar.x"
          :y="bar.y"
          :width="bar.width"
          :height="bar.height"
          :style="{ pointerEvents: bar.xValue !== null ? 'auto' : 'none' }"
          @click="bar.xValue !== null && $emit('update:modelValue', bar.xValue)"
        />
      </svg>
    </div>

    <div class="ticks" :style="{'grid-template-columns': `repeat(${xAxis.length}, minmax(0, 1fr))`}">
      <div
        v-for="(xValue, i) in xAxis"
        :key="'tick-' + i"
        class="tick"
        :class="{ 'tick--selected': xValue === modelValue }"
        @click="$emit('update:modelValue', xValue)"
      >
        <slot name="tickLabel" :xValue="xValue">{{ xValue }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
import { floorToTenth } from '@/util/floorToDecimal';

export default {
  name: "SeamlessBarChart",
  props: {
    xAxis:      { type: Array,    required: true },
    yAxis:      { type: Function, required: true },
    minScale:   { type: Number,   default: 100 },
    modelValue: { required: false }
  },

  data: () => ({
    barGeometry: [],
    currLength: 0,
    prevLength: 0,
    currWidth: 0,
    prevWidth: 0,
    currHeights: [],
    prevHeights: []
  }),

  computed: {
    rawValues() {
      return this.xAxis.map((x) => this.yAxis(x));
    },
    effectiveMax() {
      const actualMax = Math.max(...this.rawValues, 1);
      return Math.max(this.minScale, actualMax) + 20;
    },
    barWidthCurrent() {
      const n = Math.max(this.xAxis.length, 1);
      return 1000 / n;
    },
    selectedIndex() {
      return this.xAxis.findIndex(x => x === this.modelValue);
    },
    hasSelection() {
      return this.selectedIndex !== -1;
    },
    formattedAmpacity() {
      if (!this.hasSelection) return '';
      const val = this.yAxis(this.modelValue);
      return floorToTenth(val);
    }
  },

  methods: {
    rectHeightFromRawValue(val) {
      const plotHeight = 240;
      return (val / this.effectiveMax) * plotHeight;
    },

    prepareBarGeometryForSlideIn() {
      this.barGeometry = this.xAxis.map((xValue, i) => {
        const width = this.prevWidth + 1;
        const height = this.prevHeights[i] ?? this.prevHeights.at(-1) ?? this.currHeights[i];
        const x = this.prevWidth * i;
        const y = 240 - height;

        return { i, xValue, width, height, x, y };
      });
    },
    
    updateAllBarGeometry() {
      const geometry = this.xAxis.map((xValue, i) => {
        const width = this.currWidth + 1;
        const height = this.currHeights[i];
        const x = this.currWidth * i;
        const y = 240 - height;
        return { i, xValue, width, height, x, y };
      });

      this.prevHeights.slice(this.xAxis.length).forEach((_, i) => {
        const effectiveIndex = this.xAxis.length + i;
        const width = this.currWidth + 1;
        const height = this.currHeights.at(-1);
        const x = this.currWidth * effectiveIndex;
        const y = 240 - height;
        geometry.push({ i: effectiveIndex, xValue: null, width, height, x, y });
      });

      this.barGeometry = geometry;
    }
  },

  watch: {
    xAxis: {
      handler() {
        this.prevLength = this.currLength;
        this.currLength = this.xAxis.length;

        this.prevWidth = this.currWidth;
        this.currWidth = 1000 / this.currLength;

        this.prevHeights = this.currHeights;
        this.currHeights = this.rawValues.map(v => this.rectHeightFromRawValue(v));

        this.prevLength = this.prevLength ?? this.currLength;
        this.prevWidth = this.prevWidth ?? this.currWidth;
        this.prevHeights = this.prevHeights ?? this.currHeights;

        if (this.prevHeights.length < this.currHeights.length)
          this.prepareBarGeometryForSlideIn();

        this.$nextTick(() => {
          requestAnimationFrame(() => {
            this.updateAllBarGeometry();
          });
        });
      },
      immediate: true,
      deep: false,
    }
  }
};
</script>

<style scoped>
  .chart-container {
    container: chart-container / inline-size;
    display: grid;
    grid-template-rows: [chart] 1fr [ticks] auto;
  }

  .chart {
    position: relative;
    font-size: 1.6rem;
    display: grid;
    grid-row: chart;
    overflow: hidden;
    border: 1px solid var(--border-light);
    border-bottom: 0;
    border-radius: 3px 3px 0 0;
    height: 100%;
    z-index: 0;
    
    --bar-fill: hsl(220, 12%, 88%);
    --bar-fill-hover: hsl(220, 12%, 82%);
    --bar-geom-ms: 300ms;
  }

  .bars {
    width: 100%;
    height: 100%;
    padding-top: 5px;
    display: block;
    background: var(--bg-l2);
  }

  .bar {
    fill: var(--bar-fill);
    cursor: pointer;
    transition:
      x var(--bar-geom-ms) ease,
      width var(--bar-geom-ms) ease,
      y var(--bar-geom-ms) ease,
      height var(--bar-geom-ms) ease;
  }

  .bar--selected { 
    fill: var(--primary-main); 
  }

  .bar:not(.bar--selected):hover { 
    fill: var(--bar-fill-hover); 
  }

  .ticks {
    display: grid;
    grid-row: ticks;
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--text-contrast);
    background: var(--bg-contrast-l0);
    border: 1px solid var(--bg-contrast-l2);
    border-top: 0;
    box-shadow: 0 -1px var(--bg-contrast-l2);
    border-radius: 0 0 3px 3px;
    z-index: 1;
  }

  .tick {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border-radius: 1000px;
    padding: 6px 0 5px 0;
    margin: 10px 5px;
  }

  .tick:not(.tick--selected):hover { 
    background: var(--bg-contrast-l1); 
  }

  .tick--selected { 
    background: var(--bg-contrast-l2); 
  }

  @media (prefers-reduced-motion: reduce) { 
    .bar { transition: none; } 
  }

  @container chart-container (max-width: 800px) {
    .tick {
      padding: 10px 3px 10px 0;
      margin: 0;
      border-radius: 0;
      writing-mode: vertical-lr;
      transform: scale(-1);
      justify-content: end;
    }
  }
</style>