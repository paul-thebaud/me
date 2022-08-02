<script
  lang="ts"
  setup
>
import profileJPG from '@/assets/profile.jpg';
import profileWebP from '@/assets/profile.webp';
import OpenInNewText from '@/components/OpenInNewText.vue';
import store from '@/store';
import { mdiEmailOutline, mdiGithub, mdiLinkedin, mdiPhoneOutline } from '@mdi/js';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

const { t } = useI18n();
const { mobile, width } = useDisplay();

const img = ref(null);

// TODO Remove this temporary fix for vuetify alt on picture.
const fixImgAlt = () => {
  const imgEl = (img.value as any).$el?.getElementsByTagName('img')[0] || undefined;
  if (imgEl) {
    imgEl.alt = '';
  } else {
    setTimeout(() => fixImgAlt(), 100);
  }
};

onMounted(() => {
  fixImgAlt();
});
</script>

<template>
  <v-card>
    <div
      :class="{ 'flex-wrap': width <= 500 && !store.printing }"
      class="d-flex"
    >
      <v-img
        ref="img"
        :src="profileJPG"
        class="align-self-stretch"
        max-height="50vh"
        width="148"
        cover
      >
        <template #sources>
          <source
            :srcset="profileWebP"
            type="image/webp"
          />
          <source
            :srcset="profileJPG"
            type="image/jpeg"
          />
        </template>
      </v-img>
      <div class="w-100">
        <v-card-title>
          <h1 class="text-h4">
            Paul Thébaud
          </h1>
        </v-card-title>
        <v-card-text>
          <p class="text-body-1 mb-2">
            {{ t('description') }}
          </p>
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
                rel="noreferrer nofollow"
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
                rel="noreferrer nofollow"
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
