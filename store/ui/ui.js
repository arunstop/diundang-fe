export const state = () => ({
    dialogList: [],
    sectionMenuList: [
        { target: 'home', label: 'Home', icon: 'mdi-home' },
        { target: 'service', label: 'Service', icon: 'mdi-hand-extended' },
        { target: 'testimony', label: 'Testimony', icon: 'mdi-forum' },
        { target: 'pricing', label: 'Pricing', icon: 'mdi-cash-multiple' },
        { target: 'portofolio', label: 'Portofolio', icon: 'mdi-text-box-multiple' },
        { target: 'contact', label: 'Contact', icon: 'mdi-phone' },
    ],
    sectionActive: 'home'
})

export const getters = {
    onDialogMode: (state) => () => {
        return !!state.dialogList.length
    }
}

export const mutations = {
    TOGGLE_DIALOG(state, payload) {
        // IF payload.value is false
        // then remove it from the list
        if (payload.value === false) {
            state.dialogList = state.dialogList.filter(e => e.type !== payload.type)
            return
        }
        state.dialogList.push(payload)
    },
    SET_SECTION_ACTIVE(state,id){
        state.sectionActive = id
    }
}

export const actions = {
    toggleDialog({ commit }, payload) {
        // payload = {type,value}
        commit('TOGGLE_DIALOG', payload)
    },
    setSectionActive({commit},payload){
        commit('SET_SECTION_ACTIVE', payload.id)
    }
}