import { createStore } from "vuex";
import { InspectionModel } from "@/models/InspectionModel";
const url = "https://api.jsonbin.io/v3/b/648ed6fc8e4aa6225eb0471c";
const key = "$2b$10$xGY57xK/yyF20/AcOpvLJuWh3MnrWeuQZG60ykSCOe49wS5oQ0tw.";

const store = createStore({
  state: {
    loggedIn: false,
    authenticated: false,
    user: {},
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
    SET_USER(state, user) {
      state.user = user;
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
    UPDATE_REPORT(state, updatedReport) {
      state.inspections = state.inspections.map((inspection) =>
        inspection.id === updatedReport.id ? updatedReport : inspection
      );
    },
  },
  actions: {
    async getInspections({ commit }) {
      const inspections = [];
      try {
        commit("IS_LOADING", true);
        const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": key,
        },
      };
        const response = await fetch(url, options);
        const data = await response.json();
        const result = data.record;

        for (let i = 0; i < result.length; i++) {
          inspections.push(
            new InspectionModel(
              result[i].id,
              result[i].address,
              result[i].inspections,
              result[i].completed,
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
    async updateReport({ commit, state }) {
      commit("IS_LOADING", true);
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": key,
        },
        body: JSON.stringify(state.inspections),
      };
      await fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          }
          return response.json();
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
      commit("UPDATE_REPORT", state.inspections);
      commit("IS_LOADING", false);
    },
  },
  getters: {
    isUserAuthenticated(state) {
      return state.authenticated;
    },
    isUserLoggedIn(state) {
      return state.loggedIn;
    },
    getUser(state) {
      return state.user;
    },
    getInspections(state) {
      return state.inspections;
    },
    getInspection(state) {
      return (inspectionId) => {
        const result = state.inspections.find(function (inspection) {
          return inspection.id == inspectionId;
        });
        return result;
      };
    },
    isLoading(state) {
      return state.loading;
    },
  },
});

export default store;
