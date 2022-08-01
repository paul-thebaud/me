import locales from '@/plugins/i18n/locales';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: locales.fr.id,
  fallbackLocale: locales.fr.id,
  messages: {
    [locales.fr.id]: {
      appTitle: 'Paul Thébaud - CV',
    },
    [locales.en.id]: {
      appTitle: 'Paul Thébaud - Resume',
    },
  },
});

export default i18n;
