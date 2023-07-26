<template>
  <base-layout page-default-back-link="/home">
    <div class="pageContent">
      <ion-card>
        <ion-card-header>
          <ion-card-title> <h2>Account instellingen</h2></ion-card-title>
          </ion-card-header>
        <ion-card-content>
          <ion-list class="ion-list">
            <ion-item>
              <ion-thumbnail>
                <ion-img
                  alt="Profiel foto"
                  src="src\theme\images\blankProfilePicture.png"
                />
              </ion-thumbnail>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">Voornaam:</ion-label>
              <ion-input placeholder="Mariska" aria-label="Voornaam"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">Achternaam:</ion-label>
              <ion-input placeholder="Schoonderwoert" aria-label="Achternaam"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">Telefoonnummer:</ion-label>
              <ion-input placeholder="0612345678" aria-label="Telefoonnummer"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">Emailadres:</ion-label>
              <ion-input
                placeholder="m.schoonderwoert@realestatecare.com" aria-label="Emailadres"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">Wachtwoord:</ion-label>
              <ion-input placeholder="WW" aria-label="Wachtwoord"></ion-input>
            </ion-item>
            <ion-button expand="block">Opslaan</ion-button>
          </ion-list>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title> <h2>Voorkeuren</h2></ion-card-title>
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
    </div>
  </base-layout>
</template>

<script>
import {
  IonItem,
  IonList,
  IonToggle,
  IonInput,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from "@ionic/vue";

export default {
  name: "Settings",
  components: {
    IonItem,
    IonList,
    IonToggle,
    IonInput,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  },
  setup() {
    const theme = "";
    return {
      theme,
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme == "lightMode" ? "" : "lightMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
    },
  },
};
</script>
