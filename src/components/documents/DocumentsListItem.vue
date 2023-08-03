<template>
  <ion-card color="secondary">
    <ion-card-header id="documentCardHeader">
      <ion-card-title>{{ document.title }}</ion-card-title>
      <ion-button @click="document.showContent = !document.showContent">
        <ion-icon
          :icon="document.showContent ? chevronUpOutline : chevronDownOutline"
          slot="icon-only"
        ></ion-icon>
      </ion-button>
    </ion-card-header>
    <ion-card-content v-show="document.showContent">
      {{ document.content }}
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { chevronDownOutline, chevronUpOutline } from "ionicons/icons";

export default {
  props: {
    document: { type: Object, required: true },
  },
  data() {
    return { chevronDownOutline, chevronUpOutline };
  },
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonIcon,
  },
};
</script>
