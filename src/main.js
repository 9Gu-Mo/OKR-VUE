import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { setupCalendar } from 'v-calendar';
import VueGridLayout from 'vue-grid-layout';

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(VueGridLayout);
app.mount('#app');
app.use(setupCalendar, {})

