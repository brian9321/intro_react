const personaje = ['goku', 'Vegeta', 'Trunks'];

const [, , f1] = personaje;

console.log(f1);


const retornaArreglo = () => {
    return ['abc', 123];
}

const [letra, numero] = retornaArreglo();

console.log(letra, numero);

const usState = (valor) => {
    return [valor, () => {console.log('hola mundo')}];
}

const arr = usState('goku');

console.log(arr);

arr[1]();

const [nombre, setNombre] = usState('nom');