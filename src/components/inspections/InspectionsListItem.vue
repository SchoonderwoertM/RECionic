<template>
  <ion-card :router-link="`/inspection/${inspection.id}`">
    <ion-card-content>
      <p>{{ inspection.inspectionDate }}</p>
      <h2>
        {{ inspection.street }} {{ inspection.housenumber }},
        {{ inspection.residence }}
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
