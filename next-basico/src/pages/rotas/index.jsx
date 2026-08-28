import Link from 'next/link'

export default function rotas() {
    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?id=7&nome=Erick">
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar">
                    <li>Buscar</li>
                </Link>
            </ul>
        </div>
    )
}
