<script
  lang="ts"
  setup
>
import OpenInNewText from '@/components/OpenInNewText.vue';
import CardSection from '@/components/resume/sections/CardSection.vue';
import ColoredChip from '@/components/resume/utils/ColoredChip.vue';
import ColoredChipsList from '@/components/resume/utils/ColoredChipsList.vue';
import tools from '@/utils/tools';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const projects = computed(() => [
  {
    category: t('categories.pro'),
    title: 'Les accessibles',
    description: t('projects.lesAccessibles.description'),
    tools: [tools.PHP, tools.LARAVEL, tools.TS, tools.VUE, tools.VUETIFY],
    website: {
      name: 'lorient-agglo.lesaccessibles.bzh',
      url: 'https://lorient-agglo.lesaccessibles.bzh',
    },
  },
  {
    category: t('categories.perso'),
    title: 'Foscia',
    description: t('projects.foscia.description'),
    tools: [tools.TS, tools.VITE, tools.VITEST],
    website: {
      name: 'foscia.dev',
      url: 'https://foscia.dev',
    },
  },
  {
    category: t('categories.pro'),
    title: 'Brain Mouv\'',
    description: t('projects.brainMouv.description'),
    tools: [tools.PHP, tools.LARAVEL, tools.TS, tools.VUE, tools.VUETIFY],
    website: {
      name: 'brainmouv.com',
      url: 'https://brainmouv.com',
    },
  },
  {
    category: t('categories.pro'),
    title: 'REHAB-LAB',
    description: t('projects.rehabLab.description'),
    tools: [tools.PHP, tools.LARAVEL, tools.JS, tools.VUE, tools.VUETIFY],
    website: {
      name: 'rehab-lab.org',
      url: 'https://rehab-lab.org',
    },
  },
  {
    category: t('categories.perso'),
    title: 'v-phone-input',
    description: t('projects.vPhoneInput.description'),
    tools: [tools.TS, tools.VUE, tools.VUETIFY, tools.CYPRESS, tools.VITE],
    website: {
      name: 'github.io/v-phone-input',
      url: 'https://paul-thebaud.github.io/v-phone-input',
    },
  },
  {
    hide: true,
    category: t('categories.pro'),
    title: 'LifeCompanion',
    description: t('projects.lifeCompanion.description'),
    tools: [tools.PHP, tools.LARAVEL, tools.JS, tools.VUE, tools.VUETIFY],
    website: {
      name: 'lifecompanionaac.org',
      url: 'https://lifecompanionaac.org',
    },
  },
  {
    hide: true,
    category: t('categories.perso'),
    title: 'PhpUnitGen',
    description: t('projects.phpUnitGen.description'),
    tools: [tools.PHP, tools.LARAVEL, tools.TS, tools.VUE],
    website: {
      name: 'phpunitgen.io',
      url: 'https://phpunitgen.io',
    },
  },
]);
</script>

<template>
  <card-section
    :title="t('title')"
    :items="projects"
  >
    <template #item="{ item }">
      <h3 class="d-flex align-center justify-space-between text-h6">
        <a
          :href="item.website.url"
          target="_blank"
          rel="noreferrer noopener"
        >
          {{ item.title }}
          <open-in-new-text />
        </a>
        <colored-chip :name="item.category" />
      </h3>
      <p class="text-body-2 mb-2">
        {{ item.description }}
      </p>
      <colored-chips-list :items="item.tools" />
    </template>
  </card-section>
</template>

<i18n>
{
  "fr": {
    "title": "Projets",
    "categories": {
      "pro": "pro.",
      "perso": "perso."
    },
    "projects": {
      "lesAccessibles": {
        "description": "Etude des besoins et développement d'une plateforme accessible et contributive sur l'offre de loisirs et de mobilité de Lorient Agglomération."
      },
      "foscia": {
        "description": "Librairie modulaire, intuitive et avec typage strict pour l'interopérabilité JS/API."
      },
      "brainMouv": {
        "description": "Plateforme accessible d'auto-rééducation des personnes atteintes de maladies neurologiques rares."
      },
      "lifeCompanion": {
        "description": "Plateforme accessible avec serveur de statistiques pour le suivi d'un logiciel d'aide à la communication."
      },
      "rehabLab": {
        "description": "Plateforme accessible avec outils de confort et communautaires (forum, commentaires, etc.). Automatisation de processus liés à la communauté."
      },
      "vPhoneInput": {
        "description": "Librairie de champ de formulaire accessible pour la saisie d'un numéro de téléphone au format international pour Vuetify."
      },
      "phpUnitGen": {
        "description": "Générateur de squelettes de tests unitaires avec de nombreuses options de configuration et une génération contextuelle."
      }
    }
  },
  "en": {
    "title": "Projects",
    "categories": {
      "pro": "pro.",
      "perso": "personal"
    },
    "projects": {
      "lesAccessibles": {
        "description": "Accessible and contributive platform to provide information about hobbies and mobility on Lorient Agglomération."
      },
      "foscia": {
        "description": "Type safe, modular and intuitive API/data client for JS/TS."
      },
      "brainMouv": {
        "description": "Accessible self-rehabilitation platform for people with rare neurological diseases."
      },
      "lifeCompanion": {
        "description": "Accessible platform with stats server for an assistive technology software."
      },
      "rehabLab": {
        "description": "Accessible platform with confort and community tools (forum, comments, etc.). Community related process automation."
      },
      "vPhoneInput": {
        "description": "International and accessible phone input library for Vuetify."
      },
      "phpUnitGen": {
        "description": "Unit tests skeleton generator with many configuration options and contextual generation."
      }
    }
  }
}
</i18n>
