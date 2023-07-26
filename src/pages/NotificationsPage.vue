<template>
  <base-layout>
    <ion-card class="pageContent">
      <ion-card-header>
        <ion-card-title>Notificaties</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Er zijn op dit moment geen notificaties te vermelden.
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
  name: "Notifications",
  components: {
    IonLabel,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  },
};
</script>
