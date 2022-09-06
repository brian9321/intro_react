/*const saludar = function(nombre){
    return `Hola, ${ nombre }`;
}*/

const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;

console.log(saludar3('Brian'));

const getUser = () => ({
    uid: 'ABCD',
    userName: 'usr'
});

console.log(getUser());

const getUserActivo = (nombre) => ({
    uid: 'ABCD',
    userName: nombre
});

const usrActivo = getUserActivo('Brian');
console.log(usrActivo.userName)