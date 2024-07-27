<template>
    <base-card>
        <base-button @click="ToggleComponent('add-resource')" :mode="SelectedComponent ==  'add-resource' ?null : flat">Add Resource</base-button>
    </base-card>
    <base-card>
        <base-button @click="ToggleComponent('stored-resource')" :mode="SelectedComponent ==  'stored-resource' ?null : flat">Stored Resource</base-button>
    </base-card>

</template>

<script>
import BaseButton from '../../UI/BaseButton.vue'

export default {
    mounted() {

    },
    watch: {

    },
    components: {
        BaseButton
    },
    props: {
    },
    data() {
        return {
            SelectedComponent: 'stored-resource'
        }
    },
    methods: {
        ToggleComponent(component) {
            // alert(component)
            console.log('Emitting:', component); 
            this.SelectedComponent = component
            this.$emit('SelectedComponent',component)
        }
    }
}
</script>

<style></style>