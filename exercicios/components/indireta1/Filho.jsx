export default function Filho(props) {
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com o Pai #01</button>
            <button onClick={() => props.funcao('Teste 1', 'Teste 2', 'Teste 3')}>Falar com o Pai #02</button>
        </div>
    )
}