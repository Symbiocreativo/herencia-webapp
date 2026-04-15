const detail = {
  status: "En analisis",
  blocker: "Sigue abierta la revision del estado legal y operativo.",
  nextStep: "Cerrar observaciones y preparar un resumen de decision.",
};

const pageStyles = {
  main: {
    minHeight: "100vh",
    background: "#f3f0ea",
    color: "#1f2937",
    padding: "48px 24px 64px",
  },
  shell: {
    maxWidth: "960px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "32px",
  },
  eyebrow: {
    margin: 0,
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "#6b7280",
  },
  title: {
    margin: "10px 0 12px",
    fontSize: "40px",
    lineHeight: 1.1,
    color: "#111827",
  },
  description: {
    margin: 0,
    maxWidth: "680px",
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#4b5563",
  },
  card: {
    padding: "28px",
    border: "1px solid #d6d3d1",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  },
  cardTitle: {
    margin: "0 0 20px",
    fontSize: "22px",
    lineHeight: 1.3,
    color: "#111827",
  },
  details: {
    margin: 0,
    display: "grid",
    gap: "18px",
  },
  detailGroup: {
    paddingTop: "18px",
    borderTop: "1px solid #e7e5e4",
  },
  firstDetailGroup: {
    paddingTop: 0,
    borderTop: "none",
  },
  label: {
    marginBottom: "6px",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    color: "#6b7280",
  },
  strongValue: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
    color: "#111827",
  },
  textValue: {
    margin: 0,
    fontSize: "15px",
    lineHeight: 1.6,
    color: "#374151",
  },
};

export default function DeptoNunoaPage() {
  return (
    <main style={pageStyles.main}>
      <div style={pageStyles.shell}>
        <header style={pageStyles.header}>
          <p style={pageStyles.eyebrow}>Frente de herencia</p>
          <h1 style={pageStyles.title}>Depto Nunoa</h1>
          <p style={pageStyles.description}>
            Detalle del frente Depto Nunoa.
          </p>
        </header>

        <section aria-label="Resumen del frente" style={pageStyles.card}>
          <h2 style={pageStyles.cardTitle}>Resumen actual</h2>

          <dl style={pageStyles.details}>
            <div style={pageStyles.firstDetailGroup}>
              <dt style={pageStyles.label}>Estado actual</dt>
              <dd style={pageStyles.strongValue}>{detail.status}</dd>
            </div>

            <div style={pageStyles.detailGroup}>
              <dt style={pageStyles.label}>Bloqueo principal</dt>
              <dd style={pageStyles.textValue}>{detail.blocker}</dd>
            </div>

            <div style={pageStyles.detailGroup}>
              <dt style={pageStyles.label}>Proximo paso</dt>
              <dd style={pageStyles.textValue}>{detail.nextStep}</dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}
