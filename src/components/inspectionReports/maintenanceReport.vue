<template>
  <ion-list lines="none" class="ion-list">
    <ion-list-header color="primary">
      <ion-label><h2>Achterstallig onderhoud</h2></ion-label>
    </ion-list-header>
    <ion-item
      ><ion-label position="fixed">Locatie:</ion-label>
      <ion-input
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
        <ion-select-option value="schilderwerk">Schilderwerk</ion-select-option>
        <ion-select-option value="houtrot">Houtrot</ion-select-option>
        <ion-select-option value="elektra">Elektra</ion-select-option>
        <ion-select-option value="leidingwerk">Leidingwerk</ion-select-option>
        <ion-select-option value="beglazing">Beglazing</ion-select-option>
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
        <ion-select-option value="500-1.500">500-1.500</ion-select-option>
        <ion-select-option value="1.500+">Elektra</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item
      ><ion-label
        >Foto's: {{ maintenanceReport.maintPhotos }}</ion-label
      ></ion-item
    >
  </ion-list>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonListHeader,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
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
  },
};
</script>
