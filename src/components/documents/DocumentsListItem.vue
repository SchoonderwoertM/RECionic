<template>
  <ion-item>
    <ion-card id="documentCard" color="secondary">
      <ion-card-header>
        <div>
          <ion-card-title class="documentTitle ion-padding-end">{{ document.title }}</ion-card-title>
          <ion-button @click="document.showContent = !document.showContent">
            <ion-icon
              :icon="
                document.showContent ? chevronUpOutline : chevronDownOutline
              "
              slot="icon-only"
            ></ion-icon>
          </ion-button>
        </div>
      </ion-card-header>
      <ion-card-content v-show="document.showContent">
        {{ document.content }}
      </ion-card-content>
    </ion-card></ion-item
  >
</template>

<script>
import {
  IonItem,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { chevronDownOutline, chevronUpOutline } from "ionicons/icons";

export default {
  props: ["document"],
  components: {
    IonItem,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonIcon,
  },
  data() {
    return { chevronDownOutline, chevronUpOutline };
  },
};
</script>
