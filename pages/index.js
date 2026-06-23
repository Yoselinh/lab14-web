import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Optimizado - Home</title>
        <meta name="description" content="Bienvenido a mi sitio web optimizado con Next.js y SEO avanzado." />
        <meta name="keywords" content="Next.js, SEO, optimización web, desarrollo web" />
        <meta property="og:title" content="Mi Sitio Optimizado - Home" />
        <meta property="og:description" content="Descubre técnicas avanzadas para mejorar tu web con Next.js." />
        <meta property="og:image" content="https://www.lavanguardia.com/files/image_449_220/uploads/2018/06/22/5fa4375bcdb95.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/" />
      </Head>

      <main style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <h1> Bienvenido a Mi Sitio Optimizado</h1>
        <p>Este sitio está construido con Next.js y optimizado para SEO.</p>

         <Image
          src="https://picsum.photos/800/400"
          width={800}
          height={400}
          alt="Imagen principal del sitio"
          priority
        />

        <nav style={{ marginTop: "2rem" }}>
          <a href="/blog" style={{ marginRight: "1rem" }}> Blog</a>
          <a href="/contacto">📬 Contacto</a>
        </nav>
      </main>
    </>
  );
}