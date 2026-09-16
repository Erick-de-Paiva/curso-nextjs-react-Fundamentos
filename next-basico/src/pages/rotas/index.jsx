import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Rotas() {
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
                <Link href="/rotas/params?id=7&nome=Erick" passHref>
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar" passHref>
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
