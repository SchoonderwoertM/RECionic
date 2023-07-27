<template>
  <ion-list lines="none" class="ion-list">
    <ion-list-header color="primary">
      <ion-label>Schade</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label position="fixed">Locatie:</ion-label>
      <ion-input
        aria-label="Locatie"
        type="text"
        v-model="damageReport.damLocation"
      ></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Nieuwe schade:</ion-label>
      <ion-checkbox aria-label="Nieuwe schade" v-model="damageReport.damNew"></ion-checkbox>
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Soort schade:</ion-label>
      <ion-select aria-label="Soort schade"
        placeholder="Selecteer"
        v-model="damageReport.damType"
      >
        <ion-select-option value="moedwillig">Moedwillig</ion-select-option>
        <ion-select-option value="slijtage">Slijtage</ion-select-option>
        <ion-select-option value="geweld">Geweld</ion-select-option>
        <ion-select-option value="normaalGebruik"
          >Normaal gebruik</ion-select-option
        >
        <ion-select-option value="calamiteiten">Calamiteiten</ion-select-option>
        <ion-select-option value="anders">Anders</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Datum:</ion-label>
      <ion-input
        aria-label="Datum"
        type="date"
        v-model="damageReport.damDate"
      ></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Acute actie vereist:</ion-label>
      <ion-checkbox aria-label="Acute actie vereist" v-model="damageReport.damAcuteAction"></ion-checkbox>
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Omschrijving:</ion-label>
      <ion-input
        aria-label="Omschrijving"
        type="text"
        v-model="damageReport.damDescription"
      ></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Foto's:</ion-label>
    </ion-item>
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
  props: ["damageReport"],
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
