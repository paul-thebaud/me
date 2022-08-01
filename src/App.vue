<script
  lang="ts"
  setup
>
import LocaleMenu from '@/components/LocaleMenu.vue';
import PrintBtn from '@/components/PrintBtn.vue';
import ResumeContent from '@/components/resume/ResumeContent.vue';
import ThemeMenu from '@/components/ThemeMenu.vue';
</script>

<template>
  <v-app>
    <v-app-bar
      class="d-print-none"
      floating
      app
    >
      <print-btn />
      <v-spacer />
      <locale-menu />
      <theme-menu class="ml-2" />
    </v-app-bar>
    <v-main>
      <v-container>
        <resume-content class="mt-md-12" />
      </v-container>
    </v-main>
  </v-app>
</template>

<style
  lang="scss"
  scoped
>
  .v-container {
    max-width: 950px !important;
  }

  @media print {
    .v-main {
      padding: 0 !important;
    }

    .v-container {
      padding: 8mm;
    }
  }
</style>

<i18n>
{
  "fr": {
    "print": "Imprimer",
    "locales": {
      "fr": "Français",
      "en": "Anglais"
    }
  },
  "en": {
    "print": "Print",
    "locales": {
      "fr": "French",
      "en": "English"
    }
  }
}
</i18n>
