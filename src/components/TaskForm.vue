<template>
        <h2>Form</h2>
        <form @submit.prevent="postTask()" >
            <BaseInput 
                v-model="title"
                label="Title"
                type="text"
            />
            <BaseInput 
                v-model="details"
                label="Details"
                type="text"
            />
            <button class="button" type="submit">Submit</button>
        </form>   
</template>

<script>
import { inject, ref } from 'vue'
import { BaseInput } from './BaseInput.vue'
import TaskServices from '../services/TaskServices' 

export default {
    name: 'TaskForm',
    setup() {
        const title = ref ('')
        const details = ref('')
        function postTask() {
            let task = {
            title: title.value,
            details: details.value
            }
            console.log(task)
            TaskServices.postTask(task)
        }
        return {
            title,
            details,
            postTask
        }
    },
    data() {
        return {
        task: {
            title: '',
            details: ''
        }
      }
    },
    components: {
        BaseInput
    }
}
</script>

<style scoped>

</style>