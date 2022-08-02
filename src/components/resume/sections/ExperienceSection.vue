<script
  lang="ts"
  setup
>
import TimelineSection from '@/components/resume/sections/TimelineSection.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const experience = computed(() => [
  {
    date: t('experience.coworkhit.date'),
    title: t('experience.coworkhit.title'),
    description: t('experience.coworkhit.description'),
    location: 'CoWork\'HIT, Lorient (56)',
  },
  {
    date: t('experience.kerpape.date'),
    duration: t('experience.kerpape.duration'),
    title: t('experience.kerpape.title'),
    description: t('experience.kerpape.description'),
    location: 'CMRRF de Kerpape, Lorient (56)',
  },
  {
    date: t('experience.captainvet.date'),
    duration: t('experience.captainvet.duration'),
    title: t('experience.captainvet.title'),
    description: t('experience.captainvet.description'),
    location: 'CaptainVet, Brest (29)',
  },
  {
    date: t('experience.ubo.date'),
    duration: t('experience.ubo.duration'),
    title: t('experience.ubo.title'),
    description: t('experience.ubo.description'),
    location: 'UBO, Brest (29)',
  },
  {
    date: t('experience.oktave.date'),
    duration: t('experience.oktave.duration'),
    title: t('experience.oktave.title'),
    description: t('experience.oktave.description'),
    location: 'Oktave, Brest (29)',
  },
]);
</script>

<template>
  <timeline-section
    :title="t('title')"
    :items="experience"
  >
    <template #date="{ item }">
      {{ item.date }}
      <template v-if="item.duration">
        <br>
        {{ item.duration }}
      </template>
    </template>
    <template #item="{ item }">
      <h3 class="text-h6">
        {{ item.title }}
      </h3>
      <p class="text-body-1">
        {{ item.description }}
      </p>
      <span class="font-weight-bold">
        {{ item.location }}
      </span>
    </template>
  </timeline-section>
</template>

<i18n>
{
  "fr": {
    "title": "Expériences professionnelles",
    "experience": {
      "coworkhit": {
        "date": "Depuis 2022",
        "title": "Référent développement informatique et accessibilité",
        "description": "Étude des besoins, rédaction de cahier des charges, audit d'accessibilité RGAA 4.1, développement de plateformes Web accessibles, gestions d'un parc d'applicatifs Web avec CI/CD."
      },
      "kerpape": {
        "date": "2020 à 2021",
        "duration": "1 an et 6 mois",
        "title": "Lead développeur PHP, Vue et Vuetify",
        "description": "Réalisation d'une plateforme communautaire flexible et adaptable à différentes communautés (pages personnalisables, sondages, gestion d'une base de contacts, etc.)."
      },
      "captainvet": {
        "date": "2019 à 2020",
        "duration": "1 an",
        "title": "Lead développeur PHP, Vue et BootstrapVue",
        "description": "Gestion fullstack d'une application de prise de rendez-vous vétérinaire. Uniformisation des API via la spécification JSON:API."
      },
      "ubo": {
        "date": "2020",
        "duration": "5 mois",
        "title": "Enseignant vacataire",
        "description": "Enseignement du langage objet Python à des Licences 2ème année."
      },
      "oktave": {
        "date": "2018 à 2019",
        "duration": "1 an",
        "title": "Développeur backend en stage puis alternance",
        "description": "Gestion backend d'une application de questionnaires en SAAS."
      }
    }
  },
  "en": {
    "title": "Experience",
    "experience": {
      "coworkhit": {
        "date": "Since 2022",
        "title": "Referent in Web development and accessibility",
        "description": "Needs analysis, functional specifications, RGAA 4.1 accessibility audit, development of accessible Web platforms, management of a Web applications portfolio with CI/CD."
      },
      "kerpape": {
        "date": "2020 to 2021",
        "duration": "1 year and 6 months",
        "title": "Lead developer PHP, Vue and Vuetify",
        "description": "Realization of a flexible and adaptable community platform for different communities (personalized pages, polls, contacts database management, etc.)."
      },
      "captainvet": {
        "date": "2019 to 2020",
        "duration": "1 year",
        "title": "Lead developer PHP, Vue and BootstrapVue",
        "description": "Fullstack management of a veterinary appointment booking application. Standardization of APIs via the JSON:API specification."
      },
      "ubo": {
        "date": "2020",
        "duration": "5 months",
        "title": "Part-time teacher",
        "description": "Teaching of the Python object language to 2nd year bachelors."
      },
      "oktave": {
        "date": "2018 to 2019",
        "duration": "1 year",
        "title": "Backend developer in internship then alternation",
        "description": "Backend management of a survey application as a SAAS."
      }
    }
  }
}
</i18n>
