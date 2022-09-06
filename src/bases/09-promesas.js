import { getHeoreById } from './bases/08-mutiExport'


/*
promesa.then( (heroe) => {
   console.log('heroe', heroe)
})
.catch( err => console.log(err));
*/

const getHeroeByIdAsync = ( id ) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const heroe = getHeoreById(id);
         heroe ? resolve(heroe): reject('No se encontro el heroe')
      }, 2000)
   });
}

getHeroeByIdAsync(1).then( (heroe) => {
   console.log('heroe', heroe)
})
.catch( err => console.warn(err));