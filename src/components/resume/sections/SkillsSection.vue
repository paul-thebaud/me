<script
  lang="ts"
  setup
>

import CardSection from '@/components/resume/sections/CardSection.vue';
import ColoredChipsList from '@/components/resume/utils/ColoredChipsList.vue';
import tools from '@/utils/tools';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const skills = [
  {
    title: t('categories.systems'),
    tools: [tools.LINUX, tools.MACOS, tools.WINDOWS],
  },
  {
    title: t('categories.programmingLanguages'),
    tools: [tools.PHP, tools.JS, tools.TS],
  },
  {
    title: t('categories.frameworks'),
    tools: [tools.LARAVEL, tools.VUE, tools.VUETIFY, tools.REACT],
  },
  {
    title: t('categories.database'),
    tools: [tools.POSTGRESQL, tools.SQLITE, tools.MYSQL],
  },
  {
    title: t('categories.versioning'),
    tools: [tools.GIT, tools.GITHUB, tools.GIT_KRAKEN],
  },
  {
    title: t('categories.projects'),
    tools: [
      { name: 'Etude des besoins', color: 'primary' },
      { name: 'Spécifications fonctionnelles', color: 'primary' },
    ],
  },
  {
    title: t('categories.others'),
    tools: [
      tools.HEROKU,
      tools.GITHUB_ACTIONS,
      tools.SASS,
      tools.VITE,
      tools.WEBPACK,
      tools.PHPUNIT,
      tools.JEST,
      tools.CYPRESS,
      tools.PHPSTORM,
    ],
  },
  {
    title: t('categories.languages'),
    tools: [
      { name: 'Français', color: 'indigo' },
      { name: 'Anglais (CLES en 2018)', color: 'red' },
    ],
  },
];
</script>

<template>
  <card-section
    :title="t('title')"
    :items="skills"
  >
    <template #item="{ item }">
      <h3 class="text-h6">
        {{ item.title }}
      </h3>
      <colored-chips-list :items="item.tools" />
    </template>
  </card-section>
</template>

<i18n>
{
  "fr": {
    "title": "Compétences",
    "categories": {
      "systems": "Systèmes",
      "programmingLanguages": "Langages de programmation",
      "frameworks": "Frameworks",
      "database": "Bases de données",
      "versioning": "Versioning",
      "projects": "Projets",
      "others": "Autres",
      "languages": "Langues"
    }
  }
}
</i18n>
