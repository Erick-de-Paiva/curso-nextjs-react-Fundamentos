import Link from 'next/link'
import { useRouter } from 'next/router'

export default function rotas() {
    const router = useRouter()

    function navegacaoComParams() {
        router.push({
            pathname: "/rotas/params",
            query: {
                id: 7,
                nome: 'Erick'
            }
        })
    }

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
            <div style={{ 
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
                }}>
                <button onClick={navegacaoComParams}>Params</button>    
                <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
            </div>
        </div>
    )
}
