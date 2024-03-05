import './estilo.css';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']


function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map((texto) => (
                <li key={texto} className='opcao'><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default OpcoesHeader