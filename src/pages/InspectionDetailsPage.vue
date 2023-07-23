<template>
  <base-layout page-default-back-link="/completedInspections">
    <ion-label>
      <h1>Details inspectie</h1>
    </ion-label>
    <h2 v-if="!loadedInspection">
      Kan de inspectie met het opgegeven id niet vinden.
    </h2>
    <inspection-overview
      v-else
      :inspection="loadedInspection"
    ></inspection-overview>
  </base-layout>
</template>

<script>
import InspectionOverview from "@/components/inspections/InspectionOverview.vue";

export default {
  components: {
    InspectionOverview,
  },
  data() {
    return { inspectionId: this.$route.params.id };
  },
  computed: {
    loadedInspection() {
      return this.$store.getters.inspection(parseInt(this.inspectionId));
    },
  },
};
</script>
