<template>
  <base-layout
    page-title="Completed inspections"
    page-default-back-link="/home"
  >
    <h1>Uitgevoerde rapportages</h1>
    <ion-card
      class="ion-padding"
      v-for="inspection in inspections"
      :key="inspection.id"
    >
      <ion-card-title
        >{{ inspection.street }} {{ inspection.housenumber }},
        {{ inspection.residence }}</ion-card-title
      >
      <ion-card-subtitle>{{ inspection.inspectionDate }}</ion-card-subtitle>
      <ion-button @click="inspection.fullReport = !inspection.fullReport">
        <ion-icon :icon="arrowDownOutline" slot="end"></ion-icon>
        Volledig rapport
      </ion-button>
      <div v-show="inspection.fullReport">
        <ion-card-content>
          <!-- <FullReport /> -->
        </ion-card-content>
      </div>
    </ion-card>
  </base-layout>
</template>

<script>
import { GetInspectionsList } from "@/services/InspectionsService";
// import { FullReport } from '@/components/FullReport.vue';
import { arrowDownOutline, arrowUpOutline } from "ionicons/icons";
import {
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonListHeader,
  IonLabel,
} from "@ionic/vue";
export default {
  name: "CompletedInspections",
  components: {
    // FullReport,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonListHeader,
    IonLabel,
  },
  setup() {
    return {
      arrowDownOutline,
      arrowUpOutline,
    };
  },
  data() {
    return {
      inspections: [],
    };
  },
  created() {
    this.GetInspections();
  },
  methods: {
    GetInspections: function () {
      GetInspectionsList().then((result) => {
        this.inspections = result;
      });
    },
    GoToInspectionDetails(inspectionId) {
      this.$router.push({
        name: "inspectionDetails",
        params: {
          id: inspectionId,
        },
      });
    },
  },
};
</script>
