import Link from "next/link";
import type { CSSProperties } from "react";

type ChecklistItem = {
  title: string;
  items: string[];
};

type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

const executiveSummary =
  "Este frente requiere ordenar antecedentes antes de tomar decisiones de venta. El foco inmediato es dejar una base clara de documentos, cronología y riesgos para avanzar con menor incertidumbre y con una posición más preparada ante un eventual reclamo por arriendos.";

const salePreparation: ChecklistItem = {
  title: "Preparación para venta",
  items: [
    "Posesión efectiva revisada y lista para apoyar la venta.",
    "Acuerdo entre herederos sobre criterio de venta y distribución.",
    "Estado material del departamento levantado con observaciones básicas.",
    "Pendientes previos a venta identificados antes de contactar corredores o compradores.",
  ],
};

const defensePreparation: ChecklistItem = {
  title: "Riesgo de cobro retroactivo / defensa",
  items: [
    "Posibles reclamantes y vínculo con el uso previo del inmueble.",
    "Base del eventual reclamo y período que podría discutirse.",
    "Antecedentes a favor que ayuden a contextualizar ocupación, gastos o acuerdos.",
    "Vacíos o dudas pendientes que requieren respaldo adicional.",
  ],
};

const timeline: TimelineItem[] = [
  {
    period: "Hito 1",
    title: "Inicio del ordenamiento del frente",
    description:
      "Se define que el departamento debe revisarse con foco en venta y en resguardo de antecedentes relevantes.",
  },
  {
    period: "Hito 2",
    title: "Levantamiento preliminar de documentos",
    description:
      "Se identifican papeles disponibles y se detectan brechas para construir una carpeta base más completa.",
  },
  {
    period: "Hito 3",
    title: "Revisión de riesgos asociados al uso previo",
    description:
      "Se empieza a separar información útil para una eventual defensa frente a cobros retroactivos de arriendos.",
  },
  {
    period: "Hito 4",
    title: "Definición de estrategia siguiente",
    description:
      "La próxima etapa requiere consolidar cronología, respaldos y puntos de decisión antes de avanzar en venta.",
  },
];

const availableDocuments = [
  "Certificado o antecedente base de posesión efectiva.",
  "Escritura o información principal del inmueble.",
  "Boletas, pagos o gastos asociados que puedan servir de contexto.",
  "Comunicaciones familiares o antecedentes sobre uso del departamento.",
];

const missingDocuments = [
  "Resumen consolidado del estado material actual del inmueble.",
  "Cronología unificada de uso, gastos y decisiones relevantes.",
  "Respaldo ordenado de eventuales acuerdos o conversaciones sobre arriendo.",
  "Listado final de pendientes previos a la venta con responsables.",
];

const openQuestions = [
  "¿Qué condiciones mínimas deben cumplirse antes de ofrecer el departamento en venta?",
  "¿Existe acuerdo suficiente entre herederos sobre momento, precio y forma de venta?",
  "¿Qué antecedentes respaldan mejor el uso histórico del inmueble y los gastos asociados?",
  "¿Qué vacíos documentales pueden debilitar una respuesta ante un eventual cobro retroactivo?",
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
    maxWidth: "760px",
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#4b5563",
  },
  layout: {
    display: "grid",
    gap: "20px",
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

function BulletCard({ title, items }: ChecklistItem) {
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

export default function DeptoNunoaPage() {
  return (
    <main style={pageStyles.main}>
      <div style={pageStyles.shell}>
        <header style={pageStyles.hero}>
          <p style={pageStyles.eyebrow}>Frente de herencia</p>
          <h1 style={pageStyles.title}>Depto Nunoa</h1>
          <p style={pageStyles.subtitle}>
            Frente orientado a preparar la venta del departamento y ordenar
            antecedentes para una posible defensa.
          </p>
        </header>

        <div style={pageStyles.layout}>
          <section aria-label="Resumen del frente" style={pageStyles.card}>
            <h2 style={pageStyles.cardTitle}>Resumen ejecutivo</h2>
            <p style={pageStyles.sectionText}>{executiveSummary}</p>
          </section>

          <section aria-label="Objetivos y estado" style={pageStyles.statusGrid}>
            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Objetivo principal</p>
              <p style={pageStyles.strongValue}>
                Preparar el terreno para la venta del departamento.
              </p>
            </article>

            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Objetivo complementario</p>
              <p style={pageStyles.strongValue}>
                Ordenar antecedentes para responder ante un eventual cobro
                retroactivo de arriendos.
              </p>
            </article>

            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Estado actual</p>
              <p style={pageStyles.statusValue}>En analisis</p>
            </article>
          </section>

          <section aria-label="Bloqueos y proximo paso" style={pageStyles.twoColumnGrid}>
            <article style={pageStyles.card}>
              <h2 style={pageStyles.sectionTitle}>Bloqueo principal</h2>
              <p style={pageStyles.sectionText}>
                Falta ordenar antecedentes clave para tomar decisiones de venta
                y evaluar riesgos asociados al uso previo del inmueble.
              </p>
            </article>

            <article style={pageStyles.card}>
              <h2 style={pageStyles.sectionTitle}>Proximo paso</h2>
              <p style={pageStyles.sectionText}>
                Consolidar cronologia, documentos y puntos de riesgo para
                definir estrategia de venta y defensa.
              </p>
            </article>
          </section>

          <section aria-label="Preparacion estrategica" style={pageStyles.twoColumnGrid}>
            <BulletCard {...salePreparation} />
            <BulletCard {...defensePreparation} />
          </section>

          <section aria-label="Cronologia del frente" style={pageStyles.card}>
            <h2 style={pageStyles.sectionTitle}>Cronologia</h2>
            <ol style={pageStyles.timelineList}>
              {timeline.map((item, index) => (
                <li
                  key={`${item.period}-${item.title}`}
                  style={index === 0 ? pageStyles.firstTimelineItem : pageStyles.timelineItem}
                >
                  <p style={pageStyles.timelinePeriod}>{item.period}</p>
                  <h3 style={pageStyles.timelineTitle}>{item.title}</h3>
                  <p style={pageStyles.timelineText}>{item.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-label="Documentos y preguntas" style={pageStyles.twoColumnGrid}>
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
