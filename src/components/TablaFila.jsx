import { notificacionSweet } from "./TablaFila.service"

const TablaFila = ({user, eliminarUsuario, setUsuarioAEditar}) => {

  const  handleEliminar = () => {

    //! Utilizando la manera mas rustica con un confirm.

    /*let isDelete = confirm(`Estas seguro de que quieres eliminar el usuario con el nombre: ${user.nombre}`)

    if (isDelete) {
      eliminarUsuario(user.id)
    } else {
      return
    }*/


    //! Utilizando la libreria SweetAlert2 con la logica directa dentro del componente TablaFila

    /*Swal.fire({
      title: `¿Estás seguro de querer borrar el usuario con el nombre y apellido: ${user.nombre} ${user.apellido}?`,
      text: "No podrás reversar o cambiar lo que hagas.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, por favor borrarlo, estoy seguro!",
      cancelButtonText: "Ni se te ocurra borrarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarUsuario(user.id)
        Swal.fire({
          title: "Borrado!",
          text: "El usuario se borró satisfactoriamente.",
          icon: "success"
        })
      }
    })*/


    //? Utilizo la libreria, pero extraigo su logica y la meto en una funcion, aqui llamo a dicha funcion que esta en el archivo TablaFila.service.js

    notificacionSweet(user.nombre, user.apellido, () => {
      eliminarUsuario(user.id)
    })
  
  }


  const handleEditar = (u) => {  //Aqui le puedo llamar como yo quiera a los parametros de la funcion, porque realmente me va a estar recibiendo el "user"
    setUsuarioAEditar(u) // Me recibe "user" porque yo le dije en la linea 62 cuando le paso el evento onClik al boton Editar, que me use el parametro
  } // "user" en la Callback a handleEditar.

  /* en la Linea 62, cuando hago la callback a la funcion handleEditar, le paso (user) como parametro de la funcion.*/

  return (
    <tr>
        <td scope="row">{user.nombre}</td>
        <td>{user.apellido}</td>
        <td>{user.edad}</td>
        <td>
            <button className="btn btn-warning me-2" onClick={() => handleEditar(user)}>Editar</button> 
            <button className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
        </td>
    </tr>
  )
}

export default TablaFila