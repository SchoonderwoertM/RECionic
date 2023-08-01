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
    };
  },
  methods: {
    async login() {
      //check if username and password are not empty
      if (this.input.username != "" && this.input.password != "") {
        try {
          const url = "https://api.jsonbin.io/v3/b/64c279ed8e4aa6225ec5e62f";
          const key =
            "$2b$10$xGY57xK/yyF20/AcOpvLJuWh3MnrWeuQZG60ykSCOe49wS5oQ0tw.";
          const username = JSON.stringify(this.input.username);
          const password = JSON.stringify(this.input.password);
          const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Master-Key": key,
              "X-JSON-Path": `$.users[?(@.username==${username} && @.password==${password})]`,
            },
          };

          const response = await fetch(url, options);
          const user = await response.json();
          //check if user is present
          if (response.ok && user.record[0]) {
            this.$store.commit("SET_USER", user.record[0]);
            //create random verificationcode
            const randomNumber =
              Math.floor(Math.random() * (100000 - 10000)) + 10000;
            localStorage.setItem("AuthenticationNumber", randomNumber);
            this.presentToast(randomNumber);
            this.$router.replace("/authentication");
          } else {
            this.output = "Gebruikersnaam en/of wachtwoord onjuist";
          }
        } catch (error) {
          console.log(error);
        }
      } else {
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
