import Head from "next/head";
import { useState } from "react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <>
      <Head>
        <title>Contacto - Mi Sitio Optimizado</title>
        <meta name="description" content="Ponte en contacto con nosotros para más información sobre nuestros servicios." />
        <meta name="keywords" content="contacto, soporte, información, Next.js" />
        <meta property="og:title" content="Contacto - Mi Sitio Optimizado" />
        <meta property="og:description" content="¿Tienes preguntas? Escríbenos y te responderemos pronto." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/contacto" />
      </Head>

      <main style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <h1> Contacto</h1>
        <p>Completa el formulario y nos pondremos en contacto contigo.</p>

        {enviado ? (
          <p style={{ color: "green", fontWeight: "bold" }}>¡Mensaje enviado correctamente!</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px" }}>
            <input
              type="text"
              placeholder="Tu nombre"
              required
              style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            <input
              type="email"
              placeholder="Tu correo electrónico"
              required
              style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            <textarea
              placeholder="Tu mensaje"
              rows={5}
              required
              style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            <button
              type="submit"
              style={{ padding: "0.75rem", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              Enviar mensaje
            </button>
          </form>
        )}

        <div style={{ marginTop: "2rem" }}>
          <a href="/">← Volver al inicio</a>
        </div>
      </main>
    </>
  );
}