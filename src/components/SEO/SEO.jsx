import { Helmet } from "react-helmet-async";
import schema from "../../constants/schema";

function SEO() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <title>
        NovaTech Digital | Desarrollo de Software y Automatización Empresarial
      </title>

      <meta
        name="description"
        content="Desarrollo de software a medida, ERP, CRM, aplicaciones web, automatización de procesos y consultoría tecnológica para empresas."
      />

      <meta
        name="keywords"
        content="desarrollo software colombia, software empresarial, ERP, CRM, aplicaciones web, automatización empresarial, transformación digital"
      />

      <meta name="author" content="NovaTech Digital" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href="https://novatechdigital.com" />

      <meta property="og:type" content="website" />

      <meta
        property="og:title"
        content="NovaTech Digital"
      />

      <meta
        property="og:description"
        content="Transformamos empresas mediante soluciones tecnológicas innovadoras."
      />

      <meta
        property="og:url"
        content="https://novatechdigital.com"
      />

      <meta
        property="og:image"
        content="/og-image.jpg"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content="NovaTech Digital"
      />

      <meta
        name="twitter:description"
        content="Software empresarial y automatización de procesos."
      />

      <meta
        name="twitter:image"
        content="/og-image.jpg"
      />
    </Helmet>
  );
}

export default SEO;