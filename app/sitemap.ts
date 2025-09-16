export default async function sitemap() {
  const base = "https://forgedinthefield.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/programs` },
    { url: `${base}/membership` },
    { url: `${base}/exercise-library` },
    { url: `${base}/shop` }
  ];
}