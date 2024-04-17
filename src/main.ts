import '@/scss/main.scss';
import App from '@/App.vue';
import i18n from '@/plugins/i18n';
import changeLocale from '@/plugins/i18n/changeLocale';
import defaultLocale from '@/plugins/i18n/defaultLocale';
import vuetify from '@/plugins/vuetify';
import { createApp } from 'vue';

const app = createApp(App);

app.use(vuetify);
app.use(i18n);

changeLocale(defaultLocale());

app.mount('#app');
