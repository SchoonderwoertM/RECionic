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
              <ion-input
                aria-label="Voornaam"
                v-model="user.firstname"
              ></ion-input>
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
            <ion-button expand="block" @click="saveSettings"
              >Opslaan</ion-button
            >
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
  IonButton,
  toastController,
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
    IonButton,
  },
  setup() {
    const theme = "";
    return {
      theme,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    async saveSettings() {
      const toast = await toastController.create({
        message: "De account instellingen kunnen in deze demo app niet worden gewijzigd.",
        cssClass: "toast",
        duration: 8000,
        position: "top",
      });

      toast.present();
    },
    // async saveSettings() {
    //   const url =
    //     "https://api.jsonbin.io/v3/b/64c279ed8e4aa6225ec5e62f";
    //   const key =
    //     "$2b$10$xGY57xK/yyF20/AcOpvLJuWh3MnrWeuQZG60ykSCOe49wS5oQ0tw.";
    //   const options = {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "X-Master-Key": key,
    //       "X-JSON-Path": `$.users[?(@.id==${this.user.id}`,
    //     },
    //     body: JSON.stringify({
    //         id: this.user.id,
    //         username: this.user.username,
    //         password: this.user.password,
    //         firstname: this.user.firstname,
    //         lastname: this.user.lastname,
    //         emailaddress: this.user.emailaddress,
    //         phonenumber: this.user.phonenumber,
    //   })};
    //   console.log(options);
    //   await fetch(url, options)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error(`HTTP error ${response.status}`);
    //       }
    //       return response.json();
    //     })
    //     .catch((error) => {
    //       console.error("Error updating data:", error);
    //     });
    //   },
    toggleTheme() {
      this.theme = this.theme == "lightMode" ? "" : "lightMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
    },
  },
};
</script>
