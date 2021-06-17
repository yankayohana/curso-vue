<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr/>
		<p v-text=" 'estou usando uma diretiva de texto' "></p> 
		<p v-html="'usando uma <strong>v-html</strong>'"></p>
		<hr/>
		<p v-destaque="'yellow'">Usando uma diretiva personalizada</p>
	</div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
