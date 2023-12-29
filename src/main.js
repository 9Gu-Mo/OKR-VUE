import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { setupCalendar } from 'v-calendar';
import VueGridLayout from 'vue-grid-layout';
import AOS from 'aos';
import "aos/dist/aos.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(VueGridLayout);
app.use(AOS.init());
app.mount('#app');
app.use(setupCalendar, {})
app.component('font-awesome-icon', FontAwesomeIcon)