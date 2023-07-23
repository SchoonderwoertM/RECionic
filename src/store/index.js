import { createStore } from "vuex";
import { InspectionModel } from "@/models/InspectionModel";
const url = "https://api.jsonbin.io/v3/b/648ed6fc8e4aa6225eb0471c";
const key = "$2b$10$xGY57xK/yyF20/AcOpvLJuWh3MnrWeuQZG60ykSCOe49wS5oQ0tw.";

const store = createStore({
  state: {
      inspections: [],
      loading: false,
  },
  mutations: {
    SET_INSPECTIONS(state, inspections) {
      state.inspections = inspections;
    },
    IS_LOADING(state, value) {
      state.loading = value;
    },
  },
  actions: {
    async fetchInspections({ commit }) {
      const inspections = [];
      try {
        commit('IS_LOADING', true);
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
        commit('IS_LOADING', false);
        console.error(error);
      }
    },
  },
  getters: {
    inspections(state) {
      return state.inspections;
    },
    inspection(state) {
      return (inspectionId) => {
        return state.inspections.find(
          (inspection) => inspection.id === inspectionId
        );
      };
    },
    loading(state){
      return state.loading;
    }
  },
});

export default store;
