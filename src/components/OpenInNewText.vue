<script
  lang="ts"
  setup
>
import { mdiOpenInNew } from '@mdi/js';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <v-icon
    :icon="mdiOpenInNew"
    class="d-print-none open-in-new-icon"
  />
  <span class="d-sr-only">
    {{ t('openInNew') }}
  </span>
</template>

<i18n>
{
  "fr": {
    "openInNew": "(dans un nouvel onglet)"
  },
  "en": {
    "openInNew": "(in new tab)"
  }
}
</i18n>

<style scoped>
  .open-in-new-icon {
      font-size: 0.9em;
  }
</style>
