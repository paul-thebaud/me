<script
  lang="ts"
  setup
>
import EducationSection from '@/components/resume/sections/EducationSection.vue';
import ExperienceSection from '@/components/resume/sections/ExperienceSection.vue';
import HobbiesSection from '@/components/resume/sections/HobbiesSection.vue';
import IntroductionSection from '@/components/resume/sections/IntroductionSection.vue';
import ProjectsSection from '@/components/resume/sections/ProjectsSection.vue';
import SkillsSection from '@/components/resume/sections/SkillsSection.vue';
import WebVersionSection from '@/components/resume/sections/WebVersionSection.vue';
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
    <web-version-section class="mb-1" />
    <v-row dense>
      <v-col
        :cols="leftColumnSize"
        md="7"
      >
        <introduction-section class="page-break--avoid" />
        <experience-section class="page-break--avoid mt-2" />
        <education-section class="page-break--avoid mt-2" />
      </v-col>
      <v-col
        :cols="rightColumnSize"
        md="5"
      >
        <projects-section class="page-break--avoid" />
        <skills-section class="page-break--avoid mt-2" />
        <hobbies-section class="page-break--avoid mt-2" />
      </v-col>
    </v-row>
  </div>
</template>
