

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

  const empleado = empleados.find(e => e.id === id);

  if(!empleado) {
    return callback(`No se encontro el empleado con id ${id}`);;
  }

  callback(null, empleado);
}

const id = 1;

const getSalario = (id , callback) => {

  const salario = salartios.find(s => s.id === id)?.salario;

  if(!salario) {
    return callback(`No se encontro el salario con id ${id}`);
  }

  callback(null, salario);

}


getEmpleado(id, (err, empleado) => {

  if(err) {
    console.log('ERROR!')
    return console.log(err);
  }
  getSalario(id, (err, salario) => {
    if(err) {
      return console.log(err);
    }
    console.log(`El empleado ${empleado.nombre} tiene salario ${salario}`);
  });
});



/* getSalario(id, (err, salario) => {
  
  console.log(salario);
});
 */