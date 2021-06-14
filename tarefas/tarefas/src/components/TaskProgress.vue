<template>
    <div class="task-progress">
        <span class="progress-value">{{ progress }}%</span>
        <div class="progress-bar" :style="{width: progress + '%'}"></div>
        
    </div>
</template>
<script>
export default {
  props: {
    progress: { type: Number, default: 0 },
  },
};
</script>
<style>
.task-progress {
  position: relative;
  width: 80%;
  border: 1px solid #fff;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.progress-bar {
  position: absolute;
  border-radius: 8px;
  height: 100%;
  align-self: flex-start;
  background-color: yellowgreen;
}

.progress-value {
  z-index: 1;
  font-size: 1.5rem;
}
</style>
