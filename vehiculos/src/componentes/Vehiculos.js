import react from 'react';
import '../estilos/Vehiculo.css';

function Vehiculos(props) {
    return (
        <div classname='contenedor-vehiculos'>
            <img
            classname='imagen-vehiculo'
            src={require('../imagenes/avion.jpg')}
            //src={require('../imagenes/${props.nombre}.png')}
            alt='Foto Auto'
            />

            <div  classname='contenedor-texto-vehiculo'>
                {props.nombre} en {props.pais} 
            <p classname='especificacion-vehiculo'>
                {props.especificacion} en {props.tipo} 
            </p>
            <p classname='resena-vehiculo'>
                {props.resena}
            </p>
            </div>
        </div>
    )
};
export default Vehiculos;
