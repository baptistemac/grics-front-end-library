<template>
    <article class='card'>
        <h3>{{ title }}</h3>
        <g-button v-bind="$props" :label="buttonLabel" />
    </article>
</template>

<script>
    import GButton from '../Button';

    export default {
        name: 'g-card',
        components: { GButton },
        props: {
            title       : String,
            buttonLabel : String,
        }
    }
</script>

<style scoped>
    .card {
        border: 1px solid navajowhite;
        padding: 1rem;
    }
</style>
