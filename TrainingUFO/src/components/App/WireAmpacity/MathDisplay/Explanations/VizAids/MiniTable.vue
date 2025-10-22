<template>
    <div
        v-show="rows?.length > 0"
        class="mini-table"
        role="table"
        aria-label="Data table"
        :style="gridStyle">
        
        <!-- Header row -->
        <div class="row" role="row" style="grid-row: 1;">
            <div
                v-for="(colLabel, cIndex) in columns"
                :key="'header-' + cIndex"
                :class="'col'"
                :style="{ gridColumn: cIndex + 3 }"
                role="columnheader"
                :aria-colindex="cIndex + 1">
                {{ colLabel }}
            </div>
        </div>

        <!-- Spacer -->
        <div aria-hidden="true"></div>

        <!-- Data rows -->
        <div
            v-for="(rowLabel, rIndex) in rowLabels"
            :key="'row-' + rIndex"
            class="row"
            role="row"
            :aria-rowindex="rIndex + 2"
            :style="{ gridRow: rIndex + 3 }">

            <div
                class="col-label"
                role="rowheader"
                :aria-colindex="1">
                {{ rowLabel }}
            </div>

            <div
                v-for="(cell, cIndex) in rows[rIndex]"
                :key="'cell-' + rIndex + '-' + cIndex"
                :class="[
                    'col',
                    { 'col--selected': selected?.row === rIndex && selected?.col === cIndex }
                ]"
                :style="{ gridColumn: cIndex + 3 }"
                role="cell"
                :aria-colindex="cIndex + 2">
                {{ cell }}
            </div>
        </div>

        <!-- Selection highlights -->
        <div 
            v-show="selected?.col != null && selected?.row != null && columns.length > 1"
            class="span-horiz"
            aria-hidden="true"
            :style="{
                gridRow:    `1 / span ${selected?.row + 3}`,
                gridColumn: selected?.col + 3
            }">
        </div>

        <div
            v-show="selected?.col != null && selected?.row != null"
            class="span-verti"
            aria-hidden="true"
            :style="{
                gridRow:    selected?.row + 3,
                gridColumn: `1 / span ${selected?.col + 3}`
            }">
        </div>
    </div>
</template>

<script>
    export default {
        name: "MiniTable",
        props: {
            columns: { type: Array, required: true },
            rowLabels: { type: Array, required: true },
            rows: { type: Array, required: true },
            selected: { type: Object, default: null }
        },
        computed: {
            gridStyle() {
                return {
                    display: "grid",
                    gridTemplateColumns: `[col-label] var(--col-width) var(--labels-spacer) repeat(${this.columns.length}, var(--col-width)) [col-end]`,
                    gridTemplateRows: "var(--row-height) var(--labels-spacer)",
                    gridAutoRows: "var(--row-height)",
                    position: "relative"
                };
            }
        }
    };
</script>

<style scoped>
    .mini-table {
        --col-width: minmax(0, 1fr);
        --row-height: 40px;
        --labels-spacer: 8px;

        margin: 1px;
        font-family: var(--font-heading);
        font-size: 1.5rem;
        letter-spacing: 0.03em;
        font-weight: 600;
        font-variant-numeric: tabular-nums;

        display: grid;
        grid-template-columns: auto; /* Dynamically set */
                                
        grid-template-rows: var(--row-height) var(--labels-spacer);
        grid-auto-rows: var(--row-height);
        position: relative;
    }

    .row { 
        display: grid;
        grid-column: col-label / col-end;
        grid-template-columns: subgrid;
    }

    .col-label, .col {
        display: grid;
        justify-content: center;
        align-content: center;

        background: var(--bg-l2);
        box-shadow: inset 0 0 0 0.4px var(--border-light),
                          0 0 0 0.4px var(--border-light);
    }

    .col-label { grid-column: col-label; }

    .col {
        background: white;
        color: var(--text-lighter);
    }

    .row:first-child > * {
        color: var(--text);
    }

    .col--selected {
        z-index: 100;
        box-shadow: inset 0 0 0 0.75px var(--secondary-lght),
                          0 0 0  0.75px var(--secondary-lght);
        background: var(--secondary-lght);
        color: var(--text);
    }

    .span-horiz, .span-verti {
        pointer-events: none;
        box-shadow: inset 0 0 0 1px var(--secondary-lght),
                          0 0 0  1px var(--secondary-lght);
    }
</style>