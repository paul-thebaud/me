<script
  lang="ts"
  setup
>
import CardSection from '@/components/resume/sections/CardSection.vue';
import ColoredChipsList from '@/components/resume/utils/ColoredChipsList.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const hobbies = [
  { name: t('hobbies.music'), color: 'primary' },
  { name: t('hobbies.openSource'), color: 'primary' },
  { name: t('hobbies.bicycle'), color: 'primary' },
  { name: t('hobbies.cinema'), color: 'primary' },
  { name: t('hobbies.videoGames'), color: 'primary' },
];
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
      "bicycle": "vélo",
      "cinema": "cinéma",
      "videoGames": "jeux vidéo"
    }
  }
}
</i18n>
