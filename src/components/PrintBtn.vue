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
  store.printing = true;
  window.document.documentElement.classList.add('application--printing');

  setTimeout(() => {
    window.print();

    window.document.documentElement.classList.remove('application--printing');
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
