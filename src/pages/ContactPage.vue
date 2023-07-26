<template>
  <base-layout>
    <ion-card class="pageContent">
      <ion-card-header>
        <ion-card-title>Contact</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <h2>Real Estate Care</h2>
        <p>Postbus 444</p>
        <p>2300 AK Leiden</p>
        <p>071 751 00 52</p>
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import {
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";

export default {
  name: "Contact",
  components: {
    IonLabel,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  },
};
</script>
