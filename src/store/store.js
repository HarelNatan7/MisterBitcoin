import Vuex from 'vuex'
import {contactStore} from './contact.store'

export const myStore = Vuex.createStore({
    strict: true,
    modules: {
        contactStore
    }
})