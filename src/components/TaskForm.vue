<template>
        <h2>Form</h2>
        <form @submit.prevent="store.methods.addTask(task)" >
            <BaseInput 
                v-model="task.title"
                label="Title"
                type="text"
            />
            <!-- <label>Title</label>
            <input
            v-model="task.title" 
            class="field"
            placeholder="Title" 
            type="text"
            /> -->
            <button class="button" type="submit">Submit</button>
        </form>   
</template>

<script>
import { inject } from 'vue'
import { BaseInput } from './BaseInput.vue'
import TaskServices from '../services/TaskServices' 

export default {
    name: 'TaskForm',
    setup() {
        const store = inject('store')

        return {
            store
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