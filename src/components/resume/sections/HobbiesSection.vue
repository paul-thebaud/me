<script
  lang="ts"
  setup
>
import CardSection from '@/components/resume/sections/CardSection.vue';
import ColoredChipsList from '@/components/resume/utils/ColoredChipsList.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const hobbies = computed(() => [
  { name: t('hobbies.music'), color: 'primary' },
  { name: t('hobbies.openSource'), color: 'primary' },
  { name: t('hobbies.motorbike'), color: 'primary' },
  { name: t('hobbies.cinema'), color: 'primary' },
  { name: t('hobbies.videoGames'), color: 'primary' },
]);
</script>

<template>
  <card-section :title="t('title')">
    <colored-chips-list :items="hobbies" />
  </card-section>
</template>

<i18n>
{
  "fr": {
    "title": "Loisirs",
    "hobbies": {
      "music": "écoute de musique",
      "openSource": "open source",
      "motorbike": "moto",
      "cinema": "cinéma",
      "videoGames": "jeux vidéo"
    }
  },
  "en": {
    "title": "Hobbies",
    "hobbies": {
      "music": "music listening",
      "openSource": "open source",
      "motorbike": "motorbike",
      "cinema": "cinema",
      "videoGames": "video games"
    }
  }
}
</i18n>
