<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Account instellingen</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <form @submit.prevent="saveSettings">
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
            <ion-input
              aria-label="Voornaam"
              type="text"
              v-model="user.firstname"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Achternaam:</ion-label>
            <ion-input
              aria-label="Achternaam"
              type="text"
              v-model="user.lastname"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Telefoonnummer:</ion-label>
            <ion-input
              aria-label="Telefoonnummer"
              type="tel"
              v-model="user.phonenumber"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Emailadres:</ion-label>
            <ion-input
              aria-label="Emailadres"
              type="email"
              v-model="user.emailaddress"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Gebruikersnaam:</ion-label>
            <ion-input
              aria-label="Gebruikersnaam"
              type="text"
              v-model="user.username"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Wachtwoord:</ion-label>
            <ion-input
              aria-label="Wachtwoord"
              type="password"
              v-model="user.password"
            ></ion-input>
          </ion-item>
          <ion-button expand="block" type="submit">Opslaan</ion-button>
        </ion-list>
      </form>
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
  props: {
    user: { type: Object, required: true },
  },
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
