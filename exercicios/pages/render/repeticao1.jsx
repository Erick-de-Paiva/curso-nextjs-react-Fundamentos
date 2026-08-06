export default function Repeticao1() {
    const listaAprovados = [
        'Nome1',
        'Nome2',
        'Nome3',
        'Nome4',
        'Nome5',
        'Nome6',
        'Nome7',
    ]

    function renderizarLista() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }
    
    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}

// function renderizarLista() {
//     const itens = []
// 
//     for (let i = 0; i < listaAprovados.length; i++) {
//         itens.push(<li key={i}>{listaAprovados[i]}</li>)
//     }
//
//     return itens
//
// }