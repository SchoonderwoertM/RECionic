<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Voorkeuren</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list class="ion-list">
        <ion-item>
          <ion-toggle @click="toggleTheme">Licht thema:</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle>Notificaties:</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle>Geluiden:</ion-toggle>
        </ion-item>
      </ion-list></ion-card-content
    >
  </ion-card>
</template>

<script>
import {
  IonList,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonToggle,
} from "@ionic/vue";

export default {
  props: {
    toggleTheme: { type: Function, required: true },
  },
  components: {
    IonList,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonToggle,
  },
};
</script>
