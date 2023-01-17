import { defineStore } from 'pinia'
import * as signalR from '@microsoft/signalr'
export const RouteLink = defineStore('routlink', {
    state: () => {
        return {
            route: '',
            hub: new signalR.HubConnectionBuilder().withUrl('http://localhost:4641/chathub').build()
        }
    },
    getters: {
    },
    actions: {
        begenconn() {
            this.hub=new signalR.HubConnectionBuilder().withUrl('http://localhost:4641/chathub',{
                accessTokenFactory:()=>'Bearer ' + localStorage.getItem('LJ') as string
            }).build();
        },
        starconn(methods:string[],func: ((...args: any[]) => any)[]){
            let i=0;
            methods.forEach(method => {
                this.hub.on(method,func[i]);
                i++;
            });
            this.hub.start().then(()=>[
                console.log('成功连接')
            ])
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
)