import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Proyecto SEO</title>
        <meta name="description" content="Bienvenido a la página principal de mi sitio web optimizado para SEO." />
        <meta property="og:title" content="Inicio - Proyecto SEO" />
        <meta property="og:description" content="Conoce nuestra página principal y sus características." />
      </Head>
      <main>
        <h1>Página de Inicio</h1>
      </main>
    </>
  );
}
