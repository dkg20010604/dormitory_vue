import { defineStore } from 'pinia'
import { reactive } from 'vue'
type queryjson={
    FieldName: string,
    ConditionalType:string,
    FieldValue:any
}
type QuaryDital={
    queryjson:queryjson,
    tablename:string
}
export const query = defineStore('query', {
  state: () => {
    return {
      queryable:[
        reactive<QuaryDital>
      ]
    }
  },
  getters: {},
  actions: {
    
  }
})