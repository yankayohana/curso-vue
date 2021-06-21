<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" v-model="usuario.nome" size='lg' placeholder="Informe seu nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" v-model="usuario.email" size='lg' placeholder="Informe seu email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" variant="primary" size="lg">Enviar</b-button>
			<b-button @click="obterUsuarios(); exibirUsuarios = !exibirUsuarios;" variant="success" size="lg" class="ml-2">Exibir usuários</b-button>

			<b-list-group v-if="exibirUsuarios">
				<b-list-group-item v-for="(usuario,id) in usuarios"  :key="id">
					<p><strong>Nome: </strong>{{ usuario.nome }}</p>
					<p><strong>Email: </strong>{{ usuario.email }}</p>
					<p><strong>ID: </strong>{{ id }}</p>
					
				</b-list-group-item>
			</b-list-group>
		</b-card>

	</div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      usuario: {
        nome: "",
        email: "",
      },
      exibirUsuarios: true,
    };
  },

  methods: {
    salvar() {
      this.$http.post("usuarios.json", this.usuario).then((res) => {
        this.usuario.nome = "";
        this.usuario.email = "";
      });
    },

    obterUsuarios() {
      this.$http.get("usuarios.json").then((resp) => {
        this.usuarios = resp.data;
        console.log(this.exibirUsuarios);
      });
    },
  },

  //   created() {
  //     this.$http
  //       .post("usuarios.json", {
  //         nome: "yanka yohana",
  //         idade: 25,
  //         email: "yanka.yohana@teste.com",
  //       })
  //       .then((res) => console.log(res));
  //   },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
