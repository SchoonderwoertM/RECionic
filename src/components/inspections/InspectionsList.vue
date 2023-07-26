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
import { IonList, IonSpinner } from "@ionic/vue";

export default {
  props: ["inspections",],
  components: {
    InspectionListItem,
    IonList,
    IonSpinner,
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>
