<script
  lang="ts"
  setup
>
import profileJPG from '@/assets/profile.jpg';
import OpenInNewText from '@/components/OpenInNewText.vue';
import store from '@/store';
import { mdiEmailOutline, mdiGithub, mdiLinkedin, mdiPhoneOutline } from '@mdi/js';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

const { t } = useI18n();
const { mobile, width } = useDisplay();
</script>

<template>
  <v-card>
    <div
      :class="{ 'flex-wrap': width <= 500 && !store.printing }"
      class="d-flex"
    >
      <v-img
        :src="profileJPG"
        :aria-label="undefined"
        alt=""
        class="align-self-stretch"
        max-height="50vh"
        width="148"
        cover
      />
      <div class="w-100">
        <v-card-title>
          <h1 class="text-h4">
            Paul Thébaud
          </h1>
        </v-card-title>
        <v-card-text class="pb-0">
          <p class="text-body-1">
            {{ t('description') }}
          </p>
        </v-card-text>
        <v-card-text class="pa-2">
          <v-row no-gutters>
            <v-col class="d-flex flex-column align-start">
              <v-btn
                :prepend-icon="mdiEmailOutline"
                href="mailto:paul.thebaud29@gmail.com"
                variant="text"
                color="primary"
                size="small"
              >
                paul.thebaud29@gmail.com
              </v-btn>
              <v-btn
                :prepend-icon="mdiPhoneOutline"
                href="tel:+33770796098"
                variant="text"
                color="primary"
                size="small"
              >
                {{ t('phone') }}
              </v-btn>
            </v-col>
            <v-col
              :class="{ 'text-right': !mobile || store.printing }"
              class="d-flex flex-column align-start"
            >
              <v-btn
                :prepend-icon="mdiGithub"
                href="https://github.com/paul-thebaud"
                target="_blank"
                rel="noreferrer noopener"
                variant="text"
                color="primary"
                size="small"
              >
                GitHub
                <open-in-new-text />
              </v-btn>
              <v-btn
                :prepend-icon="mdiLinkedin"
                href="https://linkedin.com/in/paul-thebaud/"
                target="_blank"
                rel="noreferrer noopener"
                variant="text"
                color="primary"
                size="small"
              >
                LinkedIn
                <open-in-new-text />
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<i18n>
{
  "fr": {
    "description": "Actuellement référent en développement et accessibilité numérique au CoWork'HIT, je suis un passioné de développement Web, d'accessibilité et d'open source.",
    "phone": "07 70 79 60 98"
  },
  "en": {
    "description": "Currently referent in development and Web accessibility at CoWork'HIT, I am a lover of Web development, accessibility and open source.",
    "phone": "+33770796098"
  }
}
</i18n>
