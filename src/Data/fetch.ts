export const getdata = {
    get: async (url: string, data?: object | undefined) => {
        if (data) {
            url = baseurl + url + converToUrl(data);
        }
        const res = (await fetch(url, {
            headers: {
                'accept': 'text/plain',
                'Authorization': 'Bearer ' + localStorage.getItem('LJ')
            }
        }))
        if (res.status >= 200 && res.status < 500) {
            return res;
        }
        else {
            return res.statusText
        }
    },
    post: async (url: string, data?: object | File) => {
        return (await fetch(baseurl + url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('LJ'),
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })).json()
    }
}
const converToUrl = (requestParams: object) => {
    let params: string[] = [];
    Object.entries(requestParams).forEach(([key, value]) => {
        let param = key + '=' + value;
        params.push(param);
    });
    return '?' + params.join('&');
}
const baseurl = 'http://localhost:4641/api/'