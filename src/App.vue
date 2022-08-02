<script
  lang="ts"
  setup
>
import LocaleMenu from '@/components/LocaleMenu.vue';
import PrintBtn from '@/components/PrintBtn.vue';
import ResumeContent from '@/components/resume/ResumeContent.vue';
import ThemeMenu from '@/components/ThemeMenu.vue';</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <header class="d-print-none d-flex align-center">
          <print-btn />
          <v-spacer />
          <locale-menu />
          <theme-menu class="ml-2" />
        </header>
        <resume-content class="mt-md-12" />
      </v-container>
    </v-main>
  </v-app>
</template>

<style
  lang="scss"
  scoped
>
  :global(.v-card > .v-card__loader) {
    display: none !important;
  }

  .v-container {
    max-width: 1100px !important;
  }

  @media print {
    .v-main {
      padding: 0 !important;
    }

    .v-container {
      padding: 10mm !important;
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
