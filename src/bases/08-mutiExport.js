//finde https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

//import { heroes } from './data/heroes';
//import heroes, {owners} from './data/heroes';
import heroes, {owners} from '../data/heroes';
/*
console.log(heroes);
console.log(owners);*/
/*
const getHeoreById = (id) => {
    return heroes.find( (heore) => {
        if(heore.id === id){
            return true;
        }
    }

    )
}*/


export const getHeoreById = (id) =>  heroes.find( (heore) => heore.id === id );
//console.log(getHeoreById(3));

const getHeroeByOwner = (owner) =>  heroes.filter( (heore) => heore.owner === owner );

//console.log(getHeroeByOwner('DC'));