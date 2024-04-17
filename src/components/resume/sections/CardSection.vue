<script
  lang="ts"
  setup
>
import { mdiMinusCircleOutline, mdiPlusCircleOutline } from '@mdi/js';
import { computed, PropType, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  items: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => [],
  },
});

const showAllItems = ref(false);

const hasMoreItems = computed(() => props.items.some((item) => item.hide === true));
const visibleItems = computed(() => (
  showAllItems.value ? props.items : props.items.filter((item) => item.hide !== true)
));

const onToggleShowAllItems = () => {
  showAllItems.value = !showAllItems.value;
};
</script>

<template>
  <v-card>
    <v-card-title>
      <h2 class="text-h5">
        {{ title }}
      </h2>
    </v-card-title>
    <v-card-text class="pb-1">
      <slot>
        <template
          v-for="(item, index) in visibleItems"
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
    <v-card-actions
      v-if="hasMoreItems"
      class="d-print-none pt-0"
    >
      <v-btn
        :prepend-icon="showAllItems ? mdiMinusCircleOutline : mdiPlusCircleOutline"
        :aria-expanded="String(showAllItems)"
        variant="text"
        block
        @click="onToggleShowAllItems"
      >
        {{ showAllItems ? t('showLess') : t('showMore') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<i18n>
{
  "fr": {
    "showMore": "Afficher plus",
    "showLess": "Afficher moins"
  },
  "en": {
    "showMore": "Show more",
    "showLess": "Show less"
  }
}
</i18n>
