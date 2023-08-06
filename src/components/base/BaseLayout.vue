<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-back-button
          slot="start"
          :default-href="pageDefaultBackLink"
        ></ion-back-button>
        <ion-img
          src="./src/theme/images/logo.png"
          alt="logo"
          class="logo ion-padding"
        />
        <ion-button
          color="primary"
          slot="end"
          aria-label="uitloggen"
          class="ion-margin-end"
          @click="logout()"
        >
          <ion-icon
            :icon="logOutOutline"
            slot="icon-only"
            aria-hidden="true"
          ></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <slot />
    </ion-content>
    <ion-footer>
      <ion-toolbar class="ion-padding-start ion-padding-end">
        <ion-buttons id="footerButtons">
          <router-link to="/notifications">
            <ion-button class="footerIcons">
              <ion-icon
                :icon="notificationsOutline"
                slot="icon-only"
              ></ion-icon>
            </ion-button>
          </router-link>
          <router-link to="/home">
            <ion-button class="footerIcons">
              <ion-icon :icon="homeOutline" slot="icon-only"></ion-icon>
            </ion-button>
          </router-link>
          <router-link to="/contact">
            <ion-button class="footerIcons">
              <ion-icon :icon="callOutline" slot="icon-only"></ion-icon>
            </ion-button>
          </router-link>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  homeOutline,
  callOutline,
  notificationsOutline,
  logOutOutline,
} from "ionicons/icons";
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
      callOutline,
      notificationsOutline,
      logOutOutline,
    };
  },
  methods: {
    logout() {
      this.$store.commit("SET_USER", "");
      sessionStorage.setItem("Authenticated", false);
      this.$router.replace("/login");
    },
  },
};
</script>
