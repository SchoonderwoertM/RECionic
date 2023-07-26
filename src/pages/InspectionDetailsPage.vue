<template>
  <base-layout page-default-back-link="/completedInspections">
    <div class="pageContent">
      <h2 v-if="!loadedInspection">
        Kan de inspectie met het opgegeven id niet vinden.
      </h2>
      <inspection-overview
        v-else
        :inspection="loadedInspection"
      ></inspection-overview>
    </div>
  </base-layout>
</template>

<script>
import InspectionOverview from "@/components/inspections/InspectionOverview.vue";
import { IonLabel } from "@ionic/vue";

export default {
  name: "InspectionDetails",
  components: {
    InspectionOverview,
    IonLabel
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
