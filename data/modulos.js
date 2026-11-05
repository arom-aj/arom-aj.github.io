/**
 * HUB 3DS·B — Datos de módulos de 3.º año de Bachillerato
 * Estructura organizada por docente: cada profesor tiene 4 módulos asignados.
 *
 * Profesor 1: Javier Mineros  (4 módulos)
 * Profesor 2: Arcides Canales (4 módulos)
 *
 * Notas: los campos de contenido detallado (instrumentos, programas,
 * herramientas, recursos, evidencias, quiz) se dejan vacíos para ser
 * completados posteriormente con la información de cada módulo.
 */

export const DOCENTES = [
  {
    id: "javier",
    nombre: "Javier Mineros",
    color: "#22d3ee",
    totalModulos: 4,
  },
  {
    id: "arcides",
    nombre: "Arcides Canales",
    color: "#f046d2",
    totalModulos: 4,
  },
];

export const MODULOS = [
  /* ============================================================
     PROFESOR 1 — Javier Mineros (4 módulos)
     ============================================================ */
  {
    id: "jv-m3-2",
    docenteId: "javier",
    docente: "Javier Mineros",
    nombre: "3.2 Mantenimiento y aseguramiento de la operación del sistema informático",
    area: "Soporte e Infraestructura",
    nivel: "Avanzado",
    descripcion: "Contenido por completar.",
    instrumentos: [],
    programas: [],
    herramientas: [],
    recursos: [],
    evidencias: [],
    quiz: [],
  },
  {
    id: "jv-m3-3",
    docenteId: "javier",
    docente: "Javier Mineros",
    nombre: "3.3 Administración de Bases de Datos",
    area: "Desarrollo de Software",
    nivel: "Base",
    descripcion: "Contenido por completar.",
    instrumentos: [],
    programas: [],
    herramientas: [],
    recursos: [],
    evidencias: [],
    quiz: [],
  },
  {
    id: "jv-m3-4",
    docenteId: "javier",
    docente: "Javier Mineros",
    nombre: "3.4 Elaboración de documentación de Sistemas informáticos",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion: "Contenido por completar.",
    instrumentos: [],
    programas: [],
    herramientas: [],
    recursos: [],
    evidencias: [],
    quiz: [],
  },
  {
    id: "jv-m3-8",
    docenteId: "javier",
    docente: "Javier Mineros",
    nombre: "3.8 Proyecto innovador de Desarrollo de Software",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion: "Contenido por completar.",
    instrumentos: [],
    programas: [],
    herramientas: [],
    recursos: [],
    evidencias: [],
    quiz: [],
  },

  /* ============================================================
     PROFESOR 2 — Arcides Canales (4 módulos)
     ============================================================ */
  {
    id: "ac-m3-1",
    docenteId: "arcides",
    docente: "Arcides Canales",
    nombre: "3.1 Desarrollo de aplicaciones de software para la solución de problemas",
    area: "Desarrollo de Software",
    nivel: "Base",
    descripcion: "Contenido por completar.",
    instrumentos: [],
    programas: [],
    herramientas: [],
    recursos: [],
    evidencias: [],
    quiz: [],
  },
  {
    id: "ac-m2",
    docenteId: "arcides",
    docente: "Arcides Canales",
    nombre: "2 Desarrollo de componentes para dispositivos móviles",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion: "Contenido por completar.",
    instrumentos: [],
    programas: [],
    herramientas: [],
    recursos: [],
    evidencias: [],
    quiz: [],
  },
  {
    id: "ac-m3",
    docenteId: "arcides",
    docente: "Arcides Canales",
    nombre: "3 Conversación de inglés sobre mantenimiento de sistemas informáticos",
    area: "Desarrollo de Software",
    nivel: "Base",
    descripcion: "Contenido por completar.",
    instrumentos: [],
    programas: [],
    herramientas: [],
    recursos: [],
    evidencias: [],
    quiz: [],
  },
  {
    id: "ac-m4",
    docenteId: "arcides",
    docente: "Arcides Canales",
    nombre: "4 Puesta en marcha de la empresa en asociatividad cooperativa",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion: "Contenido por completar.",
    instrumentos: [],
    programas: [],
    herramientas: [],
    recursos: [],
    evidencias: [],
    quiz: [],
  },
];

export function modulosPorDocente(docenteId) {
  return MODULOS.filter((m) => m.docenteId === docenteId);
}

export function moduloPorId(id) {
  return MODULOS.find((m) => m.id === id);
}