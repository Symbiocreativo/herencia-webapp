import Link from "next/link";
import type { CSSProperties } from "react";

type ChecklistSection = {
  title: string;
  items: string[];
};

type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

const objective = "Cobrar el depósito a plazo lo antes posible.";

const executiveSummary =
  "Este frente requiere aclarar observaciones, ordenar documentos y precisar la traba exacta del proceso para avanzar hacia el cobro.";

const currentStatus = "Pendiente de respuesta";

const mainBlocker =
  "Aún no está completamente claro qué observación, documento o validación falta para poder avanzar al cobro.";

const nextStep =
  "Consolidar requerimientos, documentos entregados y respuesta pendiente para identificar la traba exacta y definir la acción siguiente.";

const collectionStatus: ChecklistSection = {
  title: "Estado del cobro",
  items: [
    "Institución involucrada: entidad financiera por confirmar en la carpeta única del frente.",
    "Estado del requerimiento: gestión iniciada y aún pendiente de una respuesta concreta que permita mover el proceso.",
    "Respuesta pendiente: falta confirmación formal sobre observaciones, documentos o validaciones exigidas.",
    "Punto exacto del proceso: el caso se encuentra detenido en la etapa de clarificación de requisitos previos al cobro.",
  ],
};

const requirements: ChecklistSection = {
  title: "Requerimientos / observaciones",
  items: [
    "Observaciones recibidas: mensajes o indicaciones parciales que todavía no se han consolidado en una sola lista verificable.",
    "Documentos pedidos: antecedentes de identidad, respaldo sucesorio y formularios específicos por confirmar contra la última comunicación.",
    "Reparos pendientes: diferencias entre lo ya entregado y lo que la institución considera suficiente para habilitar el cobro.",
    "Validaciones externas necesarias: revisión de titularidad, vigencia de documentos o validaciones notariales según lo que exija el proceso.",
  ],
};

const availableDocuments = [
  "Copia de comunicaciones previas con la institución o canal de atención.",
  "Antecedentes base de identificación de quienes participan en la gestión.",
  "Respaldo inicial de la posesión efectiva o documentos sucesorios disponibles.",
  "Notas de seguimiento con observaciones y dudas levantadas hasta ahora.",
];

const missingDocuments = [
  "Lista consolidada y confirmada de requisitos exigidos para autorizar el cobro.",
  "Identificación exacta del documento, validación u observación que hoy mantiene el caso detenido.",
  "Copia ordenada de formularios, certificados o respaldos que la institución haya pedido en su versión más actual.",
  "Respuesta formal pendiente que confirme recepción conforme o detalle reparos específicos.",
];

const timeline: TimelineItem[] = [
  {
    period: "Hito 1",
    title: "Inicio del frente de cobro",
    description:
      "Se define que el depósito a plazo debe tratarse como un frente prioritario por su potencial de liquidación más directa.",
  },
  {
    period: "Hito 2",
    title: "Primer levantamiento de antecedentes",
    description:
      "Se reúnen documentos iniciales y se registran comunicaciones para entender qué se ha pedido y qué ya fue enviado.",
  },
  {
    period: "Hito 3",
    title: "Aparición de la traba operativa",
    description:
      "El proceso queda detenido porque no está claro si falta un documento, una validación o una corrección específica.",
  },
  {
    period: "Hito 4",
    title: "Enfoque en destrabar",
    description:
      "La etapa actual busca ordenar requerimientos, documentos y respuesta pendiente para definir la gestión siguiente con precisión.",
  },
];

const openQuestions = [
  "¿Cuál es la observación exacta que hoy impide pasar desde revisión a cobro?",
  "¿Qué documentos ya fueron entregados y cuáles siguen faltando según la versión más reciente del caso?",
  "¿La respuesta pendiente depende de revisión interna de la institución o de una validación externa adicional?",
  "¿Cuál es la siguiente acción concreta una vez identificada la traba exacta: reenviar, complementar, rectificar o escalar?",
];

