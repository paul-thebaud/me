<script
  lang="ts"
  setup
>
import ResponsiveBtn from '@/components/ResponsiveBtn.vue';
import store from '@/store';
import { mdiPrinterOutline } from '@mdi/js';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const onPrint = () => {
  const prevFontSize = window.document.documentElement.style.fontSize;
  store.printing = true;
  window.document.documentElement.style.fontSize = '10px';

  setTimeout(() => {
    window.print();

    window.document.documentElement.style.fontSize = prevFontSize;
    store.printing = false;
  }, 250);
};
</script>

<template>
  <responsive-btn
    :icon="mdiPrinterOutline"
    :label="t('print')"
    :loading="store.printing"
    variant="flat"
    color="primary"
    @click="onPrint"
  />
</template>

<i18n>
{
  "fr": {
    "print": "Imprimer"
  },
  "en": {
    "print": "Print"
  }
}
</i18n>
