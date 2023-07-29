<template>
  <base-layout page-default-back-link="/completedInspections">
    <div class="pageContent">
      <ion-spinner v-if="loading" name="bubbles"></ion-spinner>
      <ion-card>
        <ion-card-header
          ><ion-card-title>Inspectie aanpassen</ion-card-title></ion-card-header
        >
        <ion-card-subtitle>
          <h2>
            {{ loadedInspection.address[0].street }} {{ loadedInspection.address[0].housenumber }},
            {{ loadedInspection.address[0].residence }}
          </h2></ion-card-subtitle
        >
        <ion-label>Datum:</ion-label>
        <ion-input
          type="date"
          v-model="loadedInspection.inspections[0].date"
          required
        />
        <ion-card-content>
          <damageReport
            :damageReport="loadedInspection.inspections[0].damageReport"
          />
          <maintenanceReport
            :maintenanceReport="loadedInspection.inspections[0].maintenanceReport"
          />
          <installationsReport
            :installationsReport="loadedInspection.inspections[0].installationsReport"
          />
          <modificationReport
            :modificationsReport="loadedInspection.inspections[0].modificationsReport"
          />
        </ion-card-content>
        <ion-button @click="updateReport">Opslaan</ion-button>
      </ion-card>
    </div>
  </base-layout>
</template>

<script>
import damageReport from "@/components/reports/damageReport.vue";
import maintenanceReport from "@/components/reports/maintenanceReport.vue";
import installationsReport from "@/components/reports/installationsReport.vue";
import modificationReport from "@/components/reports/modificationsReport.vue";

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
  },
  data() {
    return { inspectionId: this.$route.params.id };
  },
  computed: {
    loadedInspection() {
      return this.$store.getters.inspection(parseInt(this.inspectionId));
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  methods:{
    updateReport(){
      this.$store.dispatch('updateReport');
      // this.$router.go(-2);
    }
  }
};
</script>
