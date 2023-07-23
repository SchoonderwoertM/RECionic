<template>
  <ion-spinner v-if="loading" name="bubbles"></ion-spinner>
  <ion-list>
    <inspection-list-item
      v-for="inspection in inspections"
      :key="inspection.id"
      :inspection="inspection"
    >
    </inspection-list-item>
  </ion-list>
</template>

<script>
import InspectionListItem from "./InspectionsListItem.vue";
import { IonList, IonSpinner } from "@ionic/vue";

export default {
  props: ["inspections"],
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
