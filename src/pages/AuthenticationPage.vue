<template>
  <ion-page>
    <ion-card class="pageContent">
      <ion-card-header>
        <ion-img
          class="logo"
          src="src\theme\images\logo.png"
          alt="Real estate care logo"
        />
        <ion-card-title> Verificatie </ion-card-title>
      </ion-card-header>
      <ion-card-content
        ><ion-input
          type="text"
          v-model="authenticationNumber"
          placeholder="Verificatiecode"
          required
        ></ion-input>
        <ion-button type="submit" expand="block" @click="authenticate()"
          >Log in</ion-button
        >
        <h3>{{this.output}}</h3>
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
} from "@ionic/vue";

export default {
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
      authenticationNumber: "",
      output: "",
    };
  },
  methods: {
    authenticate() {
      //make sure authenticationNumber is not empty
      const authenticationNumber = localStorage.getItem("Authentication");
      if (this.authenticationNumber != "") {
        if (this.authenticationNumber == authenticationNumber) {
          //stores true to the set_authentication to the set_authentication
          this.$store.commit("SET_AUTHENTICATION", true);
          sessionStorage.setItem("Authenticated", true);
          this.authenticationNumber = "";
          this.$router.push("/home");
        }
      } else {
        this.$store.commit("SET_AUTHENTICATION", false);
        this.output = "Verificatiecode verplicht";
      }
    },
  },
};
</script>
