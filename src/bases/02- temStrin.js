const nombre = 'Brian';
const apellido = 'Aboytes';

const nombreCompleto = `${nombre } ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'hola mundo ' + nombre;
}

console.log(`Esto es un texto ${getSaludo(nombre)}`);