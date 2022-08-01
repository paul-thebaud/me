import i18n from '@/plugins/i18n/index';

export default function changeLocale(locale: string) {
  i18n.global.locale.value = locale;
  document.documentElement.setAttribute('lang', locale);
  document.title = i18n.global.t('appTitle');
}
