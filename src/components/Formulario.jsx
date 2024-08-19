import { useEffect, useState } from "react"

const Formulario = ({agregarUsuario, usuarioAEditar, setUsuarioAEditar, editarUsuario}) => {

    const formInicial = {
        id: null, 
        nombre: '', 
        apellido: '', 
        edad: '',
        colorFavorito: ''
    }

    useEffect(() => {
        usuarioAEditar ? setForm(usuarioAEditar): setForm(formInicial)
    }, [usuarioAEditar])


    
    const [form, setForm] = useState(formInicial)

    const handleChange = e => {
        
        setForm({
            ...form, 
            [e.target.name]: e.target.value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.nombre && form.apellido && form.edad && form.colorFavorito) { // Verificar si los campos del formulario no están vacíos y no me renderice en la tabla de usuarios nuevas filas con info vacia.
          if (form.id == null) {
            agregarUsuario(form)
          } else {
            editarUsuario(form)
          }
        }
        handleReset()
    }

    const handleReset = () => {
        setForm(formInicial)
        setUsuarioAEditar(null)
    }
    

  return (
    <>
        <h2>Formulario de {usuarioAEditar ? 'Edición' : 'Creación'}</h2>
        <form className="w-75 border border-danger rounded-3 p-4" onSubmit={handleSubmit}>
            <div className="mb-3">
                {/*Nombre*/}
                <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-nombre" 
                    name="nombre" 
                    placeholder="Ingrese su nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                {/*Apellido*/}
                <label htmlFor="lbl-apellido" className="form-label">Apellido</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-apellido" 
                    name="apellido" 
                    placeholder="Ingrese su apellido"
                    value={form.apellido}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                {/*Edad*/}
                <label htmlFor="lbl-edad" className="form-label">Edad</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="lbl-edad" 
                    name="edad" 
                    placeholder="Ingrese su edad"
                    value={form.edad}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                {/*Color Favorito*/}
                <label htmlFor="lbl-colorFavorito" className="form-label">Color Favorito</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-colorFavorito" 
                    name="colorFavorito" 
                    placeholder="Ingrese su color favorito"
                    value={form.colorFavorito}
                    onChange={handleChange}
                />
            </div>

            <button className="btn btn-success me-2">{ usuarioAEditar ? 'Editar' : 'Guardar'}</button>
            <button className="btn btn-danger" onClick={handleReset}>Resetear</button>   
        </form>
    </>
  )
}

export default Formulario