const empleados = [
  {
  id: 1,
  nombre: 'Corhuila',
  },
  {
  id: 2,
  nombre: 'Juan',
  },
  {
    id: 3,
    nombre: 'Pepe',
  },  
]

const salartios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 2000,
  },
];

const getEmpleado = (id, callback) => {

  return new Promise((resolve, reject) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    if(!empleado) {
      return reject(`No se encontro el empleado con id ${id}`);
    }
    resolve(empleado);
  });
}

const id = 1;

const getSalario = (id) => {

  return new Promise((resolve, reject) => {
    const salario = salartios.find(s => s.id === id)?.salario;
    if(!salario) {
      return reject(`No se encontro el salario con id ${id}`);
    }
    resolve(salario);
  });
};

/* getEmpleado(id).then((empleado) => {
  console.log(empleado);
}).catch((err) => {
  console.log(err);
});

getSalario(id).then((salario) => {
  console.log(salario);
}).catch((err) => {
  console.log(err);
});
 */

/* getEmpleado(3).then((empleado) => {
  return getSalario(3).then( salario => {
    console.log(`El empleado ${empleado} tiene salario ${salario}`);
  }).catch(err => console.log(err));
}); */

let nombre;

getEmpleado(id).then((empleado) => {
  nombre = empleado;
  return getSalario(id);
}).then(salartio => console.log(`El empleado ${nombre} tiene salario ${salartio}`)).catch(err => console.log(err));