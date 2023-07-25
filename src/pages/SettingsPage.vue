<template>
  <base-layout page-default-back-link="/home">
    <div class="pageContent">
      <h2>Account instellingen</h2>
      <ion-list>
        <ion-item>
          <ion-thumbnail>
            <ion-img
              alt="Profiel foto"
              src="src\theme\images\blankProfilePicture.png"
            />
          </ion-thumbnail>
        </ion-item>
        <ion-item>
          <ion-label>Voornaam:</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Achternaam:</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Telefoonnummer:</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Emailadres:</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Wachtwoord:</ion-label>
        </ion-item>
      </ion-list>

      <h2>Voorkeuren</h2>
      <ion-list>
        <ion-item>
          <ion-toggle @click="toggleTheme">Licht thema:</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle>Notificaties:</ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle>Geluiden:</ion-toggle>
        </ion-item>
      </ion-list>
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
} from "@ionic/vue";

export default {
  components: {
    IonItem,
    IonList,
    IonToggle,
    IonInput,
    IonThumbnail,
    IonImg,
    IonLabel,
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
