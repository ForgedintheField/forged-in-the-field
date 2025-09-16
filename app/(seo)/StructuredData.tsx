export default function StructuredData(){
  const json = {
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"Forged in the Field",
    "url":"https://forgedinthefield.com",
    "logo":"https://forgedinthefield.com/icon.png"
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />;
}