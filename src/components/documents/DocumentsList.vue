<template>
  <documents-list-item
    v-for="(document, index) in documents"
    :key="index"
    :document="document"
    :index="index"
  >
  </documents-list-item>
</template>

<script>
import DocumentsListItem from "@/components/documents/DocumentsListItem.vue";
import { IonList } from "@ionic/vue";

export default {
  props: ["documents"],
  components: {
    DocumentsListItem,
    IonList,
  },
};
</script>
