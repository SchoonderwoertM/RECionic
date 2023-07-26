<template>
  <ion-page>
    <ion-card class="pageContent">
      <ion-card-header>
        <ion-img
          class="logo"
          src="src\theme\images\logo.png"
          alt="Real estate care logo"
        />
        <ion-card-title>Log In</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-input
          type="text"
          v-model="input.username"
          placeholder="Gebruikersnaam"
          required
        ></ion-input>
        <ion-input
          type="password"
          v-model="input.password"
          placeholder="Wachtwoord"
          required
        ></ion-input>
        <ion-button type="submit" expand="block" @click.prevent="login()"
          >Log in</ion-button
        >
        <h3>{{ this.output }}</h3>
      </ion-card-content>
    </ion-card>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonImg,
  toastController,
} from "@ionic/vue";

export default {
  name: "Login",
  components: {
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonImg,
  },

  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      output: "",
      mockAccount: {
        username: "Mariska",
        password: "WW",
      },
    };
  },
  methods: {
    login() {
      //make sure username AND password are not empty
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.mockAccount.username &&
          this.input.password == this.mockAccount.password
        ) {
          //stores true to the set_loggedIn and username to the set_username
          this.$store.commit("SET_LOGGEDIN", true);
          this.$store.commit("SET_USERNAME", this.input.username);
          const randomNumber =
            Math.floor(Math.random() * (100000 - 10000)) + 10000;
          localStorage.setItem("Authentication", randomNumber);
          this.presentToast(randomNumber);
          this.$router.replace("/authentication");
        }
      } else {
        this.$store.commit("SET_LOGGEDIN", false);
        this.output = "Gebruikersnaam en wachtwoord mogen niet leeg zijn";
      }
    },

    async presentToast(randomNumber) {
      const message = "Uw verificatiecode is: ";
      const toast = await toastController.create({
        message: message + randomNumber,
        cssClass: "toast",
        duration: 8000,
        position: "top",
      });

      await toast.present();
    },
  },
};
</script>
