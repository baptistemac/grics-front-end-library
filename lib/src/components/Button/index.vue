<template>
    <button type='button' class='btn' :class="classes">
        {{ label }}
    </button>
</template>

<script>
    export default {
        name: 'g-button',
        inheritAttrs: false,
        props: {
            label       : String,
            hierarchy   : String,
            size        : String,
        },
        data() {
            return {
                classes: {
                    'btn--primary'  : (this.hierarchy !== 'secondary'),
                    'btn--secondary': (this.hierarchy === 'secondary'),
                }
            }
        }
    }
</script>

<style scoped>
    .btn {
        border: none;
        padding: .5rem 1rem;
        border-radius: 4px;
        background-color: navajowhite;
        cursor: pointer;
    }

    .btn--secondary {
        border: 1px solid navajowhite;
        background-color: transparent;
    }
</style>