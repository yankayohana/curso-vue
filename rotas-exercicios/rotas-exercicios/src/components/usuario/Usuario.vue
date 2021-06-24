<template >
    <div class="usuario">
        <h2>Usuário</h2>
        <hr>
        <router-view></router-view>
        <button sucesso @click="voltar">Voltar</button>
        
    </div>
</template>
<script>
export default {
  // usando props pra fzr a msm coisa só que é uma estrategia mais simples
  // props: ['id'],

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

  methods: {
    voltar() {
      this.$router.push("/");
    },
  },
};
</script>
<style >
</style>
