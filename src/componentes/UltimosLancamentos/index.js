import { livros } from './dadosUltimosLacamentos';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/Livors/livro2.jpg'
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    color: ${({ cor }) => cor || '#EB9B00'};
    font-size: ${({ tamanhoFonte }) => tamanhoFonte || '36px'};
    text-align: center;
    text-shadow: 2px 2px 4px #000000;
    margin: 0;
`

const NovoLivro = styled.img`
    width: 200px;
    margin: 0 10px 20px 10px; /* Adiciona espaçamento em torno de cada imagem */
`

const NovosLivrosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
`

function UltimosLacamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                as="h2"
                >ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <NovoLivro key={livro.id} alt='Capa dos Últimos Lançamentos' src={livro.src} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por... "
                subtitulo="ChatGPT"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
};

export default UltimosLacamentos;
