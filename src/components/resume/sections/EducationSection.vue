<script
  lang="ts"
  setup
>
import TimelineSection from '@/components/resume/sections/TimelineSection.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const education = computed(() => [
  {
    date: t('education.accessiweb.date'),
    title: t('education.accessiweb.title'),
    location: 'AccessiWeb, Ivry-sur-Seine (94)',
  },
  {
    date: t('education.master.date'),
    title: t('education.master.title'),
    location: 'UBO, Brest (29)',
  },
  {
    date: t('education.licence.date'),
    title: t('education.licence.title'),
    location: 'UBO, Brest (29)',
  },
  {
    date: t('education.dut.date'),
    title: t('education.dut.title'),
    location: 'IUT, Lannion (22)',
  },
]);
</script>

<template>
  <timeline-section
    :title="t('title')"
    :items="education"
  >
    <template #date="{ item }">
      {{ item.date }}
    </template>
    <template #item="{ item }">
      <h3 class="text-h6">
        {{ item.title }}
      </h3>
      <span class="font-weight-bold">
        {{ item.location }}
      </span>
    </template>
  </timeline-section>
</template>

<i18n>
{
  "fr": {
    "title": "Formations",
    "education": {
      "accessiweb": {
        "date": "2021",
        "title": "Expert en évaluation de l'accessibilité Web"
      },
      "master": {
        "date": "2019",
        "title": "Master Informatique TILL en alternance"
      },
      "licence": {
        "date": "2017",
        "title": "Licence Ingénierie Informatique"
      },
      "dut": {
        "date": "2016",
        "title": "DUT Informatique"
      }
    }
  },
  "en": {
    "title": "Education",
    "education": {
      "accessiweb": {
        "date": "2021",
        "title": "Web accessibility audit expert"
      },
      "master": {
        "date": "2019",
        "title": "Master's degree in computer sciences"
      },
      "licence": {
        "date": "2017",
        "title": "Bachelor's degree in computer engineering"
      },
      "dut": {
        "date": "2016",
        "title": "Two-year university degree in computer sciences"
      }
    }
  }
}
</i18n>
