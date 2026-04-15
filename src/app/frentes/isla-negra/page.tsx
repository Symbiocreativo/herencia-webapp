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
  "Comprender el escenario completo, ordenar la regularización pendiente y definir qué hacer con el bien.";

const executiveSummary =
  "Este frente requiere ordenar antecedentes del inmueble, situación actual, documentos pendientes y puntos de regularización antes de definir una estrategia futura clara.";

const currentStatus = "En levantamiento";

const mainBlocker =
  "Falta consolidar antecedentes del bien, documentos clave y estado de regularización para definir el camino a seguir.";

const nextStep =
  "Ordenar cronología, documentos y pendientes de regularización para preparar una decisión futura sobre el inmueble.";

const assetSituation: ChecklistSection = {
  title: "Situación del bien",
  items: [
    "Estado general del inmueble en revisión para distinguir condición material, mantenciones pendientes y nivel de uso actual.",
    "Situación registral por confirmar para validar titularidad, inscripción vigente y antecedentes base del bien.",
    "Gastos, contribuciones y costos asociados por revisar para entender carga económica real del inmueble.",
    "Uso actual o situación práctica del bien por levantar para saber quién lo ocupa, cómo se usa y qué restricciones existen.",
  ],
};

const pendingRegularization: ChecklistSection = {
  title: "Regularización pendiente",
  items: [
    "Roles y antecedentes esenciales por confirmar para consolidar una ficha única del inmueble.",
    "Documentos faltantes que hoy impiden cerrar una visión completa del frente.",
    "Situación legal o administrativa pendiente que debe aclararse antes de proyectar cualquier decisión.",
    "Puntos que requieren validación externa con Conservador, municipalidad, SII u otros actores relevantes.",
  ],
};

const futureAlternatives: ChecklistSection = {
  title: "Alternativas posibles / decisión futura",
  items: [
    "Mantener el bien si su uso, costos y viabilidad familiar justifican conservarlo.",
    "Regularizar y vender una vez que la carpeta del inmueble permita avanzar con menos incertidumbre.",
    "Negociar entre partes si la mejor salida depende de acuerdos internos más que de una venta inmediata.",
    "Definir estrategia según costos, viabilidad, tiempos de regularización y nivel de acuerdo entre herederos.",
  ],
};

const timeline: TimelineItem[] = [
  {
    period: "Hito 1",
    title: "Inicio del levantamiento del frente",
    description:
      "Se define que Isla Negra debe revisarse primero desde el escenario real del bien antes de tomar decisiones patrimoniales.",
  },
  {
    period: "Hito 2",
    title: "Identificación preliminar de antecedentes",
    description:
      "Se empiezan a reunir datos del inmueble, documentos disponibles y brechas de información relevantes para regularización.",
  },
  {
    period: "Hito 3",
    title: "Ordenamiento de pendientes de regularización",
    description:
      "Se separan los puntos registrales, administrativos y documentales que requieren confirmación o gestión externa.",
  },
  {
    period: "Hito 4",
    title: "Preparación de base para decisión futura",
    description:
      "La siguiente etapa busca dejar una visión consolidada del bien para evaluar mantener, regularizar y vender, o negociar otra salida.",
  },
];

const availableDocuments = [
  "Copia simple de antecedentes base del inmueble para iniciar el levantamiento.",
  "Información preliminar de ubicación, uso y contexto familiar del bien.",
  "Notas iniciales sobre situación práctica del inmueble y temas por confirmar.",
  "Registro de observaciones abiertas para orientar la regularización pendiente.",
];

const missingDocuments = [
  "Inscripción vigente y respaldo registral consolidado del inmueble.",
  "Certificados, roles y antecedentes tributarios actualizados para revisión completa.",
  "Carpeta ordenada de pagos, contribuciones, gastos y obligaciones asociadas.",
  "Resumen formal del estado de regularización con vacíos, riesgos y validaciones externas pendientes.",
];

const openQuestions = [
  "¿Cuál es la situación registral exacta del inmueble y qué respaldo falta para confirmarla?",
  "¿Qué gastos, deudas, contribuciones o costos deben aclararse antes de decidir sobre el bien?",
  "¿Qué nivel de regularización es necesario para mantener, vender o negociar el inmueble con seguridad?",
  "¿Qué alternativa parece más razonable una vez que se consoliden documentos, costos y acuerdos entre partes?",
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
