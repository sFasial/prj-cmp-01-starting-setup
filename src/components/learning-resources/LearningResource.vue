<template>
    <li>
        <basecard>
        <!-- 
            <h3>Resource title : {{ resource.title }}</h3>
            <p>Resource id : {{ resource.id }}</p>
            <p>Resource description : {{ resource.description }}</p>
            <p>Resource link : <a :href="resource.link">Visit : {{ resource.title }}</a></p> 
        -->
            <header>
                <h3>Resource title : {{ resource.title }}</h3>
                <base-button mode="flat" @click="Delete">Delete</base-button>
            </header>
            <p>Resource description : {{ resource.description }}</p>
            <nav>
            <p>Resource link : <a :href="resource.link">Visit : {{ resource.title }}</a></p>
            </nav>
        </basecard>
    </li>
</template>

<script>

export default {
    emits : ['resourceId'],
    mounted() {
        console.log('Component mounted');
        console.log('Initial resource:', this.resource);
    },
    props: {
        resource: {
            type: Object,
            required: true
        }
    },
    watch: {
        resource(newValue, oldValue) {
            console.log('newValue', newValue);
            console.log('oldValue', oldValue);
        }
    },
    data() {
        return {

        }
    },
    methods: {
        Delete(){
            // alert(this.resource.id)
            this.$emit('resourceId',this.resource.id);
        }
    }
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>