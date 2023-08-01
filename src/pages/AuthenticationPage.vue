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
} from "@ionic/vue";

export default {
  name: "Authentication",
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
      const authenticationNumber = localStorage.getItem("AuthenticationNumber");
      //make sure authenticationNumber is not empty
      if (this.authenticationNumber != "") {
        if (this.authenticationNumber == authenticationNumber) {
          sessionStorage.setItem("Authenticated", true);
          this.$router.push("/home");
        }
      } else {
        this.output = "Verificatiecode verplicht";
      }
    },
  },
};
</script>
