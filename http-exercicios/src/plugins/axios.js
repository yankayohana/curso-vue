import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL =
  "https://curso-vue-project-default-rtdb.firebaseio.com/";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  },
});
Vue.prototype.$http.interceptors.request.use((config) => {
  console.log(config.method);
  return config; // retorna o tipo de requisição que está sendo feita
});

// rever aula interceptando resposta e as aulas seguintes
