import { defineStore } from 'pinia'

export const LoginState = defineStore('main', {
  state: () => {
    return {
      username:'',
      LoginJwt:'',
      AutoLogin:false,
      remenber:false
    }
  },
  getters: {},
  actions: {
    LoginSucceeded(UserId: string,LoginJwt: string,Auto: boolean,Reme: boolean){
      this.$patch({
        username: UserId,
        LoginJwt:LoginJwt,
        AutoLogin:Auto,
        remenber:Reme
      })
    }
  }
})