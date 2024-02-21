var datos = {
    nombre : '',
    email : '',
    mensaje : ''
};

// Selecciona los elementos del formulario.
var nombre = document.querySelector('#nombre');
var email = document.querySelector('#email');
var mensaje = document.querySelector('#mensaje');

// Se le agrega un EventListener a cada elemento HTML, que ejecuta la funcion getValue().
nombre.addEventListener('change', getValue);
email.addEventListener('change', getValue);
mensaje.addEventListener('change', getValue);
    
// Funcion que asigna el valor ingresado por el usuario a cada llave del objeto datos.
function getValue (e) {
    datos[e.target.id] = e.target.value;
}
    
// Selecciona el boton enviar del formulario
const botonEnviar = document.querySelector('#boton--enviar')

// Se le agrega un EventListener que ejecuta una peticion POST a la api users. 
botonEnviar.addEventListener('click', evento => {
    console.log(datos);

    // Constante que almacena los datos de la request.
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(datos),
        
        };

    // Peticion a la api usando fetch. 
    fetch('http://localhost:8080/users', options)
    .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(datos => {
      console.log(datos);
      }).catch(e => {
      console.log(e);
      });
    
});

