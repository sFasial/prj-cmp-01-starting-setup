<template>

<!-- <error-alert v-if="emptyResource" :isOpen="emptyResource" @close="emptyResource = false">
        <template v-slot:default>
            <h2>Input is Invalid</h2>
            <p>Please enter at least a few characters</p>
            // comment button
            <button @click="isInputInvalid = false">SetisInputInvalid</button> 
        </template>
</error-alert> -->


<base-dialog v-if="emptyResource" title="Invalid Input"
  @close="TryAgain()"
  >
    
  <template #default>
    <p>Unfortunately , atleast one input value is invalid</p>
    <p>Please check all inputs and make sure you enter atleast a few characters</p>
  </template>

  <template #actions>
    <button @click="TryAgain()">Okay</button>


  </template>
  </base-dialog>


    <base-card>
        <form @submit.prevent="handleSubmit">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" v-model="resource.title">
            </div>
            <!-- <p>{{ resource.title }}</p> -->

            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" cols="10" rows="5"
                    v-model="resource.description">Description</textarea>
            </div>

            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" name="link" v-model="resource.link">
            </div>

            <div class="form-control">
                <!-- <base-button>Add Resource</base-button> -->
                <button>Add Resource</button>
            </div>
        </form>
    </base-card>
    <p>formSubmittedProps : {{formSubmittedProps}}</p>
</template>

<script>
export default {
    emits : ['addresource', ],
    data() {
        return {
            emptyResource : false,
            resource: {
                title: '',
                description: '',
                link: ''
            }
        }
    },
    props: {
        formSubmittedProps: {
            type : Boolean , 
            required :  false
        }
    },
    mounted(){
        console.log('Mounted', this.formSubmittedProps);
    },
    watch : {
        formSubmittedProps(newVal) {
            console.log('Watcher triggered newVal', newVal);
            if (newVal === true) {
                this.resetResource();
            }
        }
    },
    methods: {
        TryAgain(){
            this.emptyResource = false;
        },
        handleSubmit() {
            // alert('clicked')
            // console.log('emit resource started', this.resource);
            if (this.resource.title.trim() == '' || this.resource.description.trim() == '' || this.resource.link.trim() == '') {
                this.emptyResource = true;
                // this.$refs.errorAlert.
                return ;
            }
            this.$emit('addresource', this.resource);
        },
        resetResource() {
            this.resource.title = '';
            this.resource.description = '';
            this.resource.link = '';
        }
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>