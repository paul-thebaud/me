<script
  lang="ts"
  setup
>
import ResponsiveBtn from '@/components/ResponsiveBtn.vue';
import themes from '@/plugins/vuetify/themes';
import { mdiPalette } from '@mdi/js';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';

const { t } = useI18n();
const theme = useTheme();

const currentThemeId = computed(() => theme.global.name.value);
const onThemeChange = (newTheme: string) => {
  theme.global.name.value = newTheme;
};
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <responsive-btn
        :icon="mdiPalette"
        :label="t(`themes.${theme.global.name.value}`)"
        variant="tonal"
        v-bind="{ ...$attrs, ...props }"
      />
    </template>
    <v-list>
      <v-list-item
        v-for="theme in themes"
        :key="`themes.${theme.id}`"
        :title="t(`themes.${theme.id}`)"
        :prepend-icon="theme.icon"
        :active="theme.id === currentThemeId"
        @click="onThemeChange(theme.id)"
      />
    </v-list>
  </v-menu>
</template>

<i18n>
{
  "fr": {
    "themes": {
      "light": "Clair",
      "dark": "Sombre",
      "highContrast": "Contraste élevé"
    }
  },
  "en": {
    "themes": {
      "light": "Light",
      "dark": "Dark",
      "highContrast": "High contrast"
    }
  }
}
</i18n>
