<template>
  <ion-item :router-link="`/completedInspections/${inspection.id}`">
    <ion-label>
      <p>{{ inspection.inspectionDate }}</p>
      <h2>
        {{ inspection.street }} {{ inspection.housenumber }},
        {{ inspection.residence }}
      </h2>
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel } from "@ionic/vue";

export default {
  props: ["inspection"],
  components: {
    IonItem,
    IonLabel,
  },
};
</script>
