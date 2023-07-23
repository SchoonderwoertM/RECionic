<template>
  <base-layout page-default-back-link="/home">
    <ion-label>
      <h1>Toegewezen rapportages</h1>
    </ion-label>
    <inspections-list :inspections="inspections"></inspections-list>
  </base-layout>
</template>

<script>
import InspectionsList from "@/components/inspections/InspectionsList.vue";
import { IonLabel } from "@ionic/vue";

export default {
  components: { InspectionsList, IonLabel },
  created() {
    if (!this.$store.getters.inspections.length) {
      this.$store.dispatch("fetchInspections");
    }
  },
  computed: {
    inspections() {
      const inspections = this.$store.getters.inspections;
      return inspections.filter((inspection) => !inspection.completed);
    },
  },
};
</script>
