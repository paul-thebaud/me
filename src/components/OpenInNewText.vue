<script
  lang="ts"
  setup
>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
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
