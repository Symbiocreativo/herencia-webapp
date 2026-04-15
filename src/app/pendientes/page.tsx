import Link from "next/link";
import type { CSSProperties } from "react";

type PendingStatus = "Pendiente" | "En gestión" | "En espera" | "Resuelto" | "Atrasado";
type PriorityLevel = "Alta" | "Media" | "Baja";
type FrontName = "Isla Negra" | "Depto Ñuñoa" | "Depósito a plazo";

type PendingItem = {
  tramite: string;
  frente: FrontName;
  responsable: string;
  fechaObjetivo: string;
  estado: PendingStatus;
  prioridad: PriorityLevel;
  observaciones: string;
};

type UpcomingItem = {
  tramite: string;
  frente: FrontName;
  fechaObjetivo: string;
  diasRestantes: number;
};

const referenceDate = new Date("2026-04-15T00:00:00");
const millisecondsPerDay = 1000 * 60 * 60 * 24;

const pendingItems: PendingItem[] = [
  {
    tramite: "Solicitar certificado de dominio vigente",
    frente: "Isla Negra",
    responsable: "Carolina",
    fechaObjetivo: "2026-04-18",
    estado: "En gestión",
    prioridad: "Alta",
    observaciones: "Falta confirmar retiro digital y adjuntar respaldo a la carpeta base.",
  },
  {
    tramite: "Revisar contribuciones y pagos pendientes",
    frente: "Isla Negra",
    responsable: "Javier",
    fechaObjetivo: "2026-04-28",
    estado: "Pendiente",
    prioridad: "Media",
    observaciones: "Se necesita consolidar últimos comprobantes para estimar carga real del inmueble.",
  },
  {
    tramite: "Levantar estado material del departamento",
    frente: "Depto Ñuñoa",
    responsable: "Carolina",
    fechaObjetivo: "2026-04-22",
    estado: "Pendiente",
    prioridad: "Alta",
    observaciones: "Falta cerrar visita y dejar registro breve de mantenciones visibles.",
  },
  {
    tramite: "Ordenar respaldo para eventual cobro retroactivo",
    frente: "Depto Ñuñoa",
    responsable: "Abogada externa",
    fechaObjetivo: "2026-04-12",
    estado: "Atrasado",
    prioridad: "Alta",
    observaciones: "Aún no llega minuta consolidada con cronología de uso y gastos asociados.",
  },
  {
    tramite: "Confirmar observación exacta del banco",
    frente: "Depósito a plazo",
    responsable: "Javier",
    fechaObjetivo: "2026-04-16",
    estado: "En gestión",
    prioridad: "Alta",
    observaciones: "Seguimiento activo por correo; si no responden, corresponde escalar al ejecutivo.",
  },
  {
    tramite: "Actualizar carpeta de identidad y posesión efectiva",
    frente: "Depósito a plazo",
    responsable: "Carolina",
    fechaObjetivo: "2026-04-20",
    estado: "En espera",
    prioridad: "Media",
    observaciones: "Queda pendiente una copia legible del documento notarial para dejar el set completo.",
  },
  {
    tramite: "Definir criterio interno de venta",
    frente: "Depto Ñuñoa",
    responsable: "Familia",
    fechaObjetivo: "2026-05-03",
    estado: "En espera",
    prioridad: "Media",
    observaciones: "Depende de cerrar primero el resumen legal y los costos previos a venta.",
  },
  {
    tramite: "Consolidar inventario documental inicial",
    frente: "Isla Negra",
    responsable: "Carolina",
    fechaObjetivo: "2026-04-10",
    estado: "Resuelto",
    prioridad: "Baja",
    observaciones: "Se armó carpeta base con lo disponible y lista de brechas para seguimiento.",
  },
];

