import Link from "next/link";
import type { CSSProperties } from "react";

type GroupedList = {
  heading: string;
  items: string[];
};

type DetailCard = {
  title: string;
  groups: GroupedList[];
};

type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

const executiveSummary =
  "Departamento ubicado en Nunoa, perteneciente a la herencia de Sigfried. El objetivo principal es venderlo, pero antes hay que ordenar la situacion legal y alinear a los herederos. En paralelo, conviene preparar antecedentes para responder ante un eventual cobro retroactivo por uso del inmueble, ya que el uso ha sido informal y sin acuerdo escrito.";

const salePreparation: DetailCard = {
  title: "Preparacion para venta",
  groups: [
    {
      heading: "Antecedentes a favor",
      items: [
        "Departamento en excelente estado.",
        "Gastos comunes al dia.",
        "Contribuciones pagadas por tu padre.",
        "Uso conocido por los herederos.",
        "No ha existido oposicion expresa al uso.",
      ],
    },
    {
      heading: "Pendientes previos a venta",
      items: [
        "Confirmar situacion legal exacta del inmueble.",
        "Confirmar si esta dentro de la posesion efectiva.",
        "Alinear a los herederos respecto de la venta.",
      ],
    },
    {
      heading: "Obstaculos para vender",
      items: [
        "Multiples herederos.",
        "Falta de acuerdos formales.",
        "Posible aparicion de conflicto por uso o cobros.",
      ],
    },
  ],
};

const defensePreparation: DetailCard = {
  title: "Riesgo de cobro retroactivo / defensa",
  groups: [
    {
      heading: "Quien podria reclamar",
      items: ["Cualquier heredero."],
    },
    {
      heading: "Base posible del reclamo",
      items: ["Uso exclusivo del inmueble por un heredero."],
    },
    {
      heading: "Antecedentes a favor de la defensa",
      items: [
        "Uso conocido por todos.",
        "No hubo oposicion.",
        "No hubo acuerdo de arriendo.",
        "Hubo mantencion del inmueble.",
        "Hubo pago de gastos directos o indirectos.",
        "Existe disposicion a dejar el inmueble.",
      ],
    },
    {
      heading: "Puntos debiles o vacios",
      items: [
        "No existe respaldo formal del acuerdo.",
        "No hay documento que regule el uso.",
        "No esta clara la situacion legal completa del bien.",
      ],
    },
  ],
};

const timeline: TimelineItem[] = [
  {
    period: "2018",
    title: "Fallece Sigfried",
    description:
      "Se abre el contexto sucesorio del que depende la situacion actual del departamento de Nunoa.",
  },
  {
    period: "Hace aproximadamente 7 anos",
    title: "Comienzas a vivir en el departamento",
    description:
      "El uso del inmueble se inicia de manera informal y sin acuerdo escrito entre herederos.",
  },
  {
    period: "Durante aproximadamente 3 anos",
    title: "Tu padre tambien vive contigo",
    description:
      "La ocupacion del departamento incluye convivencia con tu padre durante parte relevante del periodo.",
  },
  {
    period: "Durante todo el periodo",
    title: "Uso conocido por herederos",
    description:
      "El uso ha sido conocido por los herederos, sin acuerdos formales, sin cobros y sin oposicion expresa.",
  },
  {
    period: "Actualidad",
    title: "Intencion de venta sin acuerdos definidos",
    description:
      "El departamento sigue en uso y existe intencion de venta, pero aun no hay acuerdos claros entre herederos.",
  },
];

const availableDocuments = [
  "No mencionados claramente en la conversacion base.",
];

const missingDocuments = [
  "Documento de posesion efectiva.",
  "Acuerdos formales entre herederos.",
  "Cualquier contrato o autorizacion escrita de uso.",
];

const openQuestions = [
  "El departamento esta incluido en la posesion efectiva?",
  "Quien administra formalmente el bien?",
  "Existe intencion formal de venta por todos los herederos?",
  "Algun heredero ha planteado cobro, formal o informalmente?",
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
    margin: 0,
    fontSize: "15px",
    lineHeight: 1.6,
    color: "#374151",
  },
  groupBlock: {
    display: "grid",
    gap: "10px",
    paddingTop: "18px",
    borderTop: "1px solid #ece7df",
  },
  firstGroupBlock: {
    display: "grid",
    gap: "10px",
    paddingTop: 0,
    borderTop: "none",
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

function DetailCardSection({ title, groups }: DetailCard) {
  return (
    <section style={pageStyles.card}>
      <h2 style={pageStyles.sectionTitle}>{title}</h2>
      <div style={pageStyles.layout}>
        {groups.map((group, index) => (
          <div
            key={group.heading}
            style={index === 0 ? pageStyles.firstGroupBlock : pageStyles.groupBlock}
          >
            <p style={pageStyles.label}>{group.heading}</p>
            <ul style={pageStyles.list}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
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
                Preparar el terreno para vender el departamento de Nunoa.
              </p>
            </article>

            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Objetivo complementario</p>
              <p style={pageStyles.strongValue}>
                Ordenar antecedentes para responder ante un eventual cobro
                retroactivo por uso del inmueble.
              </p>
            </article>

            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Estado actual</p>
              <p style={pageStyles.statusValue}>
                Departamento en uso informal, sin acuerdo escrito entre
                herederos y sin conflicto activo formalizado.
              </p>
            </article>
          </section>

          <section aria-label="Bloqueos y proximo paso" style={pageStyles.twoColumnGrid}>
            <article style={pageStyles.card}>
              <h2 style={pageStyles.sectionTitle}>Bloqueo principal</h2>
              <p style={pageStyles.sectionText}>
                Falta de acuerdo formal entre herederos sobre uso, condiciones y
                venta del inmueble, sumado a falta de claridad sobre su
                situacion exacta dentro de la posesion efectiva.
              </p>
            </article>

            <article style={pageStyles.card}>
              <h2 style={pageStyles.sectionTitle}>Proximo paso</h2>
              <p style={pageStyles.sectionText}>
                Confirmar si el departamento esta incluido en la posesion
                efectiva y alinear a los herederos hacia una estrategia de
                venta.
              </p>
            </article>
          </section>

          <section aria-label="Preparacion estrategica" style={pageStyles.twoColumnGrid}>
            <DetailCardSection {...salePreparation} />
            <DetailCardSection {...defensePreparation} />
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

              <p style={pageStyles.label}>Disponibles o mencionados</p>
              <ul style={{ ...pageStyles.list, marginBottom: "20px" }}>
                {availableDocuments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p style={pageStyles.label}>Faltantes o pendientes</p>
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
