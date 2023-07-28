import { defineStore } from 'pinia'
import {ref} from "vue";
export const userInfoStore = defineStore('userInfo', {
    persist: true,
    state: () => ({ token: ref('') }),
    getters: {
    },
    actions: {
        setToken(token: string) {
            this.token = token
        },
        getToken() {
            return this.token
        },
    },
})