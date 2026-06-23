const BASE_URL = "https://mi-proyecto-seo-wzfl.onrender.com";

// Simulación de datos dinámicos (como si vinieran de una base de datos)
const postsDinamicos = [
  { slug: "blog/introduccion-a-seo" },
  { slug: "blog/optimizacion-de-imagenes" },
  { slug: "blog/lazy-loading-en-nextjs" },
];

export default async function handler(req, res) {
  // Rutas estáticas
  const rutasEstaticas = ["/", "/blog", "/contacto"];

  // Rutas dinámicas generadas desde "base de datos"
  const rutasDinamicas = postsDinamicos.map((post) => `/${post.slug}`);

  // Combinamos todas las rutas
  const todasLasRutas = [...rutasEstaticas, ...rutasDinamicas];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${todasLasRutas
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}