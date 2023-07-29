<template>
  <ion-card :router-link="`/inspection/${inspection.id}`">
    <ion-card-content>
      <p>{{ inspection.inspections[0].date }}</p>
      <h2>
        {{ inspection.address[0].street }} {{ inspection.address[0].housenumber }},
        {{ inspection.address[0].residence }}
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
