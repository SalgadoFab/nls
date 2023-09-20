import Head from "next/head"

export const Meta = () => {
  return (
    <Head>
      {/* Título y descripción básica */}
      <title>No Limits Solutions</title>
      <meta name="description" content="No Limits Solutions - Proyecto de la Universidad Cenfotec 2023." />

      {/* Viewport y favicon */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Charset */}
      <meta charSet="utf-8" />

      {/* Metatags para SEO */}
      <meta name="keywords" content="No Limits Solutions, Cenfotec, Desarrollo Web, Software, Proyectos" />

      {/* Metatags para compartir en redes sociales: OpenGraph (OG) y Twitter Cards */}
      <meta property="og:title" content="No Limits Solutions " />
      <meta property="og:description" content="No Limits Solutions d. Proyecto de la Universidad Cenfotec 2023." />
      {/* <meta property="og:image" content="" /> */}
      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="No Limits Solutions " />
      <meta name="twitter:description" content="No Limits Solutions - Proyecto de la Universidad Cenfotec 2023." />
      {/* <meta name="twitter:image" content="" />  */}
      {/* <meta name="twitter:site" content="@YourTwitterHandle" />  */}
    </Head>
  )
}
