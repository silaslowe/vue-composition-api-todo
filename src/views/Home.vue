<template>
  <div class="home">
    <TaskList />
    <TaskForm />
  </div>
</template>

<script>
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
export default {
  name: 'Home',
  components: {
    TaskList,
    TaskForm
  }
}
</script>
