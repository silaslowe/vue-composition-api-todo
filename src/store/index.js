import {reactive, readonly} from 'vue'

const state = reactive({
    tasks: []
})

const methods = {
    addTask(task) {
        state.tasks.push(task)
        task = {
            title: ''
        }
        console.log(state.tasks)
    }
}

export default {
    state,
    methods
}