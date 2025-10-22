<template>
    <div :class="{'wrapper': true, 'wrapper--constrict': constrict}">
        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            constrict: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        display: grid;
        padding: 0 var(--text-content-minimum-horizontal-margins);
    }

    .wrapper--constrict {
        max-width: 650px;
    }
</style>