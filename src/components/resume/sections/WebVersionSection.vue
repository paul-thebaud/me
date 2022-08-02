<script
  lang="ts"
  setup
>
import OpenInNewText from '@/components/OpenInNewText.vue';
import store from '@/store';
import { mdiInformationOutline } from '@mdi/js';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div
    v-if="store.printing"
    class="d-flex align-center justify-center text-center"
  >
    <v-icon
      :icon="mdiInformationOutline"
      size="1rem"
      start
    />
    <i18n-t
      keypath="seeWebVersion"
      tag="div"
    >
      <a
        class="text-primary"
        href="https://paul-thebaud.github.io/me/"
        target="_blank"
        rel="noreferrer nofollow"
      >
        {{ t('webVersion') }}
        <open-in-new-text />
      </a>
    </i18n-t>
  </div>
</template>

<i18n>
{
  "fr": {
    "seeWebVersion": "Vous pouvez consulter {0} avec de meilleures options de contrastes et de langues.",
    "webVersion": "une version Web de ce CV"
  },
  "en": {
    "seeWebVersion": "You can check out {0} with better contrast and languages options.",
    "webVersion": "a Web version of this resume"
  }
}
</i18n>
