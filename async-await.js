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

const getEmpleado = (id) => {

  return new Promise((resolve, reject) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    if(!empleado) {
      return reject(`No se encontro el empleado con id ${id}`);
    }
    resolve(empleado);
  });
}

const getSalario = (id) => {  
  return new Promise((resolve, reject) => {
    const salario = salartios.find(s => s.id === id)?.salario;
    if(!salario) {
      return reject(`No se encontro el salario con id ${id}`);
    }
    resolve(salario);
  });
};


const getInfoUsuario = async (id) => {

  try {
    
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    
    return `El empleado ${empleado} tiene salario ${salario}`;
    
  } catch (error) {
    return error;
  }

};


const id = 10;
getInfoUsuario(id).then(info => console.log(info)).catch(err => console.log(err));