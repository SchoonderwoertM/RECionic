<template>
  <base-layout>
    <ion-card class="pageContent centerContent">
      <ion-card-header>
        <ion-card-title>Contact</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-list lines="none" class="ion-list" id="contactList">
          <ion-item class="contactItem">Real Estate Care</ion-item>
          <ion-item>Postbus 444 </ion-item>
          <ion-item>2300 AK Leiden </ion-item><ion-item>071 751 00 52 </ion-item
          ><ion-item>info@realestatecare.com </ion-item>
        </ion-list>
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
