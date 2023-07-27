<template>
  <ion-card>
    <ion-card-header
      ><ion-card-title>Details inspectie</ion-card-title></ion-card-header
    >
    <ion-card-subtitle
      ><p>{{ inspection.inspectionDate }}</p>
      <h2>
        {{ inspection.street }} {{ inspection.housenumber }},
        {{ inspection.residence }}
      </h2></ion-card-subtitle
    >
    <ion-card-content>
      <ion-button :router-link="`/editReport/${inspection.id}`"
        >Aanpassen</ion-button
      >
      <ion-list v-if="inspection.damageReport" lines="none" class="ion-list">
        <ion-list-header color="primary">
          <ion-label>Schade</ion-label>
        </ion-list-header>
        <ion-item>
          <ion-label
            >Locatie: {{ inspection.damageReport.damLocation }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label
            >Nieuwe schade: {{ inspection.damageReport.damNew }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label
            >Soort schade: {{ inspection.damageReport.damType }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label>Datum: {{ inspection.damageReport.damDate }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label
            >Acute actie vereist:
            {{ inspection.damageReport.damAcuteAction }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label
            >Omschrijving:
            {{ inspection.damageReport.damDescription }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label>Foto's: {{ inspection.damageReport.damPhotos }}</ion-label>
        </ion-item>
      </ion-list>
      <ion-list
        v-if="inspection.maintenanceReport"
        lines="none"
        class="ion-list"
      >
        <ion-list-header color="primary">
          <ion-label>Achterstallig onderhoud</ion-label>
        </ion-list-header>
        <ion-item
          ><ion-label
            >Locatie:
            {{ inspection.maintenanceReport.maintLocation }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Soort onderhoud:
            {{ inspection.maintenanceReport.maintType }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Acute actie vereist:
            {{ inspection.maintenanceReport.maintAcuteAction }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Kostenindicatie:
            {{ inspection.maintenanceReport.maintCost }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Foto's: {{ inspection.maintenanceReport.maintPhotos }}</ion-label
          ></ion-item
        >
      </ion-list>
      <ion-list
        v-if="inspection.installationsReport"
        lines="none"
        class="ion-list"
      >
        <ion-list-header color="primary">
          <ion-label>Technische installaties</ion-label>
        </ion-list-header>
        <ion-item
          ><ion-label
            >Locatie:
            {{ inspection.installationsReport.techLocation }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Soort installatie:
            {{ inspection.installationsReport.techType }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Gemelde storing:
            {{ inspection.installationsReport.techMalfunction }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Goedgekeurd:
            {{ inspection.installationsReport.techApproved }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Opmerkingen:
            {{ inspection.installationsReport.techComments }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Foto's: {{ inspection.installationsReport.techPhotos }}</ion-label
          ></ion-item
        >
      </ion-list>
      <ion-list
        v-if="inspection.modificationsReport"
        lines="none"
        class="ion-list"
      >
        <ion-list-header color="primary">
          <ion-label>Modificaties</ion-label>
        </ion-list-header>
        <ion-item
          ><ion-label
            >Bestaande situatie:
            {{ inspection.modificationsReport.modiSituation }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Locatie modificatie:
            {{ inspection.modificationsReport.modiLocation }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Uitgevoerd door:
            {{ inspection.modificationsReport.modiPerformedBy }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Beschrijving modificatie:
            {{ inspection.modificationsReport.modiDescription }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Te ondernemen actie:
            {{ inspection.modificationsReport.modiAction }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Opmerkingen:
            {{ inspection.modificationsReport.modComments }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Foto's: {{ inspection.modificationsReport.modPhotos }}</ion-label
          ></ion-item
        >
      </ion-list></ion-card-content
    >
  </ion-card>
</template>

<script>
import {
  IonLabel,
  IonList,
  IonItem,
  IonListHeader,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonButton,
} from "@ionic/vue";
export default {
  props: ["inspection"],
  components: {
    IonLabel,
    IonList,
    IonItem,
    IonListHeader,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonButton,
  },
};
</script>
