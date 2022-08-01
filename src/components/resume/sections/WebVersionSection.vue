<script
  lang="ts"
  setup
>
import OpenInNewIcon from '@/components/OpenInNewIcon.vue';
import store from '@/store';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div
    v-if="store.printing"
    class="text-center"
  >
    <i18n-t
      keypath="seeWebVersion"
      tag="label"
      for="tos"
    >
      <a
        class="text-primary"
        href="https://paul-thebaud.github.io/me/"
        target="_blank"
        rel="noreferrer nofollow"
      >
        {{ t('webVersion') }}
        <open-in-new-icon size="0.75rem" />
      </a>
    </i18n-t>
  </div>
</template>

<i18n>
{
  "fr": {
    "seeWebVersion": "Vous pouvez consulter {0} avec de meilleures options de contrastes.",
    "webVersion": "une version Web de ce CV"
  },
  "en": {
    "seeWebVersion": "You can check out {0} with better contrast options.",
    "webVersion": "a Web version of this resume"
  }
}
</i18n>
