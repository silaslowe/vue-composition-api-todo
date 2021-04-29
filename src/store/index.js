import {reactive, readonly} from 'vue'

const state = reactive({
    tasks: []
})

const methods = {
    addTask(task) {
        state.tasks.push(task)
    }
}

export default {
    state,
    methods
}