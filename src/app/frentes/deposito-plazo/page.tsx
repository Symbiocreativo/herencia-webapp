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
  "Este frente busca cobrar los depósitos a plazo e instrumentos asociados de Sigfried Pohlhammer ante Banco Santander. Hoy el proceso está detenido porque el banco observó falta de antecedentes formales, incluyendo posesión efectiva, inventario protocolizado e inconsistencias de identificación del causante. La prioridad es aclarar exactamente qué falta, consolidar los documentos correctos y destrabar la revisión para avanzar al cobro.";

const currentStatus =
  "En etapa de observación y subsanación de antecedentes ante Banco Santander.";

const mainBlocker =
  "El banco no valida la solicitud porque faltan antecedentes formales del causante y de la sucesión, especialmente posesión efectiva, inventario protocolizado y corrección o validación de datos de identificación.";

const nextStep =
  "Consolidar los requerimientos exactos del banco y entregar o corregir los antecedentes pendientes, especialmente posesión efectiva válida, inventario protocolizado y datos de identificación del causante.";

const collectionStatus: ChecklistSection = {
  title: "Estado del cobro",
  items: [
    "Institución involucrada: Banco Santander.",
    "Gestión liderada por: Christian.",
    "Ejecutiva mencionada: Patricia Alejandra Carvajal Barrios.",
    "Apoyo jurídico mencionado: Velasco Vidal Abogados y abogado Luis Gumucio.",
    "Etapa actual: observaciones emitidas por el banco y proceso pendiente de subsanación.",
    "Punto actual del proceso: revisión detenida hasta aclarar antecedentes de sucesión, herederos e identificación del causante.",
  ],
};

const requirements: ChecklistSection = {
  title: "Requerimientos / observaciones",
  items: [
    "El banco indica que no puede validar correctamente antecedentes del causante por inconsistencia de RUT.",
    "No figuran antecedentes suficientes de posesión efectiva.",
    "No existe claridad suficiente sobre herederos.",
    "No aparece inventario declarado o protocolizado.",
    "Existen acreencias o instrumentos que el banco no puede confirmar todavía.",
    "Se han pedido antecedentes como posesión efectiva, inventario protocolizado y otros respaldos formales.",
  ],
};

const availableDocuments = [
  "Carpeta de antecedentes ya ingresada al banco.",
  "Documento de aclaración enviado o preparado por abogado.",
  "Respuesta u observaciones emitidas por el banco.",
];

const missingDocuments = [
  "Posesión efectiva validada.",
  "Inventario protocolizado.",
  "Corrección o validación del RUT del causante.",
  "Acreditación formal de herederos.",
  "Confirmación exacta de los instrumentos o acreencias que el banco reconoce.",
];

const timeline: TimelineItem[] = [
  {
    period: "2018",
    title: "Fallece Sigfried Pohlhammer",
    description:
      "Este hecho da origen al proceso sucesorio y a la necesidad de gestionar el cobro de depósitos a plazo e instrumentos asociados.",
  },
  {
    period: "Etapa inicial",
    title: "Se inicia gestión de cobro ante Banco Santander",
    description:
      "Comienza la revisión del caso ante el banco para intentar identificar y cobrar los instrumentos vinculados al causante.",
  },
  {
    period: "28 enero 2026",
    title: "Banco Santander emite observaciones o memo de reparo",
    description:
      "El banco informa reparos vinculados a antecedentes de sucesión, herederos, inventario e identificación del causante.",
  },
  {
    period: "Seguimiento legal",
    title: "Se realizan reuniones con abogado para revisar el caso",
    description:
      "Se revisa la estrategia de respuesta y la documentación necesaria para subsanar las observaciones emitidas por el banco.",
  },
  {
    period: "Aproximadamente 5 abril 2026",
    title: "Nueva reunión con abogado",
    description:
      "Alrededor de 10 días antes del 15 de abril de 2026 se vuelve a revisar el caso para precisar brechas documentales y definir respuesta.",
  },
  {
    period: "Aproximadamente 13 abril 2026",
    title: "Se envía documento de aclaración al banco",
    description:
      "Alrededor de 2 días antes del 15 de abril de 2026 se remite un documento de aclaración para intentar destrabar la revisión bancaria.",
  },
  {
    period: "Estado actual",
    title: "Pendiente de respuesta o validación posterior del banco",
    description:
      "El frente sigue abierto y detenido hasta que Banco Santander confirme qué parte fue aceptada y qué observaciones continúan vigentes.",
  },
];

const openQuestions = [
  "¿Existe posesión efectiva formalmente aprobada y utilizable para este cobro?",
  "¿El RUT del causante ya fue corregido o validado?",
  "¿Existe inventario protocolizado o todavía falta hacerlo?",
  "¿Qué observación exacta impide hoy avanzar al cobro?",
  "¿Qué instrumentos reconoce efectivamente el banco dentro del caso?",
  "¿Qué parte de los antecedentes ya fue aceptada y cuál sigue observada?",
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
