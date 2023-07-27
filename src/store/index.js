import { createStore } from "vuex";
import { InspectionModel } from "@/models/InspectionModel";
const url = "https://api.jsonbin.io/v3/b/648ed6fc8e4aa6225eb0471c";
const key = "$2b$10$xGY57xK/yyF20/AcOpvLJuWh3MnrWeuQZG60ykSCOe49wS5oQ0tw.";

const store = createStore({
  state: {
    loggedIn: false,
    authenticated: false,
    username: "",
    inspections: [],
    inspection: {},
    loading: false,
  },
  mutations: {
    SET_LOGGEDIN(state, loggedIn) {
      state.loggedIn = loggedIn;
    },
    SET_AUTHENTICATION(state, authenticated) {
      state.authenticated = authenticated;
    },
    SET_USERNAME(state, username) {
      state.username = username;
    },
    SET_INSPECTIONS(state, inspections) {
      state.inspections = inspections;
    },
    SET_INSPECTION(state, inspection) {
      state.inspection = inspection;
    },
    IS_LOADING(state, value) {
      state.loading = value;
    },
  },
  actions: {
    async fetchInspections({ commit }) {
      const inspections = [];
      try {
        commit("IS_LOADING", true);
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": key,
          },
        });
        const jsonData = await response.json();
        const result = jsonData.record.inspectionData;

        for (let i = 0; i < result.length; i++) {
          inspections.push(
            new InspectionModel(
              result[i].id,
              result[i].completed,
              result[i].address,
              result[i].inspections
            )
          );
        }
        commit("IS_LOADING", false);
        commit("SET_INSPECTIONS", inspections);
      } catch (error) {
        commit("IS_LOADING", false);
        console.error(error);
      }
    },
  },
  getters: {
    isUserAuthenticated(state) {
      return state.authenticated;
    },
    isUserLoggedIn(state) {
      return state.loggedIn;
    },
    getUsername(state) {
      return state.username;
    },
    inspections(state) {
      return state.inspections;
    },
    inspection(state) {
      return (inspectionId) => {
        const result = state.inspections.find(function (inspection) {
          return inspection.id == inspectionId;
        });
        return result;
      };
    },
    loading(state) {
      return state.loading;
    },
  },
});

export default store;
