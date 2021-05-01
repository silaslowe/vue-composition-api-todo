<template>
    <div>
        <h2>List of Task</h2>
        <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>
</template>

<script>
import TaskServices from '../services/TaskServices'
import TaskCard from '../components/TaskCard'

export default {
    name: "TaskList",
    components: {
        TaskCard
    },
    setup () {
        return {}
    },
    data() {
        return {
            tasks: null
        }
    },
    created() {
        TaskServices.getTasks()
        .then(response => {
          this.tasks = response.data
        })
      .catch(error => {
        console.log(error)
      })
    }
}
</script>

<style lang="scss" scoped>

</style>