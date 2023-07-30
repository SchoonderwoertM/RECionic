<template>
  <ion-card>
    <ion-card-header
      ><ion-card-title>Details inspectie</ion-card-title></ion-card-header
    >
    <ion-card-subtitle
      ><p>{{ inspection.inspections.date }}</p>
      <h2>
        {{ inspection.address.street }} {{ inspection.address.housenumber }},
        {{ inspection.address.residence }}
      </h2></ion-card-subtitle
    >
    <ion-card-content>
      <ion-button :router-link="`/editInspection/${inspection.id}`"
        >Aanpassen</ion-button
      >
      <ion-list v-if="inspection.inspections[0].damageReport" lines="none" class="ion-list">
        <ion-list-header color="primary">
          <ion-label>Schade</ion-label>
        </ion-list-header>
        <ion-item>
          <ion-label
            >Locatie: {{ inspection.inspections[0].damageReport.damLocation }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label
            >Nieuwe schade: {{ inspection.inspections[0].damageReport.damNew }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label
            >Soort schade: {{ inspection.inspections[0].damageReport.damType }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label>Datum: {{ inspection.inspections[0].damageReport.damDate }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label
            >Acute actie vereist:
            {{ inspection.inspections[0].damageReport.damAcuteAction }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label
            >Omschrijving:
            {{ inspection.inspections[0].damageReport.damDescription }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label>Foto's: {{ inspection.inspections[0].damageReport.damPhotos }}</ion-label>
        </ion-item>
      </ion-list>
      <ion-list
        v-if="inspection.inspections[0].maintenanceReport"
        lines="none"
        class="ion-list"
      >
        <ion-list-header color="primary">
          <ion-label>Achterstallig onderhoud</ion-label>
        </ion-list-header>
        <ion-item
          ><ion-label
            >Locatie:
            {{ inspection.inspections[0].maintenanceReport.maintLocation }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Soort onderhoud:
            {{ inspection.inspections[0].maintenanceReport.maintType }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Acute actie vereist:
            {{ inspection.inspections[0].maintenanceReport.maintAcuteAction }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Kostenindicatie:
            {{ inspection.inspections[0].maintenanceReport.maintCost }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Foto's: {{ inspection.inspections[0].maintenanceReport.maintPhotos }}</ion-label
          ></ion-item
        >
      </ion-list>
      <ion-list
        v-if="inspection.inspections[0].installationsReport"
        lines="none"
        class="ion-list"
      >
        <ion-list-header color="primary">
          <ion-label>Technische installaties</ion-label>
        </ion-list-header>
        <ion-item
          ><ion-label
            >Locatie:
            {{ inspection.inspections[0].installationsReport.techLocation }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Soort installatie:
            {{ inspection.inspections[0].installationsReport.techType }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Gemelde storing:
            {{ inspection.inspections[0].installationsReport.techMalfunction }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Goedgekeurd:
            {{ inspection.inspections[0].installationsReport.techApproved }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Opmerkingen:
            {{ inspection.inspections[0].installationsReport.techComments }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Foto's: {{ inspection.inspections[0].installationsReport.techPhotos }}</ion-label
          ></ion-item
        >
      </ion-list>
      <ion-list
        v-if="inspection.inspections[0].modificationsReport"
        lines="none"
        class="ion-list"
      >
        <ion-list-header color="primary">
          <ion-label>Modificaties</ion-label>
        </ion-list-header>
        <ion-item
          ><ion-label
            >Bestaande situatie:
            {{ inspection.inspections[0].modificationsReport.modiSituation }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Locatie modificatie:
            {{ inspection.inspections[0].modificationsReport.modiLocation }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Uitgevoerd door:
            {{ inspection.inspections[0].modificationsReport.modiPerformedBy }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Beschrijving modificatie:
            {{ inspection.inspections[0].modificationsReport.modiDescription }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Te ondernemen actie:
            {{ inspection.inspections[0].modificationsReport.modiAction }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Opmerkingen:
            {{ inspection.inspections[0].modificationsReport.modComments }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label
            >Foto's: {{ inspection.inspections[0].modificationsReport.modPhotos }}</ion-label
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
