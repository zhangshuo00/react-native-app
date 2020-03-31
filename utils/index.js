import queryString from 'query-string'
// 登录的接口地址
let rootUrl = 'https://www.fastmock.site/mock/36a90a21bb36021f0f1b586f80c08e1b/api';

let myFetch = {
    get(url,queryParams){
        url = rootUrl+url
        if(queryParams){
            url += "?"+queryString.stringify(queryParams);
        }
        return fetch(url).then(res=>res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,{
                method:'POST',
                headers:{
                    "Accept":'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(body)
            })
            .then(res=>res.json()) 
    }
}

export {myFetch};