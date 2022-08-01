<script
  lang="ts"
  setup
>
import ResponsiveBtn from '@/components/ResponsiveBtn.vue';
import i18n from '@/plugins/i18n';
import changeLocale from '@/plugins/i18n/changeLocale';
import locales from '@/plugins/i18n/locales';
import { mdiEarth } from '@mdi/js';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

type LocaleId = keyof typeof locales;

const { t } = useI18n();

const menuLabel = computed(() => locales[i18n.global.locale.value as LocaleId].name);
const onLocaleChange = (locale: string) => {
  changeLocale(locale);
};
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <responsive-btn
        :icon="mdiEarth"
        :label="menuLabel"
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