const activePendingItems = pendingItems.filter((item) => item.estado !== "Resuelto");
const urgentItems = activePendingItems.filter((item) => isUrgent(item));
const inProgressItems = pendingItems.filter((item) => item.estado === "En gestión");
const overdueItems = activePendingItems.filter((item) => isOverdue(item));
const upcomingItems = activePendingItems
  .map((item) => ({
    tramite: item.tramite,
    frente: item.frente,
    fechaObjetivo: item.fechaObjetivo,
    diasRestantes: getDaysUntil(item.fechaObjetivo),
  }))
  .filter((item) => item.diasRestantes >= 0 && item.diasRestantes <= 14)
  .sort((left, right) => left.diasRestantes - right.diasRestantes)
  .slice(0, 5);

const operationalNotes = [
  "Los pendientes con prioridad alta deben revisarse dos veces por semana hasta cerrar la traba principal de cada frente.",
  "Cuando un trámite cambie a resuelto, conviene dejar inmediatamente el respaldo documental y la fecha de cierre en la carpeta correspondiente.",
  "Los atrasados del Depto Ñuñoa y del Depósito a plazo concentran hoy el mayor riesgo operativo por impacto en decisión y liquidez.",
];

const pageStyles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    background: "#f3f0ea",
    color: "#1f2937",
    padding: "48px 24px 64px",
  },
  shell: {
    maxWidth: "1180px",
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
    maxWidth: "820px",
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#4b5563",
  },
  layout: {
    display: "grid",
    gap: "20px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
  summaryValue: {
    margin: "8px 0 0",
    fontSize: "34px",
    fontWeight: 700,
    lineHeight: 1,
    color: "#111827",
  },
  summaryCaption: {
    margin: "10px 0 0",
    fontSize: "14px",
    lineHeight: 1.55,
    color: "#6b7280",
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
    margin: 0,
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#6b7280",
  },
  tableWrapper: {
    overflowX: "auto",
    border: "1px solid #e7e1d7",
    borderRadius: "14px",
  },
  table: {
    width: "100%",
    minWidth: "980px",
    borderCollapse: "collapse",
  },
  tableHead: {
    backgroundColor: "#f7f4ee",
  },
  tableHeaderCell: {
    padding: "14px 16px",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#6b7280",
    borderBottom: "1px solid #e7e1d7",
  },
  tableCell: {
    padding: "16px",
    verticalAlign: "top",
    fontSize: "14px",
    lineHeight: 1.55,
    color: "#374151",
    borderBottom: "1px solid #f0ebe3",
  },
  tableStrong: {
    margin: 0,
    fontSize: "15px",
    fontWeight: 600,
    color: "#111827",
  },
  tableMuted: {
    margin: "4px 0 0",
    fontSize: "13px",
    color: "#6b7280",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "7px 12px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },
  list: {
    margin: 0,
    paddingLeft: "20px",
    display: "grid",
    gap: "12px",
    color: "#374151",
    fontSize: "15px",
    lineHeight: 1.6,
  },
  alertList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: "14px",
  },
  alertItem: {
    padding: "16px 18px",
    borderRadius: "14px",
    border: "1px solid #ead8cf",
    backgroundColor: "#fcf7f4",
  },
  upcomingItem: {
    padding: "16px 18px",
    borderRadius: "14px",
    border: "1px solid #e7e1d7",
    backgroundColor: "#faf8f5",
  },
  itemHeader: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  itemTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 600,
    color: "#111827",
  },
  metaRow: {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.6,
    color: "#4b5563",
  },
  notesBlock: {
    display: "grid",
    gap: "12px",
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

function getDaysUntil(dateValue: string) {
  const targetDate = new Date(`${dateValue}T00:00:00`);
  return Math.round((targetDate.getTime() - referenceDate.getTime()) / millisecondsPerDay);
}

function isOverdue(item: PendingItem) {
  return item.estado === "Atrasado" || getDaysUntil(item.fechaObjetivo) < 0;
}

function isUrgent(item: PendingItem) {
  const daysUntil = getDaysUntil(item.fechaObjetivo);
  return item.prioridad === "Alta" || isOverdue(item) || daysUntil <= 5;
}

function formatDate(dateValue: string) {
  return new Intl.DateTimeFormat("es-CL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${dateValue}T00:00:00`));
}

function getStatusBadgeStyle(status: PendingStatus): CSSProperties {
  if (status === "Atrasado") {
    return { backgroundColor: "#fce8e6", color: "#9f2d20" };
  }

  if (status === "En gestión") {
    return { backgroundColor: "#e9f2ea", color: "#2f6b3c" };
  }

  if (status === "En espera") {
    return { backgroundColor: "#f6eddc", color: "#8a5a14" };
  }

  if (status === "Resuelto") {
    return { backgroundColor: "#edf2f7", color: "#475569" };
  }

  return { backgroundColor: "#f3efe7", color: "#5b4633" };
}

function getPriorityBadgeStyle(priority: PriorityLevel): CSSProperties {
  if (priority === "Alta") {
    return { backgroundColor: "#fce8e6", color: "#9f2d20" };
  }

  if (priority === "Media") {
    return { backgroundColor: "#f6eddc", color: "#8a5a14" };
  }

  return { backgroundColor: "#edf2f7", color: "#475569" };
}

function getUpcomingLabel(daysRemaining: number) {
  if (daysRemaining === 0) {
    return "Vence hoy";
  }

  if (daysRemaining === 1) {
    return "Vence en 1 día";
  }

  return `Vence en ${daysRemaining} días`;
}

export default function PendientesPage() {
  return (
    <main style={pageStyles.main}>
      <div style={pageStyles.shell}>
        <header style={pageStyles.hero}>
          <p style={pageStyles.eyebrow}>Seguimiento operativo</p>
          <h1 style={pageStyles.title}>Pendientes y plazos</h1>
          <p style={pageStyles.subtitle}>
            Seguimiento operativo de trámites, responsables y fechas objetivo para
            los distintos frentes.
          </p>
        </header>

        <div style={pageStyles.layout}>
          <section aria-label="Resumen rápido" style={pageStyles.statsGrid}>
            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Total de pendientes</p>
              <p style={pageStyles.summaryValue}>{activePendingItems.length}</p>
              <p style={pageStyles.summaryCaption}>
                Trámites abiertos que todavía requieren gestión, respuesta o cierre.
              </p>
            </article>

            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Urgentes</p>
              <p style={pageStyles.summaryValue}>{urgentItems.length}</p>
              <p style={pageStyles.summaryCaption}>
                Casos con prioridad alta, atraso o fecha objetivo muy próxima.
              </p>
            </article>

            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>En gestión</p>
              <p style={pageStyles.summaryValue}>{inProgressItems.length}</p>
              <p style={pageStyles.summaryCaption}>
                Trámites con seguimiento activo y una acción ya en curso.
              </p>
            </article>

            <article style={pageStyles.compactCard}>
              <p style={pageStyles.label}>Atrasados</p>
              <p style={pageStyles.summaryValue}>{overdueItems.length}</p>
              <p style={pageStyles.summaryCaption}>
                Pendientes que ya superaron su fecha objetivo o están marcados como atrasados.
              </p>
            </article>
          </section>

          <section aria-label="Tabla principal de pendientes" style={pageStyles.card}>
            <h2 style={pageStyles.sectionTitle}>Tabla principal de pendientes</h2>
            <div style={pageStyles.tableWrapper}>
              <table style={pageStyles.table}>
                <thead style={pageStyles.tableHead}>
                  <tr>
                    <th style={pageStyles.tableHeaderCell}>Trámite</th>
                    <th style={pageStyles.tableHeaderCell}>Frente</th>
                    <th style={pageStyles.tableHeaderCell}>Responsable</th>
                    <th style={pageStyles.tableHeaderCell}>Fecha objetivo</th>
                    <th style={pageStyles.tableHeaderCell}>Estado</th>
                    <th style={pageStyles.tableHeaderCell}>Prioridad</th>
                    <th style={pageStyles.tableHeaderCell}>Observaciones</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingItems.map((item) => (
                    <tr key={`${item.tramite}-${item.frente}`}>
                      <td style={pageStyles.tableCell}>
                        <p style={pageStyles.tableStrong}>{item.tramite}</p>
                      </td>
                      <td style={pageStyles.tableCell}>{item.frente}</td>
                      <td style={pageStyles.tableCell}>{item.responsable}</td>
                      <td style={pageStyles.tableCell}>
                        <p style={pageStyles.tableStrong}>{formatDate(item.fechaObjetivo)}</p>
                        <p style={pageStyles.tableMuted}>
                          {item.estado === "Resuelto"
                            ? "Cerrado"
                            : isOverdue(item)
                              ? "Fuera de plazo"
                              : getUpcomingLabel(getDaysUntil(item.fechaObjetivo))}
                        </p>
                      </td>
                      <td style={pageStyles.tableCell}>
                        <span style={{ ...pageStyles.badge, ...getStatusBadgeStyle(item.estado) }}>
                          {item.estado}
                        </span>
                      </td>
                      <td style={pageStyles.tableCell}>
                        <span
                          style={{
                            ...pageStyles.badge,
                            ...getPriorityBadgeStyle(item.prioridad),
                          }}
                        >
                          {item.prioridad}
                        </span>
                      </td>
                      <td style={pageStyles.tableCell}>{item.observaciones}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-label="Urgentes y próximos vencimientos" style={pageStyles.twoColumnGrid}>
            <article style={pageStyles.card}>
              <h2 style={pageStyles.sectionTitle}>Bloque de urgentes</h2>
              <ul style={pageStyles.alertList}>
                {urgentItems.slice(0, 4).map((item) => (
                  <li key={`${item.tramite}-${item.fechaObjetivo}`} style={pageStyles.alertItem}>
                    <div style={pageStyles.itemHeader}>
                      <h3 style={pageStyles.itemTitle}>{item.tramite}</h3>
                      <span style={{ ...pageStyles.badge, ...getStatusBadgeStyle(item.estado) }}>
                        {item.estado}
                      </span>
                    </div>
                    <p style={pageStyles.metaRow}>
                      {item.frente} · Responsable: {item.responsable}
                    </p>
                    <p style={pageStyles.metaRow}>
                      Fecha objetivo: {formatDate(item.fechaObjetivo)} · Prioridad {item.prioridad.toLowerCase()}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article style={pageStyles.card}>
              <h2 style={pageStyles.sectionTitle}>Próximos vencimientos</h2>
              <ul style={pageStyles.alertList}>
                {upcomingItems.map((item) => (
                  <li key={`${item.tramite}-${item.fechaObjetivo}`} style={pageStyles.upcomingItem}>
                    <div style={pageStyles.itemHeader}>
                      <h3 style={pageStyles.itemTitle}>{item.tramite}</h3>
                      <span style={{ ...pageStyles.badge, backgroundColor: "#edf2f7", color: "#334155" }}>
                        {getUpcomingLabel(item.diasRestantes)}
                      </span>
                    </div>
                    <p style={pageStyles.metaRow}>{item.frente}</p>
                    <p style={pageStyles.metaRow}>Fecha objetivo: {formatDate(item.fechaObjetivo)}</p>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section aria-label="Notas operativas" style={pageStyles.card}>
            <h2 style={pageStyles.sectionTitle}>Notas operativas</h2>
            <div style={pageStyles.notesBlock}>
              <p style={pageStyles.sectionText}>
                Esta vista usa datos mock fijos para ordenar la operación diaria y
                priorizar seguimiento sobre responsables, fechas y bloqueos.
              </p>
              <ul style={pageStyles.list}>
                {operationalNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
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
