

const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  getNombre(){
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
}

/* console.log(deadpool.getNombre()); */

/* const { nombre, apellido, poder } = deadpool; */

/* console.log(nombre, apellido, poder); */


function imprimeHeroe({ nombre, apellido, poder }){
  /* const { nombre, apellido, poder } = heroe; */
  console.log(nombre, apellido, poder);
}

/* imprimeHeroe(deadpool); */

const heroes = ['Deadpool', 'Wolverine', 'Magneto'];

/* const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2]; */
const [ , ,h3 ] = heroes;

console.log(h3);