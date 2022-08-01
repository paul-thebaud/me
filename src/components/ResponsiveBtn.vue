<script
  lang="ts"
  setup
>
import { defineProps } from 'vue';
import { useDisplay } from 'vuetify';

const { label, icon } = defineProps({
  label: {
    required: true,
    type: String,
  },
  icon: {
    required: true,
    type: String,
  },
});

const { mobile } = useDisplay();
</script>

<template>
  <v-btn
    :title="mobile ? label : undefined"
    :prepend-icon="mobile ? undefined : icon"
    :icon="mobile"
    v-bind="$attrs"
  >
    {{ mobile ? undefined : label }}
    <v-icon
      v-if="mobile"
      :icon="icon"
    />
  </v-btn>
</template>
