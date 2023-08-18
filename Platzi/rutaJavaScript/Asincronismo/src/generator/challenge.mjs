import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi){
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

async function* fetchProducts(urlApi) {
    const products = await fetchData(`${API}/products`)
    for(let product of products) {
        const productData = await fetchData(`${API}/products/${product.id}`)
        const category = await fetchData(`${API}/categories/${productData.category.id}`)
        yield {product: productData, category};
    }
}

async function anotherFn(urlApi) {
    try {
        for await (let {product, category} of fetchProducts(urlApi)) {
            console.log(product.title);
            console.log(category.name);
        }
    } catch(error) {
        console.log(error);
    }
}

anotherFn(API)