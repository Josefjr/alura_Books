import React from 'react';
import './estilo.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone, index) => (
                <li className='icone' key={index}><img src={icone} alt={`Ícone ${index + 1}`} /></li>
            ))}
        </ul>
    )
}

export default IconesHeader;
