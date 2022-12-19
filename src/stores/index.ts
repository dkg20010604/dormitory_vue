import { defineStore } from 'pinia'

export const LoginState = defineStore('main', {
  state: () => {
    return {
      LoginId:'',
      LoginJwt:'',
      AutoLogin:false,
      remenber:false
    }
  },
  getters: {},
  actions: {
    LoginSucceeded(UserId: string,LoginJwt: string,Auto: boolean,Reme: boolean){
      this.$patch({
        LoginId: UserId,
        LoginJwt:LoginJwt,
        AutoLogin:Auto,
        remenber:Reme
      })
    }
  }
})