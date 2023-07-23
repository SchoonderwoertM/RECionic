<template>
  <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
              :default-href="pageDefaultBackLink"
            ></ion-back-button>
          </ion-buttons>
          <router-link to="/Home">
            <ion-img
              id="logo"
              src="./src/theme/images/logo.png"
              alt="logo"
              class="ion-padding"
            />
          </router-link>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <slot />
      </ion-content>
      <ion-footer id="footerToolbar">
        <ion-toolbar>
          <ion-buttons id="footerButtons">
            <router-link to="/home">
              <ion-button>
                <ion-icon
                  :src="homeOutline"
                  slot="icon-only"
                  class="footerIcon"
                ></ion-icon>
              </ion-button>
            </router-link>
            <router-link to="/home">
              <ion-button>
                <ion-icon
                  :src="notificationsOutline"
                  slot="icon-only"
                  class="footerIcon"
                ></ion-icon>
              </ion-button>
            </router-link>
            <router-link to="/home">
              <ion-button>
                <ion-icon
                  :src="helpOutline"
                  slot="icon-only"
                  class="footerIcon"
                ></ion-icon>
              </ion-button>
            </router-link>
          </ion-buttons>
        </ion-toolbar>
      </ion-footer>
  </ion-page>
</template>

<script>
import { homeOutline, helpOutline, notificationsOutline } from "ionicons/icons";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonButtons,
  IonButton,
  IonImg,
  IonBackButton,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

export default {
  props: ["pageTitle", "pageDefaultBackLink"],
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonFooter,
    IonButtons,
    IonButton,
    IonImg,
    IonBackButton,
    IonLabel,
    IonIcon,
  },
  setup() {
    return {
      homeOutline,
      helpOutline,
      notificationsOutline,
    };
  },
};
</script>
