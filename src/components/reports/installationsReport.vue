<template>
  <ion-list lines="none" class="ion-list">
    <ion-list-header color="primary">
      <ion-label>Technische installaties</ion-label>
    </ion-list-header>
    <ion-item
      ><ion-label position="fixed">Locatie:</ion-label>
      <ion-input
        aria-label="Locatie"
        type="text"
        v-model="installationsReport.techLocation"
      ></ion-input
    ></ion-item>
    <ion-item
      ><ion-label position="fixed">Soort installatie: </ion-label
      ><ion-select
        aria-label="Soort installatie"
        placeholder="Selecteer"
        v-model="installationsReport.techType"
      >
        <ion-select-option value="koeling">Koeling</ion-select-option>
        <ion-select-option value="verwarming">Verwarming</ion-select-option>
        <ion-select-option value="luchtverversing"
          >Luchtverversing</ion-select-option
        >
        <ion-select-option value="elektra">Elektra</ion-select-option>
        <ion-select-option value="beveiliging">Beveiliging</ion-select-option>
      </ion-select></ion-item
    >
    <ion-item
      ><ion-label position="fixed">Gemelde storing:</ion-label>
      <ion-input
        aria-label="Gemelde storing"
        type="text"
        v-model="installationsReport.techMalfunction"
      ></ion-input
    ></ion-item>
    <ion-item
      ><ion-label position="fixed">Testprocedure: </ion-label>
      <ion-button router-link="/documents">Openen</ion-button>
    </ion-item>
    <ion-item
      ><ion-label position="fixed">Goedgekeurd: </ion-label>
      <ion-checkbox
        aria-label="Goedgekeurd"
        v-model="installationsReport.techApproved"
      ></ion-checkbox>
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Opmerkingen: </ion-label>
      <ion-input
        aria-label="Opmerkingen"
        type="text"
        v-model="installationsReport.techComments"
      ></ion-input
    ></ion-item>
    <ion-item>
      <ion-label
        >Foto's: {{ installationsReport.techPhotos }}</ion-label
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
  IonButton
} from "@ionic/vue";

export default {
  props: ["installationsReport"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonListHeader,
    IonCheckbox,
    IonSelect,
    IonSelectOption,
    IonButton
  },
};
</script>
