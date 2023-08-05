<template>
  <ion-card :router-link="`/inspection/${inspection.id}`">
    <ion-card-content>
      <p>{{ inspection.inspections[0].date }}</p>
      <h2 class="textColorPrimaryContrast">
        {{ inspection.address.street }} {{ inspection.address.housenumber }},
        {{ inspection.address.residence }}
      </h2>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent } from "@ionic/vue";

export default {
  props: {
    inspection: { type: Object, required: true },
  },
  components: {
    IonCard,
    IonCardContent,
  },
};
</script>
