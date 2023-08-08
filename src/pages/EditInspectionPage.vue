<template>
  <base-layout page-default-back-link="/completedInspections">
    <div class="pageContent">
      <ion-spinner v-if="loading" name="bubbles"></ion-spinner>
      <ion-card>
        <ion-card-header
          ><ion-card-title
            >Rapportage aanpassen</ion-card-title
          ></ion-card-header
        >
        <ion-card-subtitle>
          <h2 class="primaryContrast ion-margin-start">
            {{ loadedInspection.address.street }}
            {{ loadedInspection.address.housenumber }}<br>
            {{loadedInspection.address.zipcode}}
            {{ loadedInspection.address.residence }}
          </h2></ion-card-subtitle
        >
        <ion-card-content>
          <form @submit.prevent="updateReports">
            <ion-list class="ion-list" lines="none"
              ><ion-item>
                <ion-label position="fixed">Datum:</ion-label>
                <ion-input
                  aria-label="Datum"
                  class="customInput"
                  type="date"
                  v-model="loadedInspection.inspections[0].date"
                  required
                />
              </ion-item>
            </ion-list>
            <damageReport
              :damageReport="loadedInspection.inspections[0].damageReport"
            />
            <maintenanceReport
              :maintenanceReport="
                loadedInspection.inspections[0].maintenanceReport
              "
            />
            <installationsReport
              :installationsReport="
                loadedInspection.inspections[0].installationsReport
              "
            />
            <modificationReport
              :modificationsReport="
                loadedInspection.inspections[0].modificationsReport
              "
            />
            <ion-list lines="none" class="ion-list">
              <ion-item>
                <ion-label position="fixed">Rapport afgerond:</ion-label>
                <ion-checkbox
                  aria-label="Afronden"
                  v-model="loadedInspection.completed"
                ></ion-checkbox> </ion-item
            ></ion-list>
            <ion-button class="ion-margin-bottom" type="submit" expand="block"
              >Opslaan</ion-button
            >
            <ion-button @click="cancel" expand="block">Annuleren</ion-button>
          </form>
        </ion-card-content>
      </ion-card>
    </div>
  </base-layout>
</template>

<script>
import damageReport from "@/components/inspectionReports/damageReport.vue";
import maintenanceReport from "@/components/inspectionReports/maintenanceReport.vue";
import installationsReport from "@/components/inspectionReports/installationsReport.vue";
import modificationReport from "@/components/inspectionReports/modificationsReport.vue";

import {
  IonSpinner,
  IonButton,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonLabel,
  IonInput,
  IonList,
  IonItem,
  IonCheckbox,
} from "@ionic/vue";

export default {
  components: {
    damageReport,
    installationsReport,
    maintenanceReport,
    modificationReport,
    IonSpinner,
    IonButton,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonLabel,
    IonInput,
    IonList,
    IonItem,
    IonCheckbox,
  },
  data() {
    return { inspectionId: this.$route.params.id };
  },
  computed: {
    loadedInspection() {
      return this.$store.getters.getInspection(parseInt(this.inspectionId));
    },
    loading() {
      return this.$store.getters.isLoading;
    },
  },
  methods: {
    updateReports() {
      this.$store.dispatch("updateReports");
      this.$router.go(-2);
    },
    cancel() {
      this.$store.dispatch("getInspections");
      this.$router.go(-2);
    },
  },
};
</script>
