import dark from '@/plugins/vuetify/dark';
import highContrast from '@/plugins/vuetify/highContrast';
import light from '@/plugins/vuetify/light';
import themes from '@/plugins/vuetify/themes';
import '@/scss/main.scss';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

export default createVuetify({
  theme: {
    defaultTheme: themes.light.id,
    themes: {
      light,
      dark,
      highContrast,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
