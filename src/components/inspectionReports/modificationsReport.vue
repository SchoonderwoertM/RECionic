<template>
  <ion-list lines="none" class="ion-list">
    <ion-list-header color="primary">
      <ion-label><h2>Modificaties</h2></ion-label>
    </ion-list-header>
    <ion-item
      ><ion-label position="fixed">Bestaande situatie: </ion-label>
      <ion-button router-link="/documents">Openen</ion-button></ion-item
    >
    <ion-item
      ><ion-label position="fixed">Locatie modificatie: </ion-label>
      <ion-input
        aria-label="Locatie modificatie"
        type="text"
        v-model="modificationsReport.modiLocation"
      ></ion-input
    ></ion-item>
    <ion-item
      ><ion-label position="fixed">Uitgevoerd door: </ion-label>
      <ion-select
        aria-label="Uitgevoerd door"
        placeholder="Selecteer"
        v-model="modificationsReport.modiPerformedBy"
      >
        <ion-select-option value="huurder">Huurder</ion-select-option>
        <ion-select-option value="aannemer">Aannemer</ion-select-option>
        <ion-select-option value="onbekend">Onbekend</ion-select-option>
      </ion-select></ion-item
    >
    <ion-item
      ><ion-label position="fixed">Beschrijving modificatie: </ion-label>
      <ion-input
        aria-label="Beschrijving modificatie"
        type="text"
        v-model="modificationsReport.modiDescription"
      ></ion-input
    ></ion-item>
    <ion-item
      ><ion-label position="fixed">Te ondernemen actie: </ion-label>
      <ion-input
        aria-label="Te ondernemen actie"
        type="text"
        v-model="modificationsReport.modiAction"
      ></ion-input>
      <ion-select
        aria-label="Te ondernemen actie"
        placeholder="Selecteer"
        v-model="modificationsReport.modiAction"
      >
        <ion-select-option value="accepteren">Accepteren</ion-select-option>
        <ion-select-option value="latenKeuren">Laten keuren</ion-select-option>
        <ion-select-option value="latenVerwijderen"
          >Laten verwijderen</ion-select-option
        >
        <ion-select-option value="laten aanpassen en keuren"
          >Laten aanpassen en keuren</ion-select-option
        >
      </ion-select></ion-item
    >
    <ion-item
      ><ion-label position="fixed">Opmerkingen: </ion-label>
      <ion-input
        aria-label="Opmerkingen"
        type="text"
        v-model="modificationsReport.modComments"
      ></ion-input
    ></ion-item>
    <ion-item
      ><ion-label
        >Foto's: {{ modificationsReport.modPhotos }}</ion-label
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
  IonButton,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";

export default {
  props: {
    modificationsReport: { type: Object, required: true },
  },
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonListHeader,
    IonButton,
    IonSelect,
    IonSelectOption,
  },
};
</script>
