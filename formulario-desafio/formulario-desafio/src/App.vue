<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<rotulo nome="Nome">
					<input type="text" v-model="usuario.name">
				</rotulo>
				<rotulo nome="Sobrenome">
					<input type="text" v-model="usuario.lastName">
				</rotulo>
				<rotulo nome="Email">
					<input type="email" v-model="usuario.email">
				</rotulo>
				<rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</rotulo>
				<rotulo nome="Armazenar dados">
					<span class="mr-4"><input type="radio" value="Sim" v-model="armazenar">Sim</span>
					<span class="mr-4"><input type="radio" value="Não" v-model="armazenar">Não</span>					
				</rotulo>

				<button @click.prevent="enviar">Enviar</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<rotulo nome="Nome">
					{{ usuario.name }}
				</rotulo>
				<rotulo nome="Sobrenome">
					{{ usuario.lastName }}
				</rotulo>
				<rotulo nome="Email">
					{{ usuario.email }}
				</rotulo>
				<rotulo nome="Senha">
					{{ usuario.senha }}
				</rotulo>
				<rotulo nome="Armazenar dados">
					{{  armazenar }}
				</rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";

export default {
  name: "app",
  components: { Rotulo },
  data() {
    return {
      usuario: {
        name: "",
        lastName: "",
        age: null,
        email: "",
        password: "",
      },
      armazenar: "sim",
      enviado: false,
    };
  },
  methods: {
    enviar() {
      this.enviado = true;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
