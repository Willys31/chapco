'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          background: '#FAF8F3',
          fontFamily: 'system-ui, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ color: '#1E2A5E', marginBottom: '1rem' }}>Une erreur est survenue</h2>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
            {error.message}
          </p>
          <button
            onClick={() => reset()}
            style={{
              background: '#1E2A5E',
              color: '#fff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontSize: '0.875rem',
            }}
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
