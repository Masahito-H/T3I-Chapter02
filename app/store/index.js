export const state = () => ({
    isLoading: true,
    ms: {
        x: NaN,
        y: NaN
    },
    isSelectTop: true,
    isShowCanvas: true,
    isShowDetail: false,
    isCollapseContent: false
});

export const getters = {
    isLoading: (state) => state.isLoading,
    ms: (state) => state.ms,
    isSelectTop: (state) => state.isSelectTop,
    isShowCanvas: (state) => state.isShowCanvas,
    isShowDetail: (state) => state.isShowDetail,
    isCollapseContent: (state) => state.isCollapseContent
};

export const mutations = {
    setIsLoading(state, payload){
        state.isLoading = payload;
    },
    setMousePosition(state, { x, y }){
        state.ms = { x, y };
    },
    setIsTop(state, payload){
        state.isSelectTop = payload;
    },
    setIsCanvas(state, payload){
        state.isShowCanvas = payload;
    },
    setIsDetail(state, payload){
        state.isShowDetail = payload;
    },
    setIsNotContent(state, payload){
        state.isCollapseContent = payload;
    }
};

export const actions = {
    isLoading({ commit }, payload){
        commit("setIsLoading", payload);
    },
    mousePosition({ commit }, payload){
        commit("setMousePosition", payload);
    },
    isTop({ commit }, payload){
        commit("setIsTop", payload);
    },
    isCanvas({ commit }, payload){
        commit("setIsCanvas", payload);
    },
    isDetail({ commit }, payload){
        commit("setIsDetail", payload);
    },
    isNotContent({ commit }, payload){
        commit("setIsNotContent", payload);
    }
};