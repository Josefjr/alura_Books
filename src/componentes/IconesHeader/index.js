import React from 'react';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

/* Container de Estilos da li */
const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`


/* Container de Estilos da ul */
const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
            {icones.map((icone, index) => (
                <Icone key={index}><img src={icone} alt={`Ícone ${index + 1}`} /></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader;
