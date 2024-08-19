import { useState } from "react"
import Formulario from "./components/Formulario"
import Tabla from "./components/Tabla"
import usuarios from "./constants/usuarios"
import { v4 as uuidv4 } from 'uuid'


const InicioApp = () => {

  const [users, setUsers] = useState(usuarios)

  const [usuarioAEditar, setUsuarioAEditar] = useState(null)

  const agregarUsuario = (usuario) => {
    if (usuario.nombre && usuario.apellido && usuario.edad && usuario.colorFavorito) { // Antes de crear un nuevo Usuario, verifico si los campos del usuario no están vacíos
      usuario.id = uuidv4()
      const nuevoEstadoUsuarios = [...users, usuario]
      setUsers(nuevoEstadoUsuarios)
    }
  }  

  const eliminarUsuario = (id) => {
    const nuevoEstadoUsuarios = users.filter(user => user.id !== id)
    /*const  nuevoEstadoUsuarios = users.filter((user) => {
        if (user.id !== id) {
          return user
        } else {
          console.log(user)
        }
    })*/
    setUsers(nuevoEstadoUsuarios)
    
  }

  const editarUsuario = (usuarioEditado) => {
    const nuevoEstadoUsuarios = users.map(user => user.id === usuarioEditado.id ? usuarioEditado : user)
    setUsers(nuevoEstadoUsuarios)
  }


  return (
    <div className="container">
      <Formulario 
        agregarUsuario={agregarUsuario}
        usuarioAEditar={usuarioAEditar}
        setUsuarioAEditar={setUsuarioAEditar}
        editarUsuario={editarUsuario}
      />
      <Tabla 
        users={users} 
        eliminarUsuario={eliminarUsuario}
        setUsuarioAEditar={setUsuarioAEditar}
      />
    </div>
  )
}

export default InicioApp