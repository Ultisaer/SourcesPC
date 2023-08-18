import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: "POST", 
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data)
    })
    return response;
}

const data = {
    "title": "Logitech Keyboard K90-10",
    "price": 3560,
    "description": "This keyboard is the best you can find for your gaming",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}
postData(`${API}/products`, data)
    .then( responder => responder.json())
    .then( data => console.log(data))
    .catch( error => console.log(error))
