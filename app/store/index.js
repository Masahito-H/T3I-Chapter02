export const state = () => ({
    isLoading: true,
    ms: {
        x: NaN,
        y: NaN
    }
});

export const getters = {
    isLoading: (state) => state.isLoading,
    ms: (state) => state.ms
};

export const mutations = {
    setIsLoading(state, payload){
        state.isLoading = payload;
    },
    setMousePosition(state, { x, y }){
        state.ms = { x, y };
    },
};

export const actions = {
    isLoading({ commit }, payload){
        commit("setIsLoading", payload);
    },
    mousePosition({ commit }, payload){
        commit("setMousePosition", payload);
    }
};