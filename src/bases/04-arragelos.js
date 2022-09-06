const array = new Array(100); //solo se recomienda cuando son tamaños fijos y definidios al inicio de la app
//arreglo.push(1);



const arreglo = [1,2,3,4];

//los puntos sprek manda individualmente los elementos del arreglo anterior
const arreglo2 = [ ... arreglo ,  5] // =  [1,2,3,4,5]

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
})

console.log(arreglo3);