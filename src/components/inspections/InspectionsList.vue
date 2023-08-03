<template>
  <ion-spinner v-if="loading" name="bubbles"></ion-spinner>
  <inspection-list-item
    v-for="inspection in inspections"
    :key="inspection.id"
    :inspection="inspection"
  >
  </inspection-list-item>
</template>

<script>
import InspectionListItem from "./InspectionsListItem.vue";
import { IonSpinner } from "@ionic/vue";

export default {
  props: {
    inspections: { type: Object, required: true },
  },
  components: {
    InspectionListItem,
    IonSpinner,
  },
  computed: {
    loading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>
