import logo from '../../imagens/logo.svg';
import styled from 'styled-components';


/* centralixação e ajuste da logo */
const LogoContainer = styled.div`
    display: flex;
    align-items: center; /* Para centralizar verticalmente o logo */
    font-size: 30px;
    margin-right: 20px; /* Adiciona margem à direita */
`

/* Ajuste para logo-imagem */
const LogoImagem = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImagem src={logo} alt='logo'/>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    );
}

export default Logo;