<template>
    <button :class="classes">
        {{ label }}
    </button>
</template>

<script>
    export default {
        name: 'g-button',
        inheritAttrs: false,
        props: {
            /** C'est pratique pour écrire un label. */
            label: {
                type: String,
                required: true,
            },
            size: {
                type: String,
                validator: (prop) => [ 'small', 'medium', 'large' ].includes(prop),
                default: 'small'
            },
            hierarchy: {
                type: String,
                validator: (prop) => [ 'primary', 'secondary' ].includes(prop)
            },
        },
        data() {
            return {
                classes: {
                    'color-neutral-primary px-3 py-3 rounded-small cursor-pointer': true,
                    'bg-color-action-primary border-none btn--primary'  : (this.hierarchy !== 'secondary'),
                    'border border-solid bg-transparent border-primary btn--secondary': (this.hierarchy === 'secondary'),
                }
            }
        }
    }
</script>

<style scoped>
    /* Rien n'a voir :) */
</style>