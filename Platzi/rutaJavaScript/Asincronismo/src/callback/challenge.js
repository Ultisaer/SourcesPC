// Importamos el módulo "xmlhttprequest" que permite realizar peticiones HTTP.
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Definimos la URL base de la API a la que vamos a hacer las solicitudes.
const API = "https://api.escuelajs.co/api/v1";

// Definimos una función llamada "fetchData" que realiza una petición HTTP GET a una URL dada.
function fetchData(urlApi, callback) {
  
  // Creamos una nueva instancia del objeto XMLHttpRequest.
  let xhttp = new XMLHttpRequest();
  
  // Inicializamos una nueva solicitud GET a la URL proporcionada, de forma asíncrona.
  xhttp.open("GET", urlApi, true);
  
  // Definimos una función que se ejecutará cada vez que el estado de la petición cambie.
  xhttp.onreadystatechange = function (event) {
    
    // Si la petición ha finalizado (readyState es 4)...
    if (xhttp.readyState === 4) {
      
      // Si la petición fue exitosa (status es 200)...
      if (xhttp.status === 200) {
        
        // Invocamos la función callback pasándole los datos recibidos de la petición.
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        
        // Si la petición no fue exitosa, creamos un nuevo error y lo pasamos a la función callback.
        const error = new Error("Error " + urlApi);
        return callback(error, null);
      }
    }
  };
  
  // Enviamos la petición.
  xhttp.send();
}

// Usamos la función "fetchData" para obtener una lista de productos de la API.
fetchData(`${API}/products`, function(error1, data1) {
  // Si hay un error, lo mostramos en consola.
  if (error1) return console.error(error1);
  
  // Usamos la función "fetchData" para obtener detalles de un producto específico.
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    // Si hay un error, lo mostramos en consola.
    if (error2) return console.error(error2);
    
    // Usamos la función "fetchData" para obtener detalles de la categoría del producto.
    fetchData(`${API}/categories/${data2?.category?.id}` , function(error3, data3){
      // Si hay un error, lo mostramos en consola.
      if (error3) return console.error(error3);
      
      // Imprimimos en consola los datos obtenidos.
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});
