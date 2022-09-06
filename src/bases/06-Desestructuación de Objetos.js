const person = {
    nombre: 'brian',
    edad: 45,
    clave: '1234',
    rango: 'soldado'
}

const {nombre, edad, clave } = person;

//console.log(nombre)


//si hay data dentro del objeto la deja sino asigna el predefinido
const userContext = ({clave, nombre, edad, rango = 'capitan' }) => {
    //console.log(nombre, edad, rango)
    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 14.1234,
            lng: -14.432
        }
    }
} 

const {nombreClave, años, latlng } = userContext(person);

const {lat, lng} = latlng;


console.log(nombreClave);

console.log(lat);