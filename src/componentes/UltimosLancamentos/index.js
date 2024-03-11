import { livros } from './dadosUltimosLacamentos';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    text-shadow: 2px 2px 4px #000000;
    margin: 0;
`

const NovosLivrosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 200px;
        margin-right: 50px; /* Adiciona espaçamento à direita de cada imagem */
    }
    &:hover {
        border: 1px solid white;
}
`


function UltimosLacamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map((livro, index) => (
                    <img key={livro.id || index} alt='Capa dos Últimos Lançamentos' src={livro.src} />
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
};

export default UltimosLacamentos;