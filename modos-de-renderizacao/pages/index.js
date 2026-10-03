import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Modos de Renderização</title>
        <meta name="description" content="Estudos de Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Modos de Renderização</h1>
        <p>Bem-vindo ao módulo de renderização do curso!</p>
      </main>
    </div>
  )
}
