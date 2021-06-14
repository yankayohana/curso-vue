<template>
	<div id="app">
		<h1>Tarefas</h1>
    <task-progress :progress="progress"></task-progress>
    <new-task @taskAdded="addTask"></new-task>
    <task-grid :tasks="tasks" @taskDel="deleteTask" @taskStChange="toogleStateTask"/>
	</div>
</template>

<script>
import TaskGrid from "./components/TaskGrid.vue";
import NewTask from "./components/NewTask.vue";
import TaskProgress from "./components/TaskProgress.vue";

export default {
  components: { TaskGrid, NewTask, TaskProgress },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      const sameName = (t) => t.name === task.name;
      const reallyNew = this.tasks.filter(sameName).length == 0;
      if (reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        });
      }
    },
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },
    toogleStateTask(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },
  watch: {
    deep: true, // IMP mudança de forma profunda
    tasks: {
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks)); //NEW
      },
    },
  },
  created() {
    const json = localStorage.getItem("tasks"); // NEW;
    const array = JSON.parse(json);
    this.tasks = Array.isArray(array) ? array : [];
  },
};
</script>


<style>
body {
  font-family: "Lato", sans-serif;
  background: #325288;
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
