import { Fragment, useState } from "react";
import shortid from "shortid";
//import PropTypes from 'prop-types';

 

const Formulario = ({crearCita}) => {
  
  //Crear State de Citas
  const [cita, actualizarCita] = useState({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''

  });
  const [ error, actualizarError ] = useState(false)



  //Funciona que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = e => {
    actualizarCita({
        ...cita,
        [e.target.name]: e.target.value
    })

  }

  //Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;
   
  // cuando el usuario presiona agregar cita
  const submitCita = e => {
      e.preventDefault();

      
      //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
         actualizarError(true);
         return
      }
      
      //Elimina el mensaje previo
      actualizarError(false);


    

      //Asignar un ID
      cita.id = shortid();
      console.log(cita);

      //Crear la cita
      crearCita(cita);

      //Reiniciar el form
      actualizarCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

      })
  }

    return (
    <Fragment>
      <h2>Crear Cita</h2>

      { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

      <form
           onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la Mascota"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" onChange={actualizarState} value={fecha}/>

        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" onChange={actualizarState} value={hora}/>

        <label>Sìntomas</label>
        <textarea className="u-full-width" name="sintomas" placeholder="Describa el sintoma" onChange={actualizarState} value={sintomas}></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

//Formulario.PropTypes = {
  //crearCita: PropTypes.
//}

export default Formulario;
