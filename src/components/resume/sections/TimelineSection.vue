<script
  lang="ts"
  setup
>
import { PropType } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const { title, items } = defineProps({
  title: {
    required: true,
    type: String,
  },
  items: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => [],
  },
});
</script>

<template>
  <v-card>
    <v-card-title>
      <h2 class="text-h5">
        {{ title }}
      </h2>
    </v-card-title>
    <v-divider role="presentation" />
    <v-card-text class="py-0">
      <v-timeline
        line-thickness="1"
        side="end"
      >
        <v-timeline-item
          v-for="(item, index) in items"
          :key="`items.${index}`"
          size="x-small"
        >
          <template #opposite>
            <slot
              name="date"
              v-bind="{ item }"
            />
          </template>
          <slot
            name="item"
            v-bind="{ item }"
          />
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<style
  lang="scss"
  scoped
>
  :deep(.v-timeline-item__body) {
    padding-inline-start: 0.75rem !important;
    padding-block-start: 0.75rem !important;
    padding-block-end: 0.75rem !important;
  }

  :deep(.v-timeline-item__opposite) {
    padding-inline-end: 0.75rem !important;
  }
</style>
