import react from 'react';
import '../estilos/Vehiculo.css';

function Vehiculos(props) {
    return (
        <div classname='vehiculos-contenedor'>
            <img classname='vehiculos-imagen'
            src={require(`../imagenes/${props.nombre}.jpg`)}
            alt={`../imagenes/${props.imagen}.background`}/>

            <div  classname='contenedor-texto-vehiculos'>
                {props.nombre} de {props.pais} 
            <p classname='especificacion-vehiculos'>
                {props.especificacion} es {props.tipo} 
            </p>
            <p classname='resena-vehiculos'>
                {props.resena}
            </p>
            </div>
        </div>
    )
};
export default Vehiculos;
