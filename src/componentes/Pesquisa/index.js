import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
    position: relative; /* Adiciona posição relativa */
    z-index: 1; /* Define uma ordem de empilhamento acima do conteúdo abaixo */
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  
    return (
      <PesquisaContainer>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu Livro em nossa estante.</Subtitulo>
        <Input
          placeholder="Escreva sua próxima Leitura"
          onBlur={(evento) => {
            const textoDigitado = evento.target.value;
            const resultadoPesquisa = livros.filter((livro) =>
              livro.nome.includes(textoDigitado)
            );
            setLivrosPesquisados(resultadoPesquisa);
          }}
        />
        {livrosPesquisados.map((livro) => (
          <Resultado key={livro.id}> {/* Adiciona a prop `key` com o ID do livro */}
            <p>{livro.nome}</p>
            <img src={livro.src} alt='Capa do Livro'/>
          </Resultado>
        ))}
      </PesquisaContainer>
    );
}

export default Pesquisa
