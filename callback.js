

/* setTimeout(() => {
  console.log('Hola Mundo');
}, 1000);
 */

const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: 'Corhuila',
  }

  setTimeout(() => {
    callback(usuario);
  }, 1000);
}

getUsuarioById(1, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.
  toUpperCase());
});