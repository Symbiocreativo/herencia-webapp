import Link from "next/link";
import type { CSSProperties } from "react";

type DetailItem = {
  label: string;
  value: string;
  emphasis?: "strong" | "body";
};

const detailItems: DetailItem[] = [
  {
    label: "Estado actual",
    value: "En levantamiento",
    emphasis: "strong",
  },
  {
    label: "Bloqueo principal",
    value: "Falta ordenar antecedentes y documentos base del frente.",
    emphasis: "body",
  },
  {
    label: "Próximo paso",
    value: "Reunir lo disponible y registrar brechas pendientes.",
    emphasis: "body",
  },
];

const pageStyles: Record<string, CSSProperties> = {
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
  hero: {
    marginBottom: "32px",
  },
  eyebrow: {
    margin: 0,
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
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
  card: {
    padding: "28px",
    border: "1px solid #d6d3d1",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "24px",
    paddingBottom: "20px",
    borderBottom: "1px solid #e7e5e4",
  },
  cardTitle: {
    margin: 0,
    fontSize: "24px",
    lineHeight: 1.3,
  },
  cardCopy: {
    margin: "8px 0 0",
    fontSize: "15px",
    lineHeight: 1.55,
    color: "#4b5563",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: "999px",
    backgroundColor: "#e5f0e8",
    color: "#1f5130",
    fontSize: "13px",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },
  details: {
    margin: 0,
    display: "grid",
    gap: "18px",
  },
  row: {
    paddingBottom: "18px",
    borderBottom: "1px solid #f0eeea",
  },
  label: {
    marginBottom: "6px",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#6b7280",
  },
  strongValue: {
    margin: 0,
    fontSize: "17px",
    fontWeight: 600,
    color: "#111827",
  },
  textValue: {
    margin: 0,
    fontSize: "15px",
    lineHeight: 1.6,
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

export default function IslaNegraPage() {
  return (
    <main style={pageStyles.main}>
      <div style={pageStyles.shell}>
        <header style={pageStyles.hero}>
          <p style={pageStyles.eyebrow}>Frente de herencia</p>
          <h1 style={pageStyles.title}>Terreno / Casa Isla Negra</h1>
          <p style={pageStyles.subtitle}>Detalle del frente Isla Negra.</p>
        </header>

        <section aria-label="Resumen del frente Isla Negra" style={pageStyles.card}>
          <div style={pageStyles.cardHeader}>
            <div>
              <h2 style={pageStyles.cardTitle}>Bloque principal</h2>
              <p style={pageStyles.cardCopy}>
                Vista inicial del estado del frente con foco en situación actual,
                bloqueo y siguiente acción sugerida.
              </p>
            </div>
            <span style={pageStyles.badge}>Mock inicial</span>
          </div>

          <dl style={pageStyles.details}>
            {detailItems.map((item, index) => {
              const isLastItem = index === detailItems.length - 1;

              return (
                <div
                  key={item.label}
                  style={isLastItem ? { borderBottom: "none", paddingBottom: 0 } : pageStyles.row}
                >
                  <dt style={pageStyles.label}>{item.label}</dt>
                  <dd
                    style={
                      item.emphasis === "strong"
                        ? pageStyles.strongValue
                        : pageStyles.textValue
                    }
                  >
                    {item.value}
                  </dd>
                </div>
              );
            })}
          </dl>

          <div style={pageStyles.footer}>
            <Link href="/dashboard" style={pageStyles.link}>
              Volver al dashboard
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
