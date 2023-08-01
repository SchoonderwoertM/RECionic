<template>
  <base-layout page-default-back-link="/home">
    <div class="pageContent">
      <ion-label>
        <h1>Uitgevoerde inspecties</h1>
      </ion-label>
      <inspections-list :inspections="completedInspections"></inspections-list>
    </div>
  </base-layout>
</template>

<script>
import InspectionsList from "@/components/inspections/InspectionsList.vue";
import { IonLabel } from "@ionic/vue";

export default {
  name: "CompletedInspections",
  components: { InspectionsList, IonLabel },
  created() {
    //check if inspections are already available in the store.
    if (!this.$store.getters.getInspections.length) {
      this.$store.dispatch("getInspections");
    }
  },
  computed: {
    completedInspections() {
      const sortedInspections = this.$store.getters.getSortedInspections;
      //filter completed inspection
      return sortedInspections.filter((inspection) => inspection.completed);
    },
  },
};
</script>
