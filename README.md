# AluraBook

Este repositório contém o projeto final do curso de React, onde foram abordados os seguintes tópicos:

## Objetivos do Curso

- Compreender os conhecimentos básicos teóricos e práticos de React.
- Aplicar a manutenção numa aplicação React.
- Criar um website próprio usando React.
- Colocar em prática as ferramentas mais utilizadas pelo mercado de trabalho front-end.


O projeto final do curso consiste em um website completo construído com React, aplicando todos os conhecimentos adquiridos ao longo das aulas. Este projeto demonstra a minha capacidade como aluno em criar aplicações web modernas e interativas utilizando React.

```markdown
# Card de Recomendação

Este é um componente React para exibir um card de recomendação de livro.

## Como usar

1. Instale as dependências do projeto:
```bash
npm install styled-components
```

2. Importe o componente `CardRecomenda` onde deseja usá-lo:
```javascript
import CardRecomenda from './caminho/para/CardRecomenda';
```

3. Use o componente passando os dados necessários como props:
```javascript
<CardRecomenda
    titulo="Título do Livro"
    subtitulo="Subtítulo do Livro"
    descricao="Descrição do Livro"
    img="caminho/para/imagem.jpg"
/>
```

## Estilos Personalizados

O componente `CardRecomenda` utiliza a biblioteca styled-components para estilização. Você pode personalizar os estilos editando os componentes `Card`, `Botao`, `Descricao`, `Subtitulo`, `ImgLivro` e `StyledTitulo` conforme necessário.

## Exemplo

```jsx
import CardRecomenda from './caminho/para/CardRecomenda';

function App() {
    return (
        <div>
            <CardRecomenda
                titulo="A Sutil Arte de Ligar o F*da-se"
                subtitulo="Um guia para uma vida melhor"
                descricao="Um livro revolucionário e desafiador, que mostra como a busca incessante por felicidade pode nos fazer infelizes."
                img="https://example.com/capa.jpg"
            />
        </div>
    );
}

export default App;
```

## Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Abra uma issue para discutir suas ideias ou envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido por José Luis Jr 🥷

Para mais informações, visite [meu LinkedIn](https://www.linkedin.com/in/josé-luís-da-silva-junior-5b0860182).
```

Certifique-se de substituir `./caminho/para/CardRecomenda` pelo caminho real para o seu componente `CardRecomenda` e ajustar as outras informações conforme necessário.