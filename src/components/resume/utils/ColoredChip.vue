<script
  lang="ts"
  setup
>
import themes from '@/plugins/vuetify/themes';
import store from '@/store';
import { computed, ComputedRef } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

const { name, color } = defineProps({
  name: {
    required: true,
    type: String,
  },
  color: {
    type: String,
    default: undefined,
  },
});

const variant = computed(() => ({
  [themes.light.id]: 'tonal',
  [themes.dark.id]: 'flat',
  [themes.highContrast.id]: 'tonal',
}[theme.global.name.value])) as ComputedRef<'flat' | 'tonal'>;

const realColor = computed(() => (
  theme.global.name.value !== themes.highContrast.id
    ? color
    : undefined
));
</script>

<template>
  <v-chip
    :ripple="false"
    :color="realColor"
    :variant="variant"
    :small="store.printing"
    class="text--monospace px-2"
    density="compact"
  >
    <span>{{ name }}</span>
  </v-chip>
</template>
