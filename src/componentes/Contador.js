import React, {useState} from 'react';

export default function Contador(props){
    const [numero, setNumero] = useState(0);

    const aumentar = (url) =>{
        setNumero(numero + 1);
        window.open(url, '_blank')
    };

    const disminuir = () =>{
        setNumero(numero - 1);
    };
    return(
        <div>
            <button onClick={()=>aumentar(props.urlRed)}>{props.nombreRed} {numero}</button>
        </div>
        )
};
    