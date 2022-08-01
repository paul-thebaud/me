<script
  lang="ts"
  setup
>
import OpenInNewIcon from '@/components/OpenInNewIcon.vue';
import EducationSection from '@/components/resume/sections/EducationSection.vue';
import ExperienceSection from '@/components/resume/sections/ExperienceSection.vue';
import HobbiesSection from '@/components/resume/sections/HobbiesSection.vue';
import IntroductionSection from '@/components/resume/sections/IntroductionSection.vue';
import ProjectsSection from '@/components/resume/sections/ProjectsSection.vue';
import SkillsSection from '@/components/resume/sections/SkillsSection.vue';
import store from '@/store';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const leftColumnSize = computed(() => (
  store.printing ? 7 : 12
));

const rightColumnSize = computed(() => (
  store.printing ? 5 : 12
));
</script>

<template>
  <div>
    <div
      v-if="store.printing"
      class="d-flex justify-end mb-2"
    >
      <v-btn
        href="https://paul-thebaud.github.io/me/"
        target="_blank"
        rel="noreferrer nofollow"
        variant="text"
        size="small"
      >
        {{ t('seeWebVersion') }}
        <open-in-new-icon size="0.75rem" />
      </v-btn>
    </div>
    <v-row dense>
      <v-col
        :cols="leftColumnSize"
        md="7"
      >
        <introduction-section class="mb-2" />
        <experience-section class="mb-2" />
        <education-section />
      </v-col>
      <v-col
        :cols="rightColumnSize"
        md="5"
      >
        <projects-section class="mb-2" />
        <skills-section class="mb-2" />
        <hobbies-section />
      </v-col>
    </v-row>
  </div>
</template>

<i18n>
{
  "fr": {
    "seeWebVersion": "Consulter ce CV sur github.io"
  },
  "en": {
    "seeWebVersion": "Check this resume on github.io"
  }
}
</i18n>
