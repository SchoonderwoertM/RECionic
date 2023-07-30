<template>
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
          <ion-input aria-label="Voornaam" v-model="user.firstname"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="fixed">Achternaam:</ion-label>
          <ion-input
            aria-label="Achternaam"
            v-model="user.lastname"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="fixed">Telefoonnummer:</ion-label>
          <ion-input
            aria-label="Telefoonnummer"
            v-model="user.phonenumber"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="fixed">Emailadres:</ion-label>
          <ion-input
            aria-label="Emailadres"
            v-model="user.emailaddress"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="fixed">Gebruikersnaam:</ion-label>
          <ion-input
            aria-label="Gebruikersnaam"
            v-model="user.username"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="fixed">Wachtwoord:</ion-label>
          <ion-input
            aria-label="Wachtwoord"
            v-model="user.password"
          ></ion-input>
        </ion-item>
        <ion-button expand="block" @click="saveSettings">Opslaan</ion-button>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonImg,
  IonThumbnail,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  toastController,
} from "@ionic/vue";

export default {
  props: ["user"],
  components: {
    IonImg,
    IonThumbnail,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
  },
  methods: {
    async saveSettings() {
      const toast = await toastController.create({
        message:
          "De account instellingen kunnen in deze demo app niet worden gewijzigd.",
        cssClass: "toast",
        duration: 8000,
        position: "top",
      });

      toast.present();
    },
  },
};
</script>
