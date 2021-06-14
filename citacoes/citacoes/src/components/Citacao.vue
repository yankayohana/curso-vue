<template>
    <div class="citacao">
        <div>
            <slot name="text"></slot>
            <slot name="autor"></slot>
            <slot name="fonte"></slot>

        </div>
    </div>
</template>

<script>
export default {
  props: ["texto"],
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
