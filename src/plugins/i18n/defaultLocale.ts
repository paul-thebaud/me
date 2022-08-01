import locales from '@/plugins/i18n/locales';

export default function defaultLocale() {
  let defaultLocale = locales.fr.id;

  (window.navigator.languages || []).some(language => {
    language = language.replace('-', '_').split('_')[0];
    if (language in locales) {
      defaultLocale = language;

      return true;
    }

    return false;
  });

  return defaultLocale;
}
