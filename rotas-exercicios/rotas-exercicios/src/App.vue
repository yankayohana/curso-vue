<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<Menu></Menu>
		<transition mode="out-in" enter-active-class="animated fadeInLeft"  leave-active-class="animated fadeOutRight">			
			<router-view></router-view>
        </transition>
	</div>
</template>

<script>
import Menu from "./components/template/Menu.vue";
export default {
  components: { Menu },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
