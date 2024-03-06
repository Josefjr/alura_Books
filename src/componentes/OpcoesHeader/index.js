import styled from 'styled-components';


const OpcoesContainer = styled.ul`
    display: flex; /* Para colocar as opções em linha */
`

/* todo conjunto de estilo para as opçoes do header */
const OpcaoContainer = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']


function OpcoesHeader() {
    return (
        <OpcoesContainer>
            {textoOpcoes.map((texto) => (
                <OpcaoContainer key={texto} className='opcao'><p>{texto}</p></OpcaoContainer>
            ))}
        </OpcoesContainer>
    )
}

export default OpcoesHeader