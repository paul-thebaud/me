<script
  lang="ts"
  setup
>
import TimelineSection from '@/components/resume/sections/TimelineSection.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const experience = [
  {
    date: t('experience.coworkhit.date'),
    title: t('experience.coworkhit.title'),
    description: t('experience.coworkhit.description'),
    location: t('experience.coworkhit.location'),
  },
  {
    date: t('experience.kerpape.date'),
    duration: t('experience.kerpape.duration'),
    title: t('experience.kerpape.title'),
    description: t('experience.kerpape.description'),
    location: t('experience.kerpape.location'),
  },
  {
    date: t('experience.captainvet.date'),
    duration: t('experience.captainvet.duration'),
    title: t('experience.captainvet.title'),
    description: t('experience.captainvet.description'),
    location: t('experience.captainvet.location'),
  },
  {
    date: t('experience.ubo.date'),
    duration: t('experience.ubo.duration'),
    title: t('experience.ubo.title'),
    description: t('experience.ubo.description'),
    location: t('experience.ubo.location'),
  },
  {
    date: t('experience.oktave.date'),
    duration: t('experience.oktave.duration'),
    title: t('experience.oktave.title'),
    description: t('experience.oktave.description'),
    location: t('experience.oktave.location'),
  },
];
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
        "description": "Etude des besoins, rédaction de cahier des charges, audit d'accessibilité RGAA 4.1, développement de plateformes Web accessibles, gestions d'un parc d'applicatifs Web avec CI/CD",
        "location": "CoWork'HIT, Lorient (56)"
      },
      "kerpape": {
        "date": "2020 à 2021",
        "duration": "1 an et 6 mois",
        "title": "Lead développeur PHP, Vue et Vuetify",
        "description": "Réalisation d'une plateforme communautaire flexible et adaptable à différentes communautés (pages personnalisés et contenus métiers).",
        "location": "CMRRF de Kerpape, Lorient (56)"
      },
      "captainvet": {
        "date": "2019 à 2020",
        "duration": "1 an",
        "title": "Lead développeur PHP, Vue et BootstrapVue",
        "description": "Gestion fullstack d'une application de prise de rendez-vous vétérinaire. Uniformisation des API via la spécification JSON:API.",
        "location": "CaptainVet, Brest (29)"
      },
      "ubo": {
        "date": "2020",
        "duration": "5 mois",
        "title": "Enseignant vacataire",
        "description": "Enseignement du langage objet Python à des Licences 2ème année.",
        "location": "UBO, Brest (29)"
      },
      "oktave": {
        "date": "2018 à 2019",
        "duration": "1 an",
        "title": "Développeur backend en stage puis alternance",
        "description": "Gestion backend d'une application de questionnaires en SAAS.",
        "location": "Oktave, Brest (29)"
      }
    }
  }
}
</i18n>
