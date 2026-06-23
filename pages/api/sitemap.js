const BASE_URL = "https://mi-proyecto-seo-wzfl.onrender.com";

// Simulación de base de datos (como si fuera MongoDB/CMS)
const database = {
  posts: [
    { slug: "introduccion-a-seo", titulo: "Introducción a SEO" },
    { slug: "optimizacion-de-imagenes", titulo: "Optimización de imágenes" },
    { slug: "lazy-loading-en-nextjs", titulo: "Lazy Loading en Next.js" },
  ],
  categorias: [
    { slug: "desarrollo-web" },
    { slug: "rendimiento" },
    { slug: "herramientas" },
  ],
};

// Función que simula una consulta a base de datos
async function obtenerRutasDesdeBD() {
  // En un caso real esto sería: await mongoose.connect(...) y Model.find()
  const posts = database.posts.map((post) => `/blog/${post.slug}`);
  const categorias = database.categorias.map((cat) => `/categoria/${cat.slug}`);
  return [...posts, ...categorias];
}

export default async function handler(req, res) {
  // Rutas estáticas
  const rutasEstaticas = ["/", "/blog", "/contacto"];

  // Rutas dinámicas desde "base de datos"
  const rutasDinamicas = await obtenerRutasDesdeBD();

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