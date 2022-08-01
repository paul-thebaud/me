<script
  lang="ts"
  setup
>
import OpenInNewText from '@/components/OpenInNewText.vue';
import { mdiOpenInNew } from '@mdi/js';
</script>

<template>
  <open-in-new-text />
  <v-icon
    :icon="mdiOpenInNew"
    class="mb-2"
    v-bind="$attrs"
  />
</template>
