import { Helmet } from "react-helmet-async";

function SEO() {
  return (
    <Helmet>
      <title>
        NovaTech Digital | Desarrollo de Software y Transformación Digital
      </title>

      <meta
        name="description"
        content="Desarrollamos software a medida, ERP, CRM, aplicaciones web y soluciones de automatización para empresas."
      />

      <meta
        name="keywords"
        content="desarrollo de software, ERP, CRM, aplicaciones web, automatización empresarial, transformación digital"
      />

      <meta
        name="author"
        content="NovaTech Digital"
      />

      <meta
        property="og:title"
        content="NovaTech Digital"
      />

      <meta
        property="og:description"
        content="Transformamos empresas mediante soluciones tecnológicas innovadoras."
      />

      <meta
        property="og:type"
        content="website"
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
    </Helmet>
  );
}

export default SEO;