<template>
    <!-- 
    <p> <button @click="ToggleComponent('add-resource')">Add-Resource</button> <button @click="ToggleComponent('stored-resource')">Stored-Resource</button></p>
   <add-resource v-if="SelectedComponent == 'add-resource'"></add-resource>
    -->
    <ul>
        <learning-resource 
            v-for="resource in storedResourcesProp" :key="resource.id"
            :resource="resource"
            @resourceId="ResourceToDelete"
            >
        </learning-resource>
    </ul>

</template>

<script>
import LearningResource from './LearningResource.vue';
// import AddResource from './AddResource.vue';
export default {
    emits : ['ResourceToDeleteId'],
    mounted() {
        console.log('storedResources Component mounted');
        console.log('storedResources prop Initial resource:', this.storedResourcesProp);
    },
    watch: {
        storedResourcesProp(oldValue, newValue) {
            console.log('StoredResource newValue', newValue);
            console.log('StoredResource oldValue', oldValue);
        }
    },
    components: {
        'learning-resource': LearningResource,
        // AddResource
    },
    props: {
        storedResourcesProp: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // ResourceToDeleteId : 0,
            SelectedComponent: 'add-resource'
        }
    },
    methods: {
        ToggleComponent(component) {
            this.SelectedComponent = component
        },
        ResourceToDelete(eventData){
            console.log('eventData', eventData);
            this.$emit('ResourceToDeleteId', eventData);
        }
    }
}
</script>

<style></style>