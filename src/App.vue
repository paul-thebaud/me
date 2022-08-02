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
        <header class="d-print-none d-flex align-center pb-6 pb-md-12">
          <theme-menu />
          <locale-menu />
          <v-spacer />
          <print-btn />
        </header>
        <resume-content />
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
    @page {
      size: 210mm 297mm;
      margin: 0;
    }

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
