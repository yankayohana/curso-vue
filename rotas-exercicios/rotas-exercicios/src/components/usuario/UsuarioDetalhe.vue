<template >
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
        <p><strong>Código:</strong> {{ id }}</p>
        <!--:to="`/usuarios/${id}/editar`" -->
        <router-link tag="button" :to="{ name: 'editarUsuario', params: { id }, hash:'#rodape' }" primario >Editar</router-link> <!-- também poderia ser ${$route.params.id} -->
    </div>
</template>
<script>
export default {
  props: ["id"],

  // data() {
  //     return {
  //         id: this.$route.params.id
  //     }
  // },
  // watch: {
  //     $route(to, from) {
  //         this.id = to.params.id     // aqui resolveu a questao de quanto troca de usuarios
  //     }
  // },
};
</script>
<style >
</style>
