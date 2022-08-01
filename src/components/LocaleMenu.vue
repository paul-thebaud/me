<script
  lang="ts"
  setup
>
import ResponsiveBtn from '@/components/ResponsiveBtn.vue';
import i18n from '@/plugins/i18n';
import locales from '@/plugins/i18n/locales';
import { mdiEarth } from '@mdi/js';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const onLocaleChange = (locale: string) => {
  i18n.global.locale.value = locale;
  document.documentElement.setAttribute('lang', locale.toLowerCase());
};
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <responsive-btn
        :icon="mdiEarth"
        :label="locales[i18n.global.locale.value].name"
        v-bind="props"
      />
    </template>
    <v-list>
      <v-list-item
        v-for="locale in locales"
        :key="`locales.${locale.id}`"
        :title="locale.name"
        :active="locale.id === i18n.global.locale.value"
        @click="onLocaleChange(locale.id)"
      />
    </v-list>
  </v-menu>
</template>

<i18n>
{
  "fr": {
    "locales": {
      "fr": "Français",
      "en": "Anglais"
    }
  },
  "en": {
    "locales": {
      "fr": "French",
      "en": "English"
    }
  }
}
</i18n>
