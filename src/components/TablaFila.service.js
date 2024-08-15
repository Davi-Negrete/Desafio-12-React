import Swal from "sweetalert2";

export const notificacionSweet = (nombre, apellido, callback) => {
    Swal.fire({
        title: `¿Estás seguro de querer borrar el usuario con el nombre y apellido: ${nombre} ${apellido}?`,
        text: "No podrás reversar o cambiar lo que hagas.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, por favor borrarlo, estoy seguro!",
        cancelButtonText: "Ni se te ocurra borrarlo!"
      }).then((result) => {
        if (result.isConfirmed) {
          callback()
          Swal.fire({
            title: "Borrado!",
            text: "El usuario se borró satisfactoriamente.",
            icon: "success"
          })
        }
      })
}