<template>
  <ion-list lines="none" class="ion-list">
    <ion-list-header>
      <ion-label>Modificaties</ion-label>
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
        <ion-select-option value="Huurder">Huurder</ion-select-option>
        <ion-select-option value="Aannemer">Aannemer</ion-select-option>
        <ion-select-option value="Onbekend">Onbekend</ion-select-option>
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
      <ion-select
        aria-label="Te ondernemen actie"
        placeholder="Selecteer"
        v-model="modificationsReport.modiAction"
      >
        <ion-select-option value="Accepteren">Accepteren</ion-select-option>
        <ion-select-option value="Laten keuren">Laten keuren</ion-select-option>
        <ion-select-option value="Laten verwijderen"
          >Laten verwijderen</ion-select-option
        >
        <ion-select-option value="Laten aanpassen en keuren"
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
    <ion-item>
      <ion-label>Foto's:</ion-label>
      <div>
        <ion-input aria-label="Foto's"
          type="url"
          v-model="modificationsReport.modPhoto1"
        ></ion-input>
        <ion-button @click="getPicture">Foto toevoegen</ion-button>
      </div>
      <div>
        <ion-input aria-label="Foto's"
          type="url"
          v-model="modificationsReport.modPhoto2"
        ></ion-input>
        <ion-button @click="getPicture">Foto toevoegen</ion-button>
      </div>
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
