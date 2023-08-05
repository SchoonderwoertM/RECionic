<template>
  <ion-list lines="none" class="ion-list">
    <ion-list-header>
      <ion-label>Schade</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label position="fixed">Locatie:</ion-label>
      <ion-input
      class="custom ion-margin-top"
        aria-label="Locatie"
        type="text"
        v-model="damageReport.damLocation"
        maxlength="50"
      />
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Nieuwe schade:</ion-label>
      <ion-checkbox
        aria-label="Nieuwe schade"
        v-model="damageReport.damNew"
      ></ion-checkbox>
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Soort schade:</ion-label>
      <ion-select
        aria-label="Soort schade"
        placeholder="Selecteer"
        v-model="damageReport.damType"
      >
        <ion-select-option value="Moedwillig">Moedwillig</ion-select-option>
        <ion-select-option value="Slijtage">Slijtage</ion-select-option>
        <ion-select-option value="Geweld">Geweld</ion-select-option>
        <ion-select-option value="Normaal gebruik"
          >Normaal gebruik</ion-select-option
        >
        <ion-select-option value="calamiteiten">Calamiteiten</ion-select-option>
        <ion-select-option value="anders">Anders</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Datum:</ion-label>
      <ion-input
      class="custom"
        aria-label="Datum"
        type="date"
        v-model="damageReport.damDate"
      ></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Acute actie vereist:</ion-label>
      <ion-checkbox
        aria-label="Acute actie vereist"
        v-model="damageReport.damAcuteAction"
      ></ion-checkbox>
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Omschrijving:</ion-label>
      <ion-input
      class="custom"
        aria-label="Omschrijving"
        type="text"
        v-model="damageReport.damDescription"
        maxlength="100"
      ></ion-input>
    </ion-item>
    <ion-item>
      <ion-input position="fixed"
      class="custom ion-margin-end"
        aria-label="Foto 1"
        type="url"
        v-model="damageReport.damPhoto1"
      ></ion-input>
      <ion-button @click="getPicture">Foto toevoegen</ion-button>
    </ion-item>
    <ion-item>
      <ion-input
      class="custom ion-margin-end"
        aria-label="Foto 2"
        type="url"
        v-model="damageReport.damPhoto2"
      ></ion-input>
      <ion-button @click="getPicture">Foto toevoegen</ion-button>
    </ion-item>
  </ion-list>
</template>

<script>
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
} from "@ionic/vue";

export default {
  props: {
    damageReport: { type: Object, required: true },
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
  },
  methods: {
    async getPicture() {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri,
        });
        const imageUrl = image.webPath;
        this.damageReport.damPhotos = imageUrl;
      } catch (error) {
        console.error("Camera error:", error);
      }
    },
  },
};
</script>
