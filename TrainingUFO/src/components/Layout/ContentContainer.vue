<template>
    <div class="wrapper">
        <div class="layout" :class="{'layout--extra-wide': extraWide}">
            <div class="main" :class="{'main--full-width': fullWidth}">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            fullWidth: {
                type: Boolean,
                default: false
            },
            extraWide: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        container: container / inline-size;
    }

    .layout {
        display: grid;
        grid-template-columns: 2fr 8fr 2fr;
    }

    .layout--extra-wide {
        grid-template-columns: 1fr 8fr 1fr;
    }

    .main {
        grid-area: 1 / 2;
        padding-top: 30px;
        justify-self: center;
    }

    .main--full-width {
        justify-self: stretch;
    }

    @container container (max-width: 1200px) {
        .layout {
            grid-template-columns: 1fr 10fr 1fr;
        }

        .layout--extra-wide {
            grid-template-columns: 10px 1fr 10px;
        }
    }

    @container container (max-width: 900px) {
        .layout {
            grid-template-columns: var(--main-padding-x-mob) 1fr var(--main-padding-x-mob);
        }

        .layout--extra-wide {
            grid-template-columns: var(--main-padding-x-mob) 1fr var(--main-padding-x-mob);
        }
    }
</style>