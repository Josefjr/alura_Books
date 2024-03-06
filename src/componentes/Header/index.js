import Logo from '../../componentes/Logo';
import OpcoesHeader from '../../componentes/OpcoesHeader';
import IconesHeader from '../../componentes/IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff; /* Cor de fundo */
    display: flex; /* Adiciona display flex para colocar logo e opções em linha */
    align-items: center; /* Para centralizar verticalmente os itens */
    justify-content: center;
    padding: 0 20px; /* Adiciona margens aos lados */
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header