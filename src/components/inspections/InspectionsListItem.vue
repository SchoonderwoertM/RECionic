<template>
  <ion-card :router-link="`/inspectionDetails/${inspection.id}`">
    <ion-card-content>
      <p>{{ inspection.inspections[0].date }}</p>
      <h2>
        {{ inspection.address.street }} {{ inspection.address.housenumber }},
        {{ inspection.address.residence }}
      </h2>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent } from "@ionic/vue";

export default {
  props: ["inspection"],
  components: {
    IonCard,
    IonCardContent,
  },
};
</script>
