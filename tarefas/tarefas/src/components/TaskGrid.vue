<template >
    <div class="task-grid">
        <template v-if="tasks.length">
            <task v-for="(task, i) in tasks" :key="task.name" :task="task" @taskDeleted='$emit("taskDel", i)' @taskStateChanged='$emit("taskStChange", i)'>
            </task>
        </template>
        <p v-else class="no-task">Sua vida está em dia :D</p>
    </div>
</template>
<script>
import Task from "./Task.vue";
export default {
  components: {
    Task,
  },
  props: {
    tasks: { type: Array, required: true },
  },
};
</script>
<style >
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.task-grid .task {
  margin: 10px;
}

.no-task {
  font-size: 2rem;
  color: #aaa;
}
</style>
