<script
  lang="ts"
  setup
>
import ColoredChip from '@/components/resume/utils/ColoredChip.vue';
import { PropType } from 'vue';

const { items } = defineProps({
  items: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => [],
  },
});
</script>

<template>
  <div
    role="list"
    class="d-flex align-center flex-wrap"
  >
    <colored-chip
      v-for="(item, index) in items"
      :key="`items.${index}`"
      :name="item.name"
      :color="item.color"
      role="listitem"
      class="mr-1 mb-1"
    />
  </div>
</template>
