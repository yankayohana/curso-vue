<template >
    <div class="task" :class="stateClass" @click='$emit("taskStateChanged", task)'>
        <span class="close"  @click.stop='$emit("taskDeleted", task)'>x</span>
        <p>{{task.name}}</p>
    </div>
</template>
<script>
export default {
  props: {
    task: { type: Object, required: true },
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>
<style >
.task {
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.pending {
  border-left: 12px solid #f64b3c;
  background-color: tomato;
}

.done {
  border-left: 12px solid #4aa96c;
  background-color: #7eca9c;
  text-decoration: line-through;
}

.pending .close {
  background-color: #f64b3c;
}

.done .close {
  background-color: #4aa96c;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
}
</style>
