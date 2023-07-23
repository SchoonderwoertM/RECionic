<template>
  <base-layout page-default-back-link="/home">
  <h2>Account Settings</h2>
    <ion-list>
      <ion-item>
        <ion-thumbnail>
          <img
            alt="Gebruiker"
            src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
          />
        </ion-thumbnail>
      </ion-item>
      <ion-item>
        <ion-input label="Voornaam"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Achternaam"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Telefoonnummer" type="tel"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Emailadres" type="email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Wachtwoord" type="wachtwoord"></ion-input>
      </ion-item>

      <h2>Preferences</h2>
      <ion-item>
        <ion-toggle label="Meldingen ontvangen"></ion-toggle>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonItem, IonList, IonToggle, IonInput, IonThumbnail  } from "@ionic/vue";

export default {
  components: { IonItem, IonList, IonToggle, IonInput, IonThumbnail  },
};
</script>
