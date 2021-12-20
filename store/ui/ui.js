import _ from 'lodash'

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
    sectionActive: 'home',
    testimonyList: [],
    testimonyDetailId: ''
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
    SET_SECTION_ACTIVE(state, id) {
        state.sectionActive = id
    },
    SET_TESTIMONY_LIST(state, list) {
        state.testimonyList = _.concat(state.testimonyList, list)
        console.log(state.testimonyList)
    },
    SET_TESTIMONY_DETAIL_ID(state, id) {
        state.testimonyDetailId = 'stid'+id
    }
}

export const actions = {
    toggleDialog({ commit }, payload) {
        // payload = {type,value}
        commit('TOGGLE_DIALOG', payload)
        if (payload.style === 'DIALOG_TESTIMONY_DETAIL') {
            this.setTestimonyDetailId({ id: payload.id })
        }
    },
    setTestimonyList({ commit }, payload) {
        commit('SET_TESTIMONY_LIST', payload.list)
    },
    setTestimonyDetailId({ commit }, payload) {
        commit('SET_TESTIMONY_DETAIL_ID', payload.id)
    },
    setSectionActive({ commit }, payload) {
        commit('SET_SECTION_ACTIVE', payload.id)
    },
}