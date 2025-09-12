// app/page.tsx
export default function Home() {
  return (
    <main
      style={{
        padding: '2rem',
        textAlign: 'center',
        background: '#f5f3e7',
        minHeight: '100vh',
        fontFamily: 'sans-serif'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: '#7a4b28' }}>
        ✅ Forged in the Field is LIVE!
      </h1>
      <p style={{ fontSize: '1.25rem', marginTop: '1rem', color: '#444' }}>
        If you’re seeing this page, your Vercel deployment and routing are working.
      </p>
      <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>
        Next step: Replace this placeholder with your real homepage content.
      </p>
    </main>
  );
}