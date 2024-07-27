<template>

    <the-header :titleProp="title"></the-header>
    <the-resource @SelectedComponent="ToggleComponent"></the-resource>

    <stored-resource v-if="componentToSelect == 'stored-resource'" :storedResourcesProp="storedResources"
        @ResourceToDeleteId='StoredResourceToDelete'>
    </stored-resource>

    <keep-alive>
        <add-resource v-if="componentToSelect == 'add-resource'" @addresource="AddingResource"
            :formSubmittedProps="formSubmitted">
        </add-resource>
    </keep-alive>

</template>

<script>

import StoredResource from './components/learning-resources/StoredResource.vue';
import AddResource from './components/learning-resources/AddResource.vue';
import TheHeader from './header/TheHeader.vue';
import TheResource from './components/learning-resources/TheResource.vue';

export default {
    components: {
        //  'learning-resource' : LearningResource
        AddResource,
        StoredResource,
        TheHeader,
        TheResource
    },
    methods: {
        StoredResourceToDelete(eventData) {
            // alert('eventData',eventData)
            console.log('eventData*****', eventData);
            this.storedResources =  this.storedResources.filter((x) => x.id != eventData)
        },
        ToggleComponent(eventData) {
            // console.log('Received:', eventData); // Add this line for debugging
            // alert(eventData)
            this.componentToSelect = eventData;
        },
        AddingResource(eventData) {
            // this.formSubmitted = false;
            // console.log('Receiving emiited eventData', eventData);
            const maxId = this.storedResources.reduce((max, resource) => {
                // console.log('max',max);
                // console.log('resource',resource);
                return resource.id > max ? resource.id : max;
            }, 0);
            // console.log('maxId', maxId);

            this.storedResources.push({
                id: maxId + 1,
                title: eventData.title,
                description: eventData.description,
                link: eventData.link,
            });

            // this.storedResources.push({
            //     id: maxId + 1,
            //     ...eventData
            // });

            this.formSubmitted = true;
            // Reset formSubmitted after some time to allow further form submissions
            setTimeout(() => this.formSubmitted = false, 1000);

        }
    },
    data() {
        return {
            formSubmitted: false,
            title: 'Book Store',
            componentToSelect: '',
            storedResources: [
                {
                    id: 1,
                    title: 'Google',
                    description: `Google is an internet search engine. It uses a proprietary algorithm that's designed to retrieve and order search results to provide the most relevant and dependable sources of data possible.`,
                    link: 'https://www.google.com/'
                },
                {
                    id: 2,
                    title: 'Vue Official Guide',
                    description: `The Progressive JavaScript Framework An approachable, performant and versatile framework for building web user interfaces.`,
                    link: 'https://vuejs.org/'
                }
            ],

        }//return end
    } //data end
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>