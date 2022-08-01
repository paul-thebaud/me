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
    <v-card-text>
      <slot>
        <template
          v-for="(item, index) in items"
          :key="`items.${index}`"
        >
          <v-divider
            role="presentation"
            class="mx-n4"
          />
          <div class="my-1">
            <slot
              name="item"
              v-bind="{ item }"
            />
          </div>
        </template>
      </slot>
    </v-card-text>
  </v-card>
</template>
