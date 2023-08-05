<template>
  <base-layout>
    <ion-grid>
      <ion-row>
        <ion-col size="6">
          <router-link to="/assigned-inspections">
            <ion-card class="homeCard">
              <ion-icon :src="checkmarkOutline" class="homeCardIcon"></ion-icon>
              <ion-card-title class="homeCardTitle">Toegewezen rapportages</ion-card-title>
            </ion-card>
          </router-link>
        </ion-col>
        <ion-col size="6">
          <router-link to="/completed-inspections">
            <ion-card class="homeCard">
              <ion-icon :src="checkboxOutline" class="homeCardIcon"></ion-icon>
              <ion-card-title class="homeCardTitle">Uitgevoerde rapportages</ion-card-title>
            </ion-card>
          </router-link>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <router-link to="/documents">
            <ion-card class="homeCard">
              <ion-icon :src="folderOutline" class="homeCardIcon"></ion-icon>
              <ion-card-title class="homeCardTitle">Kennisbase</ion-card-title>
            </ion-card>
          </router-link>
        </ion-col>
        <ion-col size="6">
          <router-link to="/settings">
            <ion-card class="homeCard">
              <ion-icon :src="settingsOutline" class="homeCardIcon"></ion-icon>
              <ion-card-title class="homeCardTitle">Instellingen</ion-card-title>
            </ion-card>
          </router-link>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import {
  checkmarkOutline,
  checkboxOutline,
  folderOutline,
  settingsOutline,
} from "ionicons/icons";
import {
  IonCard,
  IonCardTitle,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
} from "@ionic/vue";

export default {
  name: "HomePage",
  components: {
    IonCard,
    IonCardTitle,
    IonGrid,
    IonCol,
    IonRow,
    IonIcon,
  },
  setup() {
    return {
      checkmarkOutline,
      checkboxOutline,
      folderOutline,
      settingsOutline,
    };
  },
};
</script>
