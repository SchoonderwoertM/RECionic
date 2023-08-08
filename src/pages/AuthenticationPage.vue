<template>
  <ion-page>
    <ion-card class="pageContent extraMarginTop">
      <ion-card-header color="primary">
        <ion-img
          class="logo"
          src="/logo.png"
          alt="Real estate care logo"
        />
      </ion-card-header>
      <ion-card-content class="ion-margin-vertical"
        ><ion-input
          type="number"
          v-model="authenticationNumber"
          placeholder="Verificatiecode"
          required
        ></ion-input>
        <ion-button type="submit" expand="block" @click="authenticate"
          >Log in</ion-button
        >
        <ion-label color="warning">{{ this.output }}</ion-label>
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
  IonLabel,
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
    IonLabel,
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
          this.$router.replace("/home");
        }
      } else {
        this.output = "Verificatiecode verplicht";
      }
    },
  },
};
</script>
