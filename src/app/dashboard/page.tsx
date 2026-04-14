import Link from "next/link";

type DashboardCard = {
  name: string;
  status: string;
  blocker: string;
  nextStep: string;
  href: string;
};

const cards: DashboardCard[] = [
  {
    name: "Terreno / Casa Isla Negra",
    status: "En levantamiento",
    blocker: "Falta ordenar antecedentes y documentos base del frente.",
    nextStep: "Reunir lo disponible y registrar brechas pendientes.",
    href: "/frentes/isla-negra",
  },
  {
    name: "Depto Nunoa",
    status: "En analisis",
    blocker: "Sigue abierta la revision del estado legal y operativo.",
    nextStep: "Cerrar observaciones y preparar un resumen de decision.",
    href: "/frentes/depto-nunoa",
  },
  {
    name: "Deposito a plazo",
    status: "Pendiente de respuesta",
    blocker: "Se espera confirmacion externa para poder avanzar.",
    nextStep: "Hacer seguimiento y dejar registro apenas llegue la respuesta.",
    href: "/frentes/deposito-plazo",
  },
];

const pageStyles = {
  main: {
    minHeight: "100vh",
    background: "#f3f0ea",
    color: "#1f2937",
    padding: "48px 24px 64px",
  },
  shell: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  hero: {
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
  },
  subtitle: {
    margin: 0,
    maxWidth: "760px",
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#4b5563",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    minHeight: "100%",
    padding: "24px",
    border: "1px solid #d6d3d1",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  },
  cardTitle: {
    margin: "0 0 18px",
    fontSize: "24px",
    lineHeight: 1.3,
  },
  details: {
    margin: 0,
    display: "grid",
    gap: "14px",
  },
  label: {
    marginBottom: "4px",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    color: "#6b7280",
  },
  strongValue: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 600,
    color: "#111827",
  },
  textValue: {
    margin: 0,
    fontSize: "15px",
    lineHeight: 1.55,
    color: "#374151",
  },
  footer: {
    marginTop: "24px",
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 16px",
    borderRadius: "999px",
    backgroundColor: "#1f2937",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
  },
};

export default function DashboardPage() {
  return (
    <main style={pageStyles.main}>
      <div style={pageStyles.shell}>
        <header style={pageStyles.hero}>
          <p style={pageStyles.eyebrow}>Panel inicial</p>
          <h1 style={pageStyles.title}>Herencia Webapp</h1>
          <p style={pageStyles.subtitle}>
            Panel de seguimiento simple para revisar el estado, el bloqueo actual
            y el proximo paso de los tres frentes principales.
          </p>
        </header>

        <section aria-label="Frentes de herencia" style={pageStyles.grid}>
          {cards.map((card) => (
            <article key={card.href} style={pageStyles.card}>
              <div>
                <h2 style={pageStyles.cardTitle}>{card.name}</h2>

                <dl style={pageStyles.details}>
                  <div>
                    <dt style={pageStyles.label}>Estado</dt>
                    <dd style={pageStyles.strongValue}>{card.status}</dd>
                  </div>

                  <div>
                    <dt style={pageStyles.label}>Bloqueo principal</dt>
                    <dd style={pageStyles.textValue}>{card.blocker}</dd>
                  </div>

                  <div>
                    <dt style={pageStyles.label}>Proximo paso</dt>
                    <dd style={pageStyles.textValue}>{card.nextStep}</dd>
                  </div>
                </dl>
              </div>

              <div style={pageStyles.footer}>
                <Link href={card.href} style={pageStyles.link}>
                  Ver detalle
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
