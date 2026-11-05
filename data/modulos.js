/**
 * HUB 3DS·B — Datos de módulos de 3.º año de Bachillerato
 * Estructura organizada por docente: cada profesor tiene 4 módulos asignados.
 *
 * Profesor 1: Javier Mineros  (4 módulos)
 * Profesor 2: Arcides Canales (4 módulos)
 *
 * Notas: los campos de contenido detallado se completaron con la información
 * disponible en las carpetas de trabajo del estudiante.
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
    descripcion:
      "Desarrollo de aplicaciones de software .NET MAUI para dispositivos móviles y escritorio. Se trabajaron proyectos Mision1_2 y Aplicacion1 con múltiples pantallas (Introducción, Desarrollo, Universales, Final), navegación Shell, y arquitectura de componentes XAML + C#.",
    instrumentos: [
      "Proyecto Mision1_2 (.NET MAUI con Shell y navegación)",
      "Proyecto Aplicacion1 (.NET MAUI con 5 pantallas XAML)",
      "Arquitectura de componentes XAML + Code-behind C#",
      "Registro de fuentes personalizadas en MauiProgram.cs",
    ],
    programas: [
      "Visual Studio 2022 (.NET MAUI workload)",
      ".NET 10 (SDK y runtime)",
      "C# (lenguaje de programación)",
      "XAML (lenguaje de marcado de interfaz)",
    ],
    herramientas: [
      ".NET MAUI (framework multiplataforma)",
      "Shell (navegación entre pantallas)",
      "Dependency Injection (MauiProgram.CreateMauiApp)",
      "Android Emulator / Windows (destinos de despliegue)",
    ],
    recursos: [
      { nombre: "Documentación .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" },
      { nombre: "Microsoft Learn — C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { nombre: "XAML Overview", url: "https://learn.microsoft.com/es-es/dotnet/desktop/wpf/" },
    ],
    evidencias: [
      { tipo: "Repositorio", descripcion: "Mision1_2/ — App .NET MAUI con Shell y navegación", url: "Mision1_2/" },
      { tipo: "Repositorio", descripcion: "Aplicacion1/ — App .NET MAUI con 5 páginas (Introducción, Desarrollo, Universales, Final)", url: "Aplicacion1/" },
      { tipo: "Código", descripcion: "Aplicacion1/Aplicacion1.csproj — Configuración del proyecto .NET MAUI para Android, iOS, macCatalyst y Windows", url: "Aplicacion1/Aplicacion1.csproj" },
      { tipo: "Código", descripcion: "Aplicacion1/MauiProgram.cs — Registro de fuentes y configuración de la app", url: "Aplicacion1/MauiProgram.cs" },
    ],
    quiz: [
      {
        pregunta: "¿Qué framework se usa para construir las aplicaciones Mision1_2 y Aplicacion1?",
        opciones: ["WPF", ".NET MAUI", "WinForms", "ASP.NET"],
        respuesta: 1,
        explicacion: "Ambos proyectos usan .NET MAUI con TargetFrameworks para Android, iOS, macCatalyst y Windows.",
      },
      {
        pregunta: "¿Cuántas pantallas XAML tiene el proyecto Aplicacion1?",
        opciones: ["3", "4", "5", "6"],
        respuesta: 2,
        explicacion: "Aplicacion1 tiene 5 pantallas: MainPage, Introduccion, Desarrollo, Universales y Final.",
      },
      {
        pregunta: "¿Qué archivo configura las fuentes personalizadas en Aplicacion1?",
        opciones: ["App.xaml", "MauiProgram.cs", "MainPage.xaml", "Aplicacion1.csproj"],
        respuesta: 1,
        explicacion: "MauiProgram.cs registra las fuentes OpenSans-Regular.ttf y OpenSans-Semibold.ttf.",
      },
    ],
  },
  {
    id: "ac-m2",
    docenteId: "arcides",
    docente: "Arcides Canales",
    nombre: "2 Desarrollo de componentes para dispositivos móviles",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion:
      "Desarrollo de componentes y ejercicios prácticos para dispositivos móviles con .NET MAUI. Incluye 4 ejercicios individuales (Ejercicio1_M2 a Ejercicio3_M2), una autoevaluación, y proyectos MauiApp1 y led para Android y Windows.",
    instrumentos: [
      "Ejercicio1_M2 — Componente móvil con Shell y MainPage",
      "Ejercicio2_M2 — Segunda práctica de componentes móviles",
      "Ejercicio3_M2 — Tercera práctica con navegación XAML",
      "Autoevaluacion1 — Evaluación de conocimientos del módulo",
    ],
    programas: [
      "Visual Studio 2022 (.NET MAUI workload)",
      ".NET 10 (SDK y runtime)",
      "C#",
      "XAML",
    ],
    herramientas: [
      ".NET MAUI (componentes multiplataforma)",
      "Shell (navegación)",
      "App.xaml / AppShell.xaml (estructura de app móvil)",
      "Android Emulator (pruebas en dispositivo móvil)",
    ],
    recursos: [
      { nombre: "Documentación .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" },
      { nombre: "Microsoft Learn — C# para principiantes", url: "https://learn.microsoft.com/es-es/dotnet/csharp/tour-of-csharp/" },
    ],
    evidencias: [
      { tipo: "Repositorio", descripcion: "Modulo2/ — Carpeta con 4 ejercicios .NET MAUI (Ejercicio1_M2, Ejercicio2_M2, Ejercicio3_M2, Autoevaluacion1)", url: "Modulo2/" },
      { tipo: "Repositorio", descripcion: "MauiApp1/ — Proyecto .NET MAUI básico con MainPage y NewPage1", url: "MauiApp1/" },
      { tipo: "Código", descripcion: "Modulo2/Ejercicio1_M2/Ejercicio1_M2.csproj — Proyecto .NET MAUI para Android, iOS, macCatalyst y Windows", url: "Modulo2/Ejercicio1_M2/Ejercicio1_M2.csproj" },
      { tipo: "Código", descripcion: "MauiApp1/MauiApp1.csproj — Proyecto MAUI con AppShell y navegación básica", url: "MauiApp1/MauiApp1.csproj" },
    ],
    quiz: [
      {
        pregunta: "¿Cuántos ejercicios prácticos contiene el módulo 2 de componentes móviles?",
        opciones: ["2", "3", "4", "5"],
        respuesta: 2,
        explicacion: "Contiene Ejercicio1_M2, Ejercicio2_M2, Ejercicio3_M2 y Autoevaluacion1 (4 en total).",
      },
      {
        pregunta: "¿Qué tecnología se usa para definir la interfaz de usuario en los proyectos de Modulo2?",
        opciones: ["HTML", "XAML", "SwiftUI", "Jetpack Compose"],
        respuesta: 1,
        explicacion: "Los proyectos usan XAML para definir la interfaz y C# para la lógica en Code-behind.",
      },
      {
        pregunta: "¿Qué archivo es el punto de entrada de una aplicación .NET MAUI?",
        opciones: ["MainPage.xaml", "MauiProgram.cs", "App.xaml", "AppShell.xaml"],
        respuesta: 1,
        explicacion: "MauiProgram.cs configura y construye la aplicación MAUI con CreateMauiApp().",
      },
    ],
  },
  {
    id: "ac-m3",
    docenteId: "arcides",
    docente: "Arcides Canales",
    nombre: "3 Conversación de inglés sobre mantenimiento de sistemas informáticos",
    area: "Desarrollo de Software",
    nivel: "Base",
    descripcion:
      "Aplicación Platify (.NET MAUI) para registro de comidas y seguimiento nutricional con base de datos SQL Server y SQLite. Incluye reconocimiento de comidas con IA, base de datos relacional con SQL Server (dbplatify.sql), y arquitectura de servicios con repositorio SQLite y SQL Server.",
    instrumentos: [
      "Base de datos SQL Server (dbplatify.sql con tablas UserProfile, FoodItem, MealLog)",
      "Proyecto Platify (.NET MAUI con login, registro, home, perfil y estadísticas)",
      "Servicios de base de datos (SqliteDatabaseService y SqlServerDatabaseService)",
      "ViewModels con CommunityToolkit.Mvvm",
    ],
    programas: [
      "Visual Studio 2022 (.NET MAUI workload)",
      "SQL Server (motor de base de datos relacional)",
      "SQLite (base de datos local para móviles)",
      ".NET 10 (SDK)",
    ],
    herramientas: [
      ".NET MAUI (XAML + C#)",
      "Microsoft.Data.SqlClient (acceso a SQL Server)",
      "Microsoft.Data.Sqlite (acceso a SQLite)",
      "CommunityToolkit.Mvvm (patrón MVVM)",
    ],
    recursos: [
      { nombre: "Documentación .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" },
      { nombre: "Documentación Microsoft.Data.SqlClient", url: "https://learn.microsoft.com/es-es/dotnet/api/microsoft.data.sqlclient" },
      { nombre: "Documentación SQLite", url: "https://www.sqlite.org/docs.html" },
    ],
    evidencias: [
      { tipo: "Repositorio", descripcion: "Modulo3/Platify/ — App .NET MAUI completa con login, registro, home, perfil y estadísticas", url: "Modulo3/Platify/" },
      { tipo: "Base de datos", descripcion: "Modulo3/dbplatify.sql — Script SQL Server con tablas UserProfile, FoodItem y MealLog", url: "Modulo3/dbplatify.sql" },
      { tipo: "Código", descripcion: "Modulo3/Platify/Services/SqliteDatabaseService.cs — Servicio de base de datos SQLite con autenticación y comidas", url: "Modulo3/Platify/Services/SqliteDatabaseService.cs" },
      { tipo: "Código", descripcion: "Modulo3/Platify/Services/SqlServerDatabaseService.cs — Servicio de base de datos SQL Server equivalente", url: "Modulo3/Platify/Services/SqlServerDatabaseService.cs" },
    ],
    quiz: [
      {
        pregunta: "¿Qué motores de base de datos soporta el proyecto Platify?",
        opciones: ["Solo MySQL", "SQLite y SQL Server", "Solo PostgreSQL", "MongoDB y Redis"],
        respuesta: 1,
        explicacion: "Platify tiene SqliteDatabaseService para SQLite local y SqlServerDatabaseService para SQL Server en Windows.",
      },
      {
        pregunta: "¿Qué archivo SQL crea la base de datos PlatifyDb?",
        opciones: ["Platify.csproj", "dbplatify.sql", "MauiProgram.cs", "App.xaml.cs"],
        respuesta: 1,
        explicacion: "dbplatify.sql contiene los CREATE TABLE para UserProfile, FoodItem y MealLog en SQL Server.",
      },
      {
        pregunta: "¿Qué patrón de diseño se usa en los ViewModels de Platify?",
        opciones: ["MVC", "MVVM", "MVP", "MVPVM"],
        respuesta: 1,
        explicacion: "Los ViewModels heredan de BaseViewModel y usan CommunityToolkit.Mvvm.",
      },
    ],
  },
  {
    id: "ac-m4",
    docenteId: "arcides",
    docente: "Arcides Canales",
    nombre: "4 Puesta en marcha de la empresa en asociatividad cooperativa",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion:
      "Sistema de gestión de gimnasio GymTrack: aplicación de escritorio (GymTrack1 WinForms) y versión web (GymTrackWeb ASP.NET Web Forms) con base de datos SQL Server. Incluye registro de usuarios, wizard de onboarding de 7 pasos, catálogo de ejercicios por grupo muscular, creación de rutinas, control de series con peso y repeticiones, y autenticación segura.",
    instrumentos: [
      "GymTrack1 — Aplicación de escritorio WinForms (.slnx)",
      "GymTrackWeb — Sitio web ASP.NET Web Forms (.aspx)",
      "DB_Gym.sql — Script de creación de base de datos GymApp",
      "RepositorioDB.txt — Clases de acceso a datos (repositorios) en C#",
    ],
    programas: [
      "Visual Studio 2022 (.NET Framework 4.7.2)",
      "SQL Server / SQL Express / LocalDB",
      "C#",
      "ASP.NET Web Forms",
    ],
    herramientas: [
      "WinForms (interfaz de escritorio)",
      "ASP.NET Web Forms (.aspx, Code-behind C#)",
      "SQL Server (base de datos relacional)",
      "IIS Express (servidor de desarrollo web)",
    ],
    recursos: [
      { nombre: "Documentación ASP.NET Web Forms", url: "https://learn.microsoft.com/es-es/aspnet/web-forms/" },
      { nombre: "Documentación SQL Server", url: "https://learn.microsoft.com/es-es/sql/sql-server/" },
      { nombre: "Microsoft Learn — C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
    ],
    evidencias: [
      { tipo: "Repositorio", descripcion: "Feria_Logros/GymTrack1/ — Aplicación de escritorio WinForms de gestión de gimnasio", url: "Feria_Logros/GymTrack1/" },
      { tipo: "Repositorio", descripcion: "Feria_Logros/GymTrackWeb/ — Versión web ASP.NET con login, registro, onboarding, rutinas y series", url: "Feria_Logros/GymTrackWeb/" },
      { tipo: "Base de datos", descripcion: "Feria_Logros/GymTrackWeb/Database/GymApp.sql — Script con 12 grupos musculares y +100 ejercicios", url: "Feria_Logros/GymTrackWeb/Database/GymApp.sql" },
      { tipo: "Código", descripcion: "Feria_Logros/GymTrackWeb/App_Code/Repositorios.cs — Capa de acceso a datos con SqlClient y transacciones", url: "Feria_Logros/GymTrackWeb/App_Code/Repositorios.cs" },
    ],
    quiz: [
      {
        pregunta: "¿Qué tipo de proyecto es GymTrackWeb?",
        opciones: ["WinForms de escritorio", "ASP.NET Web Forms", "Console App", "Blazor"],
        respuesta: 1,
        explicacion: "GymTrackWeb es un Web Site Project de ASP.NET Web Forms con archivos .aspx y Code-behind en C#.",
      },
      {
        pregunta: "¿Cuántos pasos tiene el wizard de onboarding en GymTrack?",
        opciones: ["3", "5", "7", "10"],
        respuesta: 2,
        explicacion: "El wizard tiene 7 pasos (Onboarding1.aspx a Onboarding7.aspx).",
      },
      {
        pregunta: "¿Qué motor de base de datos usa GymTrack?",
        opciones: ["MySQL", "PostgreSQL", "SQL Server", "SQLite"],
        respuesta: 2,
        explicacion: "GymTrack usa SQL Server con System.Data.SqlClient y Trusted_Connection.",
      },
    ],
  },
];

export function modulosPorDocente(docenteId) {
  return MODULOS.filter((m) => m.docenteId === docenteId);
}

export function moduloPorId(id) {
  return MODULOS.find((m) => m.id === id);
}