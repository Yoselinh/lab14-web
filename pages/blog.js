import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Mi Sitio Optimizado</title>
        <meta name="description" content="Lee los últimos artículos sobre SEO y desarrollo web." />
        <meta name="keywords" content="blog, SEO, Next.js, artículos" />
        <meta property="og:title" content="Blog - Mi Sitio Optimizado" />
        <meta property="og:description" content="Artículos sobre optimización web y SEO." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>
      <h1>Blog</h1>
      <p>Bienvenido a nuestro blog de optimización web.</p>
    </>
  );
}