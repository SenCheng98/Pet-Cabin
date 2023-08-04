import { useLocalStorage } from "../util/useLocalStorage";


function ajaxService(url, reqMethod, reqBody, jwt){

    const fetchData = {

        headers: {
        "Content-Type" : "application/json",
        },
        method: reqMethod,
    };

    if(jwt){
        fetchData.headers.Authorization = `Bearer ${jwt}`;
    }
    if(reqBody){
        fetchData.body = JSON.stringify(reqBody);
    }

    return fetch(url,fetchData).then((response) => {
        if(response.status === 200){
            console.log(response);
            return response.json();
        }
    });

}

export default ajaxService;