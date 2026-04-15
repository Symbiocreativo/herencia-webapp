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

const objective =
  "Regularizar y entender el estado completo del terreno de Isla Negra.";

const executiveSummary =
  "Terreno en Isla Negra heredado desde Roberto Pohlhammer. Antes de decidir qué hacer con el bien, es necesario entender su situación completa, especialmente deuda acumulada, contribuciones, gastos asociados y valor real actual. Hoy no existe información suficiente para tomar una decisión bien fundada.";

const currentStatus =
  "Propiedad heredada con porcentajes ya definidos, pero sin tasación actual ni claridad suficiente sobre deuda y situación administrativa.";

const mainBlocker =
  "Falta información concreta sobre deudas, contribuciones, gastos acumulados y valor real del terreno.";

const nextStep =
  "Realizar una tasación actualizada y determinar la deuda total asociada al bien.";

const assetSituation: ChecklistSection = {
  title: "Situación del bien",
  items: [
    "Propiedad heredada desde Roberto Pohlhammer.",
    "Existen porcentajes de herencia ya calculados entre herederos.",
    "Existen contribuciones y gastos comunes o gastos acumulados asociados al bien, pero el monto exacto todavía no ha sido precisado.",
    "El estado material, uso práctico y estado de ocupación del terreno no han sido mencionados claramente en la conversación base.",
  ],
};

const pendingRegularization: ChecklistSection = {
  title: "Regularización pendiente",
  items: [
    "Confirmación del rol del terreno.",
    "Determinar deuda total, valor actual del terreno y estado administrativo concreto del bien.",
    "Realizar tasación del terreno y revisión de contribuciones.",
    "Confirmar antecedentes registrales o administrativos y reunir los antecedentes faltantes sobre tasación y deuda.",
  ],
};

const futureAlternatives: ChecklistSection = {
  title: "Alternativas posibles / decisión futura",
  items: [
    "Regularizar y vender aparece como posibilidad implícita, pero no existe una decisión tomada.",
    "Mantener el bien no ha sido mencionado expresamente como decisión futura.",
    "Negociar entre partes no ha sido mencionado expresamente en la conversación base.",
    "La decisión futura dependerá de la deuda acumulada, la tasación actual del terreno, la situación administrativa y registral, y la viabilidad una vez aclarados costos y cargas.",
  ],
};

const timeline: TimelineItem[] = [
  {
    period: "2003",
    title: "Fallece Roberto",
    description:
      "Se divide el bien: 50 por ciento para Hilda y 50 por ciento entre hijos.",
  },
  {
    period: "2008",
    title: "Fallece Hilda",
    description:
      "Su 50 por ciento se reparte entre Christian, Sigfried y Erick, quedando cada uno con aproximadamente 26,6 por ciento.",
  },
  {
    period: "2018",
    title: "Fallece Sigfried",
    description:
      "Su 26,6 por ciento se reparte entre Christian, Erick, Carla y Sven.",
  },
  {
    period: "2023",
    title: "Fallece Erick",
    description:
      "Su porcentaje se divide entre Veronica y Martin.",
  },
  {
    period: "Actualidad",
    title: "Necesidad de evaluación del bien",
    description:
      "Se reconoce la necesidad de tasar, calcular deudas y evaluar la situación del bien antes de decidir qué hacer con el terreno.",
  },
];

const availableDocuments = [
  "No mencionados claramente en la conversación base.",
];

const missingDocuments = [
  "Tasación actualizada.",
  "Información precisa sobre contribuciones.",
  "Información precisa sobre deuda total.",
  "Confirmación del rol del terreno.",
];

const openQuestions = [
  "¿Cuál es la deuda total del terreno?",
  "¿Cuál es el valor real actual del terreno?",
  "¿Quién administra hoy el bien?",
  "¿Cuál es el estado actual material del terreno?",
  "¿Cuál es su situación registral y administrativa exacta?",
  "¿Qué decisión futura conviene tomar una vez aclarados deuda y valor?",
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
  summaryCard: {
    display: "grid",
    gap: "16px",
    padding: "28px",
    border: "1px solid #d6d3d1",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  },
  sectionTitle: {
    margin: "0 0 14px",
    fontSize: "22px",
    lineHeight: 1.3,
    color: "#111827",
  },
  cardTitle: {
    margin: 0,
    fontSize: "24px",
    lineHeight: 1.3,
    color: "#111827",
  },
  sectionText: {
    margin: 0,
    fontSize: "15px",
    lineHeight: 1.65,
    color: "#374151",
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

export default function IslaNegraPage() {
  return (
    <main style={pageStyles.main}>
      <div style={pageStyles.shell}>
        <header style={pageStyles.hero}>
          <p style={pageStyles.eyebrow}>Frente de herencia</p>
          <h1 style={pageStyles.title}>Terreno / Casa Isla Negra</h1>
          <p style={pageStyles.subtitle}>
            Frente orientado a comprender el escenario, ordenar regularización
            pendiente y preparar una decisión futura sobre el bien.
          </p>
        </header>

        <div style={pageStyles.layout}>
          <section aria-label="Objetivo principal y resumen" style={pageStyles.summaryCard}>
            <div>
              <p style={pageStyles.label}>Objetivo principal</p>
              <p style={pageStyles.strongValue}>{objective}</p>
            </div>

            <div>
              <h2 style={pageStyles.cardTitle}>Resumen ejecutivo</h2>
              <p style={pageStyles.sectionText}>{executiveSummary}</p>
            </div>
          </section>

          <section aria-label="Estado, bloqueo y próximo paso" style={pageStyles.statusGrid}>
            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Estado actual</p>
              <p style={pageStyles.strongValue}>{currentStatus}</p>
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

          <section aria-label="Situación estratégica del frente" style={pageStyles.twoColumnGrid}>
            <BulletCard {...assetSituation} />
            <BulletCard {...pendingRegularization} />
          </section>

          <section aria-label="Alternativas futuras" style={pageStyles.card}>
            <h2 style={pageStyles.sectionTitle}>Alternativas posibles / decisión futura</h2>
            <ul style={pageStyles.list}>
              {futureAlternatives.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-label="Cronología del frente" style={pageStyles.card}>
            <h2 style={pageStyles.sectionTitle}>Cronología</h2>
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

          <section aria-label="Documentos y preguntas pendientes" style={pageStyles.twoColumnGrid}>
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
