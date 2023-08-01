<template>
  <base-layout page-default-back-link="/completedInspections">
    <div class="pageContent">
      <p v-if="!loadedInspection">
        Kan de inspectie met het opgegeven id niet vinden.
      </p>
      <inspection-overview
        v-else
        :inspection="loadedInspection"
      ></inspection-overview>
    </div>
  </base-layout>
</template>

<script>
import InspectionOverview from "@/components/inspections/InspectionDetailsOverview.vue";
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
      return this.$store.getters.getInspection(parseInt(this.inspectionId));
    },
  },
};
</script>
