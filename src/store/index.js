import {reactive, readonly} from 'vue'
import axios from 'axios'


const state = reactive({
    tasks: []
      })


const methods = {
    // postTasks(task) {
    //     return apiClient.post('/task',task)
    //   },
    //   getTasks() {
    //     return apiClient.get('/tasks')
    //   }
}

export default {
    state,
    methods
}