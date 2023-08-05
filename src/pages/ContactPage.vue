<template>
  <base-layout>
    <ion-card class="pageContent centerContent">
      <ion-card-header>
        <ion-card-title>Contact</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>Real Estate Care</p>
        <p>Postbus 444</p>
        <p>2300 AK Leiden</p>
        <p>071 751 00 52</p>
        <p>info@realestatecare.com</p>
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
  IonList,
  IonItem,
} from "@ionic/vue";

export default {
  name: "Contact",
  components: {
    IonLabel,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonItem,
  },
};
</script>
