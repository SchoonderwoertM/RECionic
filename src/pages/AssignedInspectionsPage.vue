<template>
  <base-layout page-default-back-link="/home">
    <div class="pageContent">
      <ion-label>
        <h1>Toegewezen rapportages</h1>
      </ion-label>
      <inspections-list :inspections="assignedInspections"></inspections-list>
    </div>
  </base-layout>
</template>

<script>
import InspectionsList from "@/components/inspections/InspectionsList.vue";
import { IonLabel } from "@ionic/vue";

export default {
  name: "AssignedInspections",
  components: { InspectionsList, IonLabel },
  created() {
    if (!this.$store.getters.getInspections.length) {
      this.$store.dispatch("getInspections");
    }
  },
  computed: {
    assignedInspections() {
      const inspections = this.$store.getters.getInspections;
      return inspections.filter((inspection) => !inspection.completed);
    },
  },
};
</script>
