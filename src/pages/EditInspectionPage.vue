<template>
  <base-layout page-default-back-link="/completedInspections">
    <div class="pageContent">
      <ion-spinner v-if="loading" name="bubbles"></ion-spinner>
      <ion-card>
        <ion-card-header
          ><ion-card-title>Inspectie aanpassen</ion-card-title></ion-card-header
        >
        <ion-card-subtitle>
          <h2 class="ion-padding-start textColorPrimaryContrast">
            {{ loadedInspection.address.street }}
            {{ loadedInspection.address.housenumber }},
            {{ loadedInspection.address.residence }}
          </h2></ion-card-subtitle
        >
        <ion-card-content>
          <form @submit.prevent="updateReports">
            <ion-label>Datum:</ion-label>
            <ion-input
              class="custom ion-margin-start"
              type="date"
              v-model="loadedInspection.inspections[0].date"
              required
            />
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
            <ion-label position="fixed">Afronden:</ion-label>
            <ion-checkbox
              aria-label="Afronden"
              v-model="loadedInspection.inspections[0].completed"
            ></ion-checkbox>
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
      this.$router.go(-1);
    },
    cancel() {
      this.$router.go(-1);
    },
  },
};
</script>
