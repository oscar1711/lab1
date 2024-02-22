import React, {useState} from 'react';
import '../estilos/Perfil.css';
import Contador from './Contador';


function Perfil(props){
    const [numero, setNumero] = useState(0);
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='Foto de desarrollador' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
               <strong>{props.nombre}</strong> en {props.pais}
            </p>        
        <p className='cargo-perfil'>
            {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-perfil'>{props.resena} </p>
        </div>
        {/*Botones para se guir en redes sociales */}
        <Contador
           urlRed={props.linkedin}
           nombreRed="linkedin"
        />
                <Contador
           urlRed={props.youtube}
           nombreRed="Youtube"
        />
        <Contador
           urlRed={props.twitter}
           nombreRed="Twitter"
        />
        
    </div>
    );
}
export default Perfil;