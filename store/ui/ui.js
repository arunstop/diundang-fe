export const state = () => ({
    dialogList: []
})

export const getters = {
    onDialogMode:(state)=>()=>{
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
    }
}

export const actions = {
    toggleDialog({ commit }, payload) {
        // payload = {type,value}
        commit('TOGGLE_DIALOG', payload)
    }
}