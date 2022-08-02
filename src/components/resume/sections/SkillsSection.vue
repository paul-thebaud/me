<script
  lang="ts"
  setup
>

import CardSection from '@/components/resume/sections/CardSection.vue';
import ColoredChipsList from '@/components/resume/utils/ColoredChipsList.vue';
import tools from '@/utils/tools';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const skills = computed(() => [
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
    title: t('categories.others'),
    tools: [
      { name: t('skills.needsAnalysis'), color: 'primary' },
      { name: t('skills.functionalSpecifications'), color: 'primary' },
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
      { name: t('skills.french'), color: 'indigo' },
      { name: t('skills.english'), color: 'red' },
    ],
  },
]);
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
    },
    "skills": {
      "needsAnalysis": "Étude des besoins",
      "functionalSpecifications": "Spécifications fonctionnelles",
      "french": "Français",
      "english": "Anglais (CLES en 2018)"
    }
  },
  "en": {
    "title": "Skills",
    "categories": {
      "systems": "Systems",
      "programmingLanguages": "Programming languages",
      "frameworks": "Frameworks",
      "database": "Databases",
      "versioning": "Versioning",
      "projects": "Projects",
      "others": "Others",
      "languages": "Languages"
    },
    "skills": {
      "needsAnalysis": "Needs analysis",
      "functionalSpecifications": "Functional specifications",
      "french": "French (native)",
      "english": "English (CLES in 2018)"
    }
  }
}
</i18n>
