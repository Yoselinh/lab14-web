import Head from "next/head";

export default function Blog() {
  const posts = [
    { id: 1, titulo: "Cómo mejorar el SEO con Next.js", descripcion: "Aprende las mejores técnicas de SEO." },
    { id: 2, titulo: "Optimización de imágenes en la web", descripcion: "Reduce el tamaño de tus imágenes sin perder calidad." },
    { id: 3, titulo: "Lazy Loading: qué es y cómo usarlo", descripcion: "Mejora el rendimiento cargando solo lo necesario." },
  ];

  return (
    <>
      <Head>
        <title>Blog - Mi Sitio Optimizado</title>
        <meta name="description" content="Lee los últimos artículos sobre desarrollo web, SEO y optimización." />
        <meta name="keywords" content="blog, SEO, Next.js, artículos, desarrollo web" />
        <meta property="og:title" content="Blog - Mi Sitio Optimizado" />
        <meta property="og:description" content="Artículos sobre desarrollo web y optimización SEO." />
        <meta property="og:image" content="/images/blog-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/blog" />
      </Head>

      <main style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <h1> Blog</h1>
        <p>Últimos artículos publicados:</p>

        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", marginBottom: "1rem" }}>
            <h2>{post.titulo}</h2>
            <p>{post.descripcion}</p>
          </div>
        ))}

        <a href="/">← Volver al inicio</a>
      </main>
    </>
  );
}