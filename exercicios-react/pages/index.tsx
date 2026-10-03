import Head from 'next/head'

export default function Exercicios() {
  return (
    <div>
      <Head>
        <title>Exercícios React</title>
        <meta name="description" content="Módulo de exercícios básicos de React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Exercícios de React</h1>
        <p>Área central para testar os componentes básicos do curso.</p>
      </main>
    </div>
  )
}
