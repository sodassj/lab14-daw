import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Web de Productos</title>
        <meta name="description" content="Lee las últimas noticias y artículos sobre nuestros productos." />
        <meta property="og:title" content="Blog - Web de Productos" />
        <meta property="og:description" content="Actualizaciones e información útil sobre el catálogo." />
      </Head>
      <main>
        <h1>Blog</h1>
      </main>
    </>
  );
}
