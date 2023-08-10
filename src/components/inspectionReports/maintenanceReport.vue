<template>
  <ion-list lines="none" class="ion-list">
    <ion-list-header>
      <ion-label
        ><ion-icon
          v-if="maintenanceReport.maintPerform"
          :icon="bookmark"
          slot="icon-only"
          aria-hidden="true"
          color="primary"
        ></ion-icon
        >Achterstallig onderhoud</ion-label
      >
    </ion-list-header>
    <ion-item
      ><ion-label position="fixed">Locatie:</ion-label>
      <ion-input
        class="customInput ion-margin-top"
        aria-label="Locatie"
        type="text"
        v-model="maintenanceReport.maintLocation"
      ></ion-input>
    </ion-item>
    <ion-item
      ><ion-label position="fixed">Soort onderhoud:</ion-label>
      <ion-select
        aria-label="Soort onderhoud"
        placeholder="Selecteer"
        v-model="maintenanceReport.maintType"
      >
        <ion-select-option value="Schilderwerk">Schilderwerk</ion-select-option>
        <ion-select-option value="Houtrot">Houtrot</ion-select-option>
        <ion-select-option value="Elektra">Elektra</ion-select-option>
        <ion-select-option value="Leidingwerk">Leidingwerk</ion-select-option>
        <ion-select-option value="Beglazing">Beglazing</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item
      ><ion-label position="fixed">Acute actie vereist: </ion-label>
      <ion-checkbox
        aria-label="Acute actie vereist"
        v-model="maintenanceReport.maintAcuteAction"
      ></ion-checkbox>
    </ion-item>
    <ion-item
      ><ion-label position="fixed">Kostenindicatie: </ion-label>
      <ion-select
        aria-label="Kostenindicatie"
        placeholder="Selecteer"
        v-model="maintenanceReport.maintCost"
      >
        <ion-select-option value="0-500">0-500</ion-select-option>
        <ion-select-option value="500-1500">500-1.500</ion-select-option>
        <ion-select-option value="1500+">1500+</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-input
        class="customInput ion-margin-end"
        aria-label="Foto's"
        type="text"
        v-model="maintenanceReport.maintPhoto1"
      ></ion-input>
      <ion-button @click="getPicture('Photo1')">Foto toevoegen</ion-button>
    </ion-item>
    <ion-item>
      <ion-input
        class="customInput ion-margin-end"
        aria-label="Foto's"
        type="text"
        v-model="maintenanceReport.maintPhoto2"
      ></ion-input>
      <ion-button @click="getPicture('Photo2')">Foto toevoegen</ion-button>
    </ion-item>
  </ion-list>
</template>

<script>
import { bookmark } from "ionicons/icons";
import { Camera, CameraResultType } from "@capacitor/camera";

import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonListHeader,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon
} from "@ionic/vue";

export default {
  props: {
    maintenanceReport: { type: Object, required: true },
  },
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonListHeader,
    IonCheckbox,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonIcon
  },
  setup() {
    return {
      bookmark,
    };
  },
  methods: {
    async getPicture(imageKey) {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri,
        });
        const imageUrl = image.webPath;
        this.maintenanceReport[`maint${imageKey}`] = imageUrl;
      } catch (error) {
        console.error("Camera error:", error);
      }
    },
  },
};
</script>
