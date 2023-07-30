<template>
  <base-layout page-default-back-link="/home">
    <div class="pageContent">
      <account-settings :user="user"></account-settings>
      <preference-settings :toggleTheme="toggleTheme"></preference-settings>
    </div>
  </base-layout>
</template>

<script>
import AccountSettings from "@/components/settings/AccountSettings.vue";
import PreferenceSettings from "@/components/settings/PreferenceSettings.vue";

export default {
  name: "Settings",
  components: {
    AccountSettings,
    PreferenceSettings,
  },
  data() {
    return {
      theme: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "lightMode" ? "" : "lightMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
    },
  },
};
</script>
