Claro, aqui está o README atualizado com sua assinatura e o link para o seu LinkedIn:

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