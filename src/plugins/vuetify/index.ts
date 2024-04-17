import dark from '@/plugins/vuetify/dark';
import highContrast from '@/plugins/vuetify/highContrast';
import light from '@/plugins/vuetify/light';
import themes from '@/plugins/vuetify/themes';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import 'vuetify/styles';

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
  defaults: {
    VCard: {
      elevation: 0,
    },
    VBtn: {
      rounded: 'pill',
    },
    VList: {
      rounded: 'lg',
    },
  },
});
