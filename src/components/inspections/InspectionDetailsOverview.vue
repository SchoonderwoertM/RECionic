<template>
  <ion-card>
    <ion-card-header
      ><ion-card-title>{{
        inspection.completed ? "Details inspecties" : "Uit te voeren inspecties"
      }}</ion-card-title>
      <ion-card-subtitle
        ><p>{{ inspection.inspections.date }}</p>
        <h2 class="primaryContrast">
          {{ inspection.address.street }} {{ inspection.address.housenumber
          }}<br />{{ inspection.address.zipcode }}
          {{ inspection.address.residence }}
        </h2></ion-card-subtitle
      >
    </ion-card-header>
    <ion-card-content>
      <ion-list class="ion-list" lines="none">
        <ion-item>
          <ion-icon
            class="inspectionIcons ion-margin-end"
            :icon="
              inspection.inspections[0].damageReport.damPerform
                ? checkbox
                : squareOutline
            "
          ></ion-icon>
          <ion-label>Schade opnemen</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon
            class="inspectionIcons ion-margin-end"
            :icon="
              inspection.inspections[0].maintenanceReport.maintPerform
                ? checkbox
                : squareOutline
            "
          ></ion-icon>
          <ion-label>Achterstallig onderhoud opnemen</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon
            class="inspectionIcons ion-margin-end"
            :icon="
              inspection.inspections[0].installationsReport.techPerform
                ? checkbox
                : squareOutline
            "
          ></ion-icon>
          <ion-label>Technische installaties inspecteren</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon
            class="inspectionIcons ion-margin-end"
            :icon="
              inspection.inspections[0].modificationsReport.modPerform
                ? checkbox
                : squareOutline
            "
          ></ion-icon>
          <ion-label>Modificaties inventariseren</ion-label>
        </ion-item>
      </ion-list>
      <ion-list
        v-if="inspection.inspections[0].damageReport.damPerform"
        lines="none"
        class="ion-list"
      >
        <ion-list-header>
          <ion-label>Schade</ion-label>
        </ion-list-header>
        <ion-item>
          <ion-label>Locatie: </ion-label>
          <ion-label>
            {{ inspection.inspections[0].damageReport.damLocation }}</ion-label
          >
        </ion-item>
        <ion-item class="labelIconCombi">
          <ion-label class="labelIconCombiItem">Nieuwe schade:</ion-label>
          <ion-icon
            class="inspectionIcons labelIconCombiItem"
            :icon="
              inspection.inspections[0].damageReport.damNew
                ? checkbox
                : squareOutline
            "
          ></ion-icon>
        </ion-item>
        <ion-item>
          <ion-label>Soort schade: </ion-label>
          <ion-label>
            {{ inspection.inspections[0].damageReport.damType }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label>Datum:</ion-label>
          <ion-label>{{
            inspection.inspections[0].damageReport.damDate
          }}</ion-label>
        </ion-item>
        <ion-item class="labelIconCombi">
          <ion-label class="labelIconCombiItem"
            >Acute actie vereist:
          </ion-label>
          <ion-icon
            class="inspectionIcons labelIconCombiItem"
            :icon="
              inspection.inspections[0].damageReport.damAcuteAction
                ? checkbox
                : squareOutline
            "
          ></ion-icon>
        </ion-item>
        <ion-item>
          <ion-label>Omschrijving: </ion-label>
          <ion-label>
            {{
              inspection.inspections[0].damageReport.damDescription
            }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label>Foto 1: </ion-label>
          <ion-label>
            {{ inspection.inspections[0].damageReport.damPhoto2 }}</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label>Foto 2: </ion-label>
          <ion-label>
            {{ inspection.inspections[0].damageReport.damPhoto2 }}</ion-label
          >
        </ion-item>
      </ion-list>
      <ion-list
        v-if="inspection.inspections[0].maintenanceReport.maintPerform"
        lines="none"
        class="ion-list"
      >
        <ion-list-header>
          <ion-label>Achterstallig onderhoud</ion-label>
        </ion-list-header>
        <ion-item
          ><ion-label>Locatie: </ion-label>
          <ion-label>
            {{
              inspection.inspections[0].maintenanceReport.maintLocation
            }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label>Soort onderhoud: </ion-label>
          <ion-label>
            {{
              inspection.inspections[0].maintenanceReport.maintType
            }}</ion-label
          ></ion-item
        >
        <ion-item class="labelIconCombi"
          ><ion-label class="labelIconCombiItem"
            >Acute actie vereist:
          </ion-label>
          <ion-icon
            class="inspectionIcons labelIconCombiItem"
            :icon="
              inspection.inspections[0].maintenanceReport.maintAcuteAction
                ? checkbox
                : squareOutline
            "
          ></ion-icon
        ></ion-item>
        <ion-item
          ><ion-label calss="item-text-wrap">Kostenindicatie: </ion-label
          ><ion-label>
            {{
              inspection.inspections[0].maintenanceReport.maintCost
            }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label>Foto 1: </ion-label
          ><ion-label>
            {{ inspection.inspections[0].maintenanceReport.maintPhoto1 }}
          </ion-label></ion-item
        >
        <ion-item
          ><ion-label>Foto 2: </ion-label
          ><ion-label>{{
            inspection.inspections[0].maintenanceReport.maintPhoto2
          }}</ion-label></ion-item
        >
      </ion-list>
      <ion-list
        v-if="inspection.inspections[0].installationsReport.techPerform"
        lines="none"
        class="ion-list"
      >
        <ion-list-header>
          <ion-label>Technische installaties</ion-label>
        </ion-list-header>
        <ion-item
          ><ion-label>Locatie: </ion-label
          ><ion-label>
            {{
              inspection.inspections[0].installationsReport.techLocation
            }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label>Soort installatie: </ion-label
          ><ion-label>
            {{
              inspection.inspections[0].installationsReport.techType
            }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label>Gemelde storing: </ion-label
          ><ion-label>
            {{
              inspection.inspections[0].installationsReport.techMalfunction
            }}</ion-label
          ></ion-item
        >
        <ion-item class="labelIconCombi"
          ><ion-label class="labelIconCombiItem">Goedgekeurd: </ion-label>
          <ion-icon
            class="inspectionIcons labelIconCombiItem"
            :icon="
              inspection.inspections[0].installationsReport.techApproved
                ? checkbox
                : squareOutline
            "
          ></ion-icon
        ></ion-item>
        <ion-item
          ><ion-label>Opmerkingen: </ion-label
          ><ion-label>
            {{
              inspection.inspections[0].installationsReport.techComments
            }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label>Foto1: </ion-label>
          <ion-label>
            {{
              inspection.inspections[0].installationsReport.techPhoto1
            }}</ion-label
          ></ion-item
        ><ion-item>
          <ion-label>Foto 2: </ion-label>
          <ion-label>
            {{
              inspection.inspections[0].installationsReport.techPhoto2
            }}</ion-label
          ></ion-item
        >
      </ion-list>
      <ion-list
        v-if="inspection.inspections[0].modificationsReport.modiPerform"
        lines="none"
        class="ion-list"
      >
        <ion-list-header>
          <ion-label>Modificaties</ion-label>
        </ion-list-header>
        <ion-item
          ><ion-label>Bestaande situatie: </ion-label>
          <ion-label>
            {{
              inspection.inspections[0].modificationsReport.modiSituation
            }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label>Locatie modificatie: </ion-label
          ><ion-label>
            {{
              inspection.inspections[0].modificationsReport.modiLocation
            }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label>Uitgevoerd door: </ion-label
          ><ion-label>
            {{
              inspection.inspections[0].modificationsReport.modiPerformedBy
            }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label>Beschrijving modificatie: </ion-label>
          <ion-label>
            {{
              inspection.inspections[0].modificationsReport.modiDescription
            }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label>Te ondernemen actie: </ion-label
          ><ion-label>
            {{
              inspection.inspections[0].modificationsReport.modiAction
            }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label>Opmerkingen: </ion-label
          ><ion-label>
            {{
              inspection.inspections[0].modificationsReport.modComments
            }}</ion-label
          ></ion-item
        >
        <ion-item
          ><ion-label>Foto 1: </ion-label>
          <ion-label>
            {{
              inspection.inspections[0].modificationsReport.modPhoto1
            }}</ion-label
          ></ion-item
        ><ion-item>
          <ion-label>Foto 2: </ion-label>
          <ion-label>
            {{
              inspection.inspections[0].modificationsReport.modPhoto2
            }}</ion-label
          ></ion-item
        >
      </ion-list>
      <ion-button
        class="ion-margin-bottom"
        expand="block"
        :router-link="`/inspection/edit/${inspection.id}`"
        >{{ inspection.completed ? "Aanpassen" : "Uitvoeren" }}</ion-button
      ></ion-card-content
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
  IonIcon,
  IonCheckbox,
} from "@ionic/vue";
import { checkbox, squareOutline } from "ionicons/icons";

export default {
  props: {
    inspection: { type: Object, required: true },
  },
  data() {
    return { checkbox, squareOutline };
  },
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
    IonIcon,
    IonCheckbox,
  },
};
</script>