const pageStyles: Record<string, CSSProperties> = {
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
    textTransform: "uppercase",
    color: "#6b7280",
  },
  title: {
    margin: "10px 0 12px",
    fontSize: "40px",
    lineHeight: 1.1,
    color: "#111827",
  },
  subtitle: {
    margin: 0,
    maxWidth: "780px",
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#4b5563",
  },
  layout: {
    display: "grid",
    gap: "20px",
  },
  summaryCard: {
    display: "grid",
    gap: "16px",
    padding: "28px",
    border: "1px solid #d6d3d1",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  },
  statusGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },
  twoColumnGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "28px",
    border: "1px solid #d6d3d1",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  },
  compactCard: {
    padding: "22px",
    border: "1px solid #d6d3d1",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  },
  cardTitle: {
    margin: 0,
    fontSize: "24px",
    lineHeight: 1.3,
    color: "#111827",
  },
  sectionTitle: {
    margin: "0 0 14px",
    fontSize: "22px",
    lineHeight: 1.3,
    color: "#111827",
  },
  sectionText: {
    margin: 0,
    fontSize: "15px",
    lineHeight: 1.65,
    color: "#374151",
  },
  label: {
    margin: "0 0 8px",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#6b7280",
  },
  strongValue: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: 1.45,
    color: "#111827",
  },
  statusValue: {
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: "999px",
    backgroundColor: "#f4efe5",
    color: "#5b4633",
    fontSize: "14px",
    fontWeight: 700,
  },
  list: {
    margin: 0,
    paddingLeft: "20px",
    display: "grid",
    gap: "10px",
    color: "#374151",
    fontSize: "15px",
    lineHeight: 1.6,
  },
  timelineList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: "18px",
  },
  timelineItem: {
    paddingTop: "18px",
    borderTop: "1px solid #ece7df",
  },
  firstTimelineItem: {
    paddingTop: 0,
    borderTop: "none",
  },
  timelinePeriod: {
    margin: "0 0 4px",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#8b7355",
  },
  timelineTitle: {
    margin: "0 0 6px",
    fontSize: "17px",
    fontWeight: 600,
    lineHeight: 1.4,
    color: "#111827",
  },
  timelineText: {
    margin: 0,
    fontSize: "15px",
    lineHeight: 1.6,
    color: "#4b5563",
  },
  footer: {
    paddingTop: "4px",
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

function BulletCard({ title, items }: ChecklistSection) {
  return (
    <section style={pageStyles.card}>
      <h2 style={pageStyles.sectionTitle}>{title}</h2>
      <ul style={pageStyles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function DepositoPlazoPage() {
  return (
    <main style={pageStyles.main}>
      <div style={pageStyles.shell}>
        <header style={pageStyles.hero}>
          <p style={pageStyles.eyebrow}>Frente de herencia</p>
          <h1 style={pageStyles.title}>Depósito a plazo</h1>
          <p style={pageStyles.subtitle}>
            Frente orientado a cobrar el depósito a plazo, entender la traba
            actual y ordenar antecedentes para destrabar el proceso.
          </p>
        </header>

        <div style={pageStyles.layout}>
          <section
            aria-label="Objetivo principal y resumen"
            style={pageStyles.summaryCard}
          >
            <div>
              <p style={pageStyles.label}>Objetivo principal</p>
              <p style={pageStyles.strongValue}>{objective}</p>
            </div>

            <div>
              <h2 style={pageStyles.cardTitle}>Resumen ejecutivo</h2>
              <p style={pageStyles.sectionText}>{executiveSummary}</p>
            </div>
          </section>

          <section
            aria-label="Estado, bloqueo y próximo paso"
            style={pageStyles.statusGrid}
          >
            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Estado actual</p>
              <p style={pageStyles.statusValue}>{currentStatus}</p>
            </article>

            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Bloqueo principal</p>
              <p style={pageStyles.strongValue}>{mainBlocker}</p>
            </article>

            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Próximo paso</p>
              <p style={pageStyles.strongValue}>{nextStep}</p>
            </article>
          </section>

          <section
            aria-label="Estado del cobro y requerimientos"
            style={pageStyles.twoColumnGrid}
          >
            <BulletCard {...collectionStatus} />
            <BulletCard {...requirements} />
          </section>

          <section
            aria-label="Documentos y preguntas pendientes"
            style={pageStyles.twoColumnGrid}
          >
            <article style={pageStyles.card}>
              <h2 style={pageStyles.sectionTitle}>Documentos</h2>

              <p style={pageStyles.label}>Disponibles</p>
              <ul style={{ ...pageStyles.list, marginBottom: "20px" }}>
                {availableDocuments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p style={pageStyles.label}>Faltantes</p>
              <ul style={pageStyles.list}>
                {missingDocuments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article style={pageStyles.card}>
              <h2 style={pageStyles.sectionTitle}>Preguntas pendientes</h2>
              <ul style={pageStyles.list}>
                {openQuestions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section aria-label="Cronología del frente" style={pageStyles.card}>
            <h2 style={pageStyles.sectionTitle}>Cronología</h2>
            <ol style={pageStyles.timelineList}>
              {timeline.map((item, index) => (
                <li
                  key={`${item.period}-${item.title}`}
                  style={
                    index === 0
                      ? pageStyles.firstTimelineItem
                      : pageStyles.timelineItem
                  }
                >
                  <p style={pageStyles.timelinePeriod}>{item.period}</p>
                  <h3 style={pageStyles.timelineTitle}>{item.title}</h3>
                  <p style={pageStyles.timelineText}>{item.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <div style={pageStyles.footer}>
            <Link href="/dashboard" style={pageStyles.link}>
              Volver al dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
