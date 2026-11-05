/**
 * HUB 3DS·B — Datos de módulos de 3.º año de Bachillerato
 * Estructura organizada por docente: cada profesor tiene 4 módulos asignados.
 *
 * Profesor 1: Javier Mineros  (4 módulos)
 * Profesor 2: Arcides Canales (4 módulos)
 *
 * Notas: los campos de contenido detallado se completaron con la información
 * disponible en la carpeta C:\Users\Aaron\Documents\Prof_Javier.
 * El módulo 3.2 se deja vacío por falta de evidencia en la carpeta.
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
    descripcion:
      "Contenido por completar. No se encontró evidencia específica en la carpeta de trabajo del estudiante para este módulo.",
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
    descripcion:
      "Diseño, modelado y administración de bases de datos relacionales. Se trabajó con diagrama Entidad-Relación, esquema SQLite con claves foráneas y modo WAL, conexión PDO a MySQL, y operaciones CRUD sobre tabla de productos en PHP.",
    instrumentos: [
      "Diagrama Entidad-Relación (Mermaid) en docs/diagrama-er.md",
      "Esquema SQL con CREATE TABLE y restricciones de integridad",
      "Archivo db.php (conexión PDO a MySQL)",
      "Archivo crud.php (operaciones SELECT, INSERT, UPDATE, DELETE)",
    ],
    programas: [
      "SQLite (base de datos local)",
      "MySQL (servidor de base de datos)",
      "phpMyAdmin (gestión de BD)",
      "XAMPP (entorno de desarrollo)",
    ],
    herramientas: [
      "SQL (DDL/DML)",
      "Modelado ER",
      "Normalización",
      "Consultas con JOIN y agregación",
    ],
    recursos: [
      { nombre: "Documentación MySQL", url: "https://dev.mysql.com/doc/" },
      { nombre: "SQLZoo", url: "https://sqlzoo.net/" },
      { nombre: "Mode Analytics SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
    ],
    evidencias: [
      { tipo: "Diagrama", descripcion: "docs/diagrama-er.md — Modelo entidad-relación con 6 tablas y restricciones", url: "docs/diagrama-er.md" },
      { tipo: "Código", descripcion: "server/db.ts — Esquema SQLite con claves foráneas, WAL y seed de datos", url: "server/db.ts" },
      { tipo: "Código", descripcion: "EjercicioPHP/db.php — Conexión PDO a MySQL", url: "EjercicioPHP/db.php" },
      { tipo: "Código", descripcion: "EjercicioPHP/crud.php — CRUD de inventario con PHP y MySQL", url: "EjercicioPHP/crud.php" },
    ],
    quiz: [
      {
        pregunta: "¿Qué comando SQL se usa para recuperar datos de una tabla?",
        opciones: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        respuesta: 2,
        explicacion: "SELECT es el comando de consulta (DQL) para recuperar datos.",
      },
      {
        pregunta: "¿Qué forma normal elimina dependencias transitivas?",
        opciones: ["1NF", "2NF", "3NF", "BCNF"],
        respuesta: 2,
        explicacion: "3NF elimina dependencias transitivas entre atributos no clave.",
      },
      {
        pregunta: "¿Qué es una clave primaria?",
        opciones: ["Campo repetible", "Identificador único", "Campo de texto", "Campo numérico"],
        respuesta: 1,
        explicacion: "La PK identifica unívocamente cada fila de una tabla.",
      },
    ],
  },
  {
    id: "jv-m3-4",
    docenteId: "javier",
    docente: "Javier Mineros",
    nombre: "3.4 Elaboración de documentación de Sistemas informáticos",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion:
      "Redacción de documentación técnica de sistemas: diagrama ER en Mermaid, README académico del proyecto StreamPulse, README de la práctica de IA con Streamlit, y declaración de autoría con registro de uso de IA.",
    instrumentos: [
      "Diagrama Entidad-Relación (docs/diagrama-er.md)",
      "README académico de StreamPulse",
      "README de Practica_Evaluada_IA",
      "Especificaciones funcionales RF-01 a RF-05",
    ],
    programas: [
      "Visual Studio Code (editor de documentación)",
      "Git (control de versiones)",
      "GitHub (alojamiento de repositorio y documentación)",
    ],
    herramientas: [
      "Markdown",
      "Mermaid (diagramas ER)",
      "Especificación de requisitos funcionales",
    ],
    recursos: [
      { nombre: "Documentación de GitHub", url: "https://docs.github.com/es" },
      { nombre: "Guía de Markdown", url: "https://www.markdownguide.org/" },
      { nombre: "Mermaid Live Editor", url: "https://mermaid.live/" },
    ],
    evidencias: [
      { tipo: "Documento", descripcion: "docs/diagrama-er.md — Diagrama ER con 6 tablas y restricciones de integridad", url: "docs/diagrama-er.md" },
      { tipo: "Documento", descripcion: "StreamPulse/README.md — Documentación académica completa del proyecto", url: "StreamPulse/README.md" },
      { tipo: "Documento", descripcion: "Practica_Evaluada_IA/README.md — Documentación del proyecto de plan de estudio con IA", url: "Practica_Evaluada_IA/README.md" },
    ],
    quiz: [
      {
        pregunta: "¿Qué formato se usa para documentar el diagrama entidad-relación?",
        opciones: ["Mermaid", "UML", "SQL", "JSON"],
        respuesta: 0,
        explicacion: "El diagrama ER está escrito en sintaxis Mermaid en docs/diagrama-er.md.",
      },
      {
        pregunta: "¿Qué sección del README de StreamPulse detalla las credenciales del usuario de prueba?",
        opciones: ["RF-01", "RF-02", "RF-03", "RF-04"],
        respuesta: 0,
        explicacion: "RF-01 detalla las credenciales demo@streampulse.io / Password123!.",
      },
      {
        pregunta: "¿Cuántas tablas tiene el modelo de base de datos documentado?",
        opciones: ["4", "5", "6", "7"],
        respuesta: 2,
        explicacion: "El modelo tiene 6 tablas: users, categories, sources, items, user_items.",
      },
    ],
  },
  {
    id: "jv-m3-8",
    docenteId: "javier",
    docente: "Javier Mineros",
    nombre: "3.8 Proyecto innovador de Desarrollo de Software",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion:
      "Proyecto fullstack StreamPulse: agregador de feeds RSS con backend Node.js/Express, base de datos SQLite local, autenticación JWT, API REST, CRUD de categorías y fuentes, ingesta RSS real, frontend React con Vite, motor de IA con Gemini (reglas en lenguaje natural, historias conectadas, briefing de audio), PWA y service worker. Incluye además la práctica de IA para generación de planes de estudio con Streamlit.",
    instrumentos: [
      "Rúbrica académica del proyecto StreamPulse",
      "Checklist de entregas del portal HUB 3DS·B",
      "Especificaciones funcionales RF-01 a RF-05",
      "Diagrama de arquitectura del sistema fullstack",
    ],
    programas: [
      "Node.js (entorno de ejecución)",
      "npm / bun (gestión de paquetes)",
      "Vite (bundler de frontend)",
      "SQLite (motor de base de datos)",
    ],
    herramientas: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API (IA)",
      "Express.js",
      "JWT (autenticación)",
    ],
    recursos: [
      { nombre: "Documentación de GitHub Pages", url: "https://docs.github.com/es/pages" },
      { nombre: "MDN Web Docs — JavaScript", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
      { nombre: "React Documentation", url: "https://react.dev/" },
      { nombre: "Google Gemini Docs", url: "https://ai.google.dev/" },
    ],
    evidencias: [
      { tipo: "Repositorio", descripcion: "StreamPulse/ — Proyecto fullstack completo con backend, frontend y documentación", url: "StreamPulse/" },
      { tipo: "Repositorio", descripcion: "Practica_Evaluada_IA/ — Plan de estudio con IA generativa y exportación PDF", url: "Practica_Evaluada_IA/" },
      { tipo: "Código", descripcion: "server/server.ts — Servidor Express con API REST, autenticación y endpoints de IA", url: "server/server.ts" },
      { tipo: "Código", descripcion: "src/App.tsx — Componente principal de React con lógica de feeds e IA", url: "src/App.tsx" },
    ],
    quiz: [
      {
        pregunta: "¿Qué motor de base de datos usa StreamPulse en producción local?",
        opciones: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
        respuesta: 2,
        explicacion: "StreamPulse usa SQLite local con node:sqlite y modo WAL.",
      },
      {
        pregunta: "¿Qué tecnología de frontend usa StreamPulse?",
        opciones: ["Angular", "React", "Vue", "Svelte"],
        respuesta: 1,
        explicacion: "El frontend está construido con React y Vite.",
      },
      {
        pregunta: "¿Qué API de IA se integra en StreamPulse para evaluar reglas?",
        opciones: ["OpenAI", "Gemini", "Claude", "Llama"],
        respuesta: 1,
        explicacion: "StreamPulse integra Google Gemini para reglas en lenguaje natural e historias conectadas.",
      },
    ],
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