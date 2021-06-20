<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<b-button variant="primary" class="mb-4" @click="clicado = !clicado">clique aqui</b-button>

		<transition name="fade" mode="out-in">
			<b-alert variant="info" show v-if="clicado" key="info"> {{ msg }} </b-alert>	
			<b-alert variant="warning" show v-else key="warn"> {{ msg }} </b-alert>	
		</transition>


		<transition name="slide" appear="">
			<b-alert variant="info" show v-show="clicado"> {{ msg }} </b-alert>		
		</transition>
		
	</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "eu fui clicado viu",
      clicado: true,
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,  /** aqui não é obrigatio colocar esse, pois já 1 por default **/
.fade-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-to,
.slide-leave {
  opacity: 1;
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
}
</style>
