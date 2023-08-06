<template>
  <ion-list lines="none" class="ion-list">
    <ion-list-header>
      <ion-label>Technische installaties</ion-label>
    </ion-list-header>
    <ion-item
      ><ion-label position="fixed">Locatie:</ion-label>
      <ion-input
        class="custom ion-margin-top"
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
        <ion-select-option value="Koeling">Koeling</ion-select-option>
        <ion-select-option value="Verwarming">Verwarming</ion-select-option>
        <ion-select-option value="Luchtverversing"
          >Luchtverversing</ion-select-option
        >
        <ion-select-option value="Elektra">Elektra</ion-select-option>
        <ion-select-option value="Beveiliging">Beveiliging</ion-select-option>
      </ion-select></ion-item
    >
    <ion-item
      ><ion-label position="fixed">Gemelde storing:</ion-label>
      <ion-input
        class="custom"
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
        class="custom"
        aria-label="Opmerkingen"
        type="text"
        v-model="installationsReport.techComments"
      ></ion-input
    ></ion-item>
    <ion-item>
      <ion-input
        class="custom ion-margin-end"
        aria-label="Foto's"
        type="text"
        v-model="installationsReport.techPhoto1"
      >
      </ion-input>
        <ion-button @click="getPicture">Foto toevoegen</ion-button>
    </ion-item>
    <ion-item>
      <ion-input
        class="custom ion-margin-end"
        aria-label="Foto's"
        type="text"
        v-model="installationsReport.techPhoto2"
      ></ion-input>
      <ion-button @click="getPicture">Foto toevoegen</ion-button>
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
  IonButton,
} from "@ionic/vue";

export default {
  props: {
    installationsReport: { type: Object, required: true },
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
