const persona = {
    nombre: 'Brian',
    apellido:'Aboytes',
    edad: 25,
    direccion: {
        ciudad: 'comonfort',
        num: 12
    }
}

console.table(persona);

const persona2 = { ...persona}; //clonar un objeto a otro
persona2.nombre = 'tony';

console.table(persona2);
