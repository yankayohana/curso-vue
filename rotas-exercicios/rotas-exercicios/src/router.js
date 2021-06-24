import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio.vue";
import Usuario from "./components/usuario/Usuario.vue";
import UsuarioLista from "./components/usuario/UsuarioLista.vue";
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe.vue";
import UsuarioEditar from "./components/usuario/UsuarioEditar.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      component: Inicio,
    },
    {
      path: "/usuarios",
      component: Usuario,
      props: true,
      children: [
        { path: "", component: UsuarioLista },
        { path: ":id", component: UsuarioDetalhe, props: true },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: "editarUsuario",
        },
      ],
    },
  ],
});

// dar uma olhada melhor em modo hash versus modo history
