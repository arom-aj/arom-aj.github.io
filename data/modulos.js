/**
 * HUB 3DS·B — Datos de módulos de 3.º año de Bachillerato
 * Estructura organizada por docente: cada profesor tiene 4 módulos asignados.
 *
 * Profesor 1: Javier Mineros  (4 módulos)
 * Profesor 2: Arcides Canales (4 módulos)
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
    id: "jv-prog1",
    docenteId: "javier",
    docente: "Javier Mineros",
    nombre: "Programación I",
    area: "Desarrollo de Software",
    nivel: "Base",
    descripcion:
      "Fundamentos de la programación estructurada: variables, tipos de datos, estructuras de control, funciones, arreglos y resolución de problemas algorítmicos.",
    instrumentos: [
      "Guía de ejercicios de lógica de programación",
      "Rúbrica de entrega de algoritmos",
      "Lista de cotejo de buenas prácticas de código",
      "Examen parcial de estructuras de control",
    ],
    programas: ["PSeInt", "Visual Studio Code", "Git", "Node.js"],
    herramientas: ["JavaScript (ES6+)", "Lógica de programación", "Algoritmos"],
    recursos: [
      { nombre: "MDN Web Docs — JavaScript", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
      { nombre: "JavaScript.info", url: "https://es.javascript.info/" },
      { nombre: "FreeCodeCamp — JavaScript", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
    ],
    evidencias: [
      { tipo: "Captura", descripcion: "Primer algoritmo en PSeInt", url: "#" },
      { tipo: "Repositorio", descripcion: "Calculadora básica", url: "#" },
    ],
    quiz: [
      {
        pregunta: "¿Qué estructura repite código mientras se cumpla una condición?",
        opciones: ["if", "while", "switch", "forEach"],
        respuesta: 1,
        explicacion: "El bucle while repite mientras la condición sea verdadera.",
      },
      {
        pregunta: "¿Forma correcta de declarar variable en JS moderna?",
        opciones: ["var x = 1;", "let x = 1;", "int x = 1;", "x = 1;"],
        respuesta: 1,
        explicacion: "let es la forma recomendada en ES6+.",
      },
      {
        pregunta: "¿Qué imprime console.log(typeof []);?",
        opciones: ["'array'", "'object'", "'list'", "'undefined'"],
        respuesta: 1,
        explicacion: "typeof [] devuelve 'object' en JavaScript.",
      },
    ],
  },
  {
    id: "jv-bd1",
    docenteId: "javier",
    docente: "Javier Mineros",
    nombre: "Base de Datos I",
    area: "Desarrollo de Software",
    nivel: "Base",
    descripcion:
      "Diseño y modelado de bases de datos relacionales: entidad-relación, normalización, SQL (DDL/DML), consultas, joins y transacciones.",
    instrumentos: [
      "Guía de modelado Entidad-Relación",
      "Rúbrica de diagrama de base de datos",
      "Lista de cotejo de consultas SQL",
      "Examen de normalización",
    ],
    programas: ["MySQL Workbench", "DBeaver", "phpMyAdmin", "XAMPP"],
    herramientas: ["SQL", "MySQL", "Modelado ER", "Normalización"],
    recursos: [
      { nombre: "Documentación MySQL", url: "https://dev.mysql.com/doc/" },
      { nombre: "SQLZoo", url: "https://sqlzoo.net/" },
      { nombre: "Mode Analytics SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
    ],
    evidencias: [
      { tipo: "Captura", descripcion: "Diagrama Entidad-Relación", url: "#" },
      { tipo: "Script", descripcion: "Script SQL de tablas", url: "#" },
    ],
    quiz: [
      {
        pregunta: "¿Comando SQL para recuperar datos?",
        opciones: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        respuesta: 2,
        explicacion: "SELECT es el comando de consulta (DQL).",
      },
      {
        pregunta: "¿Forma normal que elimina dependencias transitivas?",
        opciones: ["1NF", "2NF", "3NF", "BCNF"],
        respuesta: 2,
        explicacion: "3NF elimina dependencias transitivas.",
      },
      {
        pregunta: "¿Qué es una clave primaria?",
        opciones: ["Campo repetible", "Identificador único", "Campo de texto", "Campo numérico"],
        respuesta: 1,
        explicacion: "La PK identifica unívocamente cada fila.",
      },
    ],
  },
  {
    id: "jv-is",
    docenteId: "javier",
    docente: "Javier Mineros",
    nombre: "Ingeniería de Software",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion:
      "Metodologías de desarrollo: ciclo de vida, requisitos, diseño, pruebas, mantenimiento. Introducción a Scrum, ágil y control de versiones.",
    instrumentos: [
      "Plantilla de acta de requisitos",
      "Rúbrica de caso de uso",
      "Lista de cotejo de planificación sprint",
      "Examen de metodologías ágiles",
    ],
    programas: ["Trello", "Jira", "Visual Paradigm", "Git"],
    herramientas: ["Scrum", "UML", "Metodologías ágiles", "Control de versiones"],
    recursos: [
      { nombre: "Scrum Guía oficial", url: "https://scrumguides.org/" },
      { nombre: "Atlassian — Ágil y Scrum", url: "https://www.atlassian.com/es/agile" },
      { nombre: "Martin Fowler — Refactorización", url: "https://martinfowler.com/" },
    ],
    evidencias: [
      { tipo: "Documento", descripcion: "Acta de requisitos", url: "#" },
      { tipo: "Diagrama", descripcion: "Casos de uso UML", url: "#" },
    ],
    quiz: [
      {
        pregunta: "¿Evento de Scrum que muestra el incremento al final del sprint?",
        opciones: ["Sprint Planning", "Daily Scrum", "Sprint Review", "Retrospectiva"],
        respuesta: 2,
        explicacion: "Sprint Review muestra el trabajo terminado.",
      },
      {
        pregunta: "¿Diagrama UML de comportamiento dinámico?",
        opciones: ["Clases", "Secuencia", "Componentes", "Despliegue"],
        respuesta: 1,
        explicacion: "Secuencia muestra interacciones en el tiempo.",
      },
      {
        pregunta: "¿Qué significa MVP?",
        opciones: ["Most Valuable Player", "Minimum Viable Product", "Maximum Value Project", "Minimum Version Prototype"],
        respuesta: 1,
        explicacion: "MVP = Producto Mínimo Viable.",
      },
    ],
  },
  {
    id: "jv-so",
    docenteId: "javier",
    docente: "Javier Mineros",
    nombre: "Sistemas Operativos",
    area: "Soporte e Infraestructura",
    nivel: "Base",
    descripcion:
      "Arquitectura de sistemas operativos: procesos, hilos, memoria, archivos, dispositivos y seguridad. Introducción a Linux.",
    instrumentos: [
      "Guía de comandos de terminal Linux",
      "Rúbrica de instalación de SO",
      "Lista de cotejo de gestión de procesos",
      "Examen de administración de sistemas",
    ],
    programas: ["Ubuntu", "VirtualBox", "PuTTY", "WSL"],
    herramientas: ["Bash", "Linux", "SSH", "Administración de procesos"],
    recursos: [
      { nombre: "Linux Journey", url: "https://linuxjourney.com/" },
      { nombre: "Ubuntu Documentation", url: "https://ubuntu.com/" },
      { nombre: "The Linux Command Line", url: "https://linuxcommand.org/" },
    ],
    evidencias: [
      { tipo: "Captura", descripcion: "Terminal de Linux", url: "#" },
      { tipo: "Documento", descripcion: "Reporte de instalación", url: "#" },
    ],
    quiz: [
      {
        pregunta: "¿Comando Linux que lista directorio?",
        opciones: ["open", "list", "ls", "dir"],
        respuesta: 2,
        explicacion: "ls muestra archivos y directorios.",
      },
      {
        pregunta: "¿Qué es un proceso?",
        opciones: ["Archivo en disco", "Programa en ejecución", "Dispositivo", "Usuario conectado"],
        respuesta: 1,
        explicacion: "Proceso es instancia de programa ejecutándose.",
      },
      {
        pregunta: "¿Comando que muestra uso de memoria?",
        opciones: ["df", "du", "free", "top"],
        respuesta: 2,
        explicacion: "free muestra memoria RAM disponible.",
      },
    ],
  },

  /* ============================================================
     PROFESOR 2 — Arcides Canales (4 módulos)
     ============================================================ */
  {
    id: "ac-web1",
    docenteId: "arcides",
    docente: "Arcides Canales",
    nombre: "Desarrollo Web I",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion:
      "Sitios web estáticos y dinámicos con HTML5, CSS3 y JavaScript. Diseño responsivo, maquetación semántica, accesibilidad y GitHub Pages.",
    instrumentos: [
      "Rúbrica de maquetación web",
      "Lista de cotejo de accesibilidad (WCAG)",
      "Guía de diseño responsivo",
      "Entrega final de sitio publicado",
    ],
    programas: ["Visual Studio Code", "Live Server", "Figma", "GitHub Desktop"],
    herramientas: ["HTML5", "CSS3 (Grid/Flexbox)", "JavaScript", "GitHub Pages"],
    recursos: [
      { nombre: "CSS Tricks — Guía Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
      { nombre: "MDN — HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { nombre: "web.dev — Diseño responsivo", url: "https://web.dev/learn/design/" },
    ],
    evidencias: [
      { tipo: "Enlace", descripcion: "Portafolio personal publicado", url: "#" },
      { tipo: "Captura", descripcion: "Página responsiva móvil", url: "#" },
    ],
    quiz: [
      {
        pregunta: "¿Etiqueta HTML5 para el pie de sección?",
        opciones: ["<footer>", "<bottom>", "<end>", "<closure>"],
        respuesta: 0,
        explicacion: "<footer> representa el pie de sección/documento.",
      },
      {
        pregunta: "¿Propiedad CSS para centrar en Flexbox?",
        opciones: ["display: block;", "display: flex; justify-content: center;", "float: center;", "text-align: middle;"],
        respuesta: 1,
        explicacion: "display: flex con justify-content: center.",
      },
      {
        pregunta: "¿Qué significa SPA?",
        opciones: ["Single Page Application", "Styled Page Application", "Server Page Architecture", "Simple Page Access"],
        respuesta: 0,
        explicacion: "SPA = Single Page Application.",
      },
    ],
  },
  {
    id: "ac-poo",
    docenteId: "arcides",
    docente: "Arcides Canales",
    nombre: "Programación Orientada a Objetos",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion:
      "Paradigma POO: clases, objetos, herencia, polimorfismo, encapsulamiento y abstracción. Software reutilizable y mantenible.",
    instrumentos: [
      "Guía de diagramas de clases UML",
      "Rúbrica de implementación POO",
      "Lista de cotejo de principios SOLID",
      "Examen de herencia y polimorfismo",
    ],
    programas: ["IntelliJ IDEA", "Visual Studio", "Eclipse", "Java JDK"],
    herramientas: ["Java", "C# (.NET)", "Python", "UML"],
    recursos: [
      { nombre: "Refactoring Guru — Patrones", url: "https://refactoring.guru/es/design-patterns" },
      { nombre: "Oracle Java Docs", url: "https://docs.oracle.com/en/java/" },
      { nombre: "Microsoft Learn — C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
    ],
    evidencias: [
      { tipo: "Repositorio", descripcion: "Proyecto POO con herencia", url: "#" },
      { tipo: "Diagrama", descripcion: "Diagrama de clases del dominio", url: "#" },
    ],
    quiz: [
      {
        pregunta: "¿Principio POO que oculta detalles internos?",
        opciones: ["Herencia", "Polimorfismo", "Encapsulamiento", "Abstracción"],
        respuesta: 2,
        explicacion: "Encapsulamiento protege el estado interno.",
      },
      {
        pregunta: "¿Qué permite que una clase derive de otra?",
        opciones: ["Encapsulamiento", "Herencia", "Abstracción", "Interfaz"],
        respuesta: 1,
        explicacion: "Herencia reutiliza código de clase base.",
      },
      {
        pregunta: "¿Qué es el polimorfismo?",
        opciones: ["Muchas formas para una interfaz", "Clases privadas", "Múltiples constructores", "Herencia múltiple"],
        respuesta: 0,
        explicacion: "Tratar objetos de distintos tipos de forma unificada.",
      },
    ],
  },
  {
    id: "ac-web2",
    docenteId: "arcides",
    docente: "Arcides Canales",
    nombre: "Desarrollo Web II",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion:
      "Aplicaciones web dinámicas: frontend con frameworks, consumo de APIs REST, estado, enrutamiento y despliegue en producción.",
    instrumentos: [
      "Rúbrica de consumo de API",
      "Lista de cotejo de componentes frontend",
      "Guía de despliegue en producción",
      "Proyecto final de aplicación web",
    ],
    programas: ["Visual Studio Code", "Node.js", "npm", "Vercel / Netlify"],
    herramientas: ["React / Vue", "JavaScript (ES6+)", "APIs REST", "GitHub Actions"],
    recursos: [
      { nombre: "React Documentation", url: "https://react.dev/" },
      { nombre: "MDN — Fetch API", url: "https://developer.mozilla.org/es/docs/Web/API/Fetch_API" },
      { nombre: "Vercel Docs", url: "https://vercel.com/docs" },
    ],
    evidencias: [
      { tipo: "Enlace", descripcion: "Aplicación desplegada", url: "#" },
      { tipo: "Repositorio", descripcion: "Código fuente del frontend", url: "#" },
    ],
    quiz: [
      {
        pregunta: "¿Qué método fetch se usa para obtener datos de una API?",
        opciones: ["POST", "GET", "PUT", "DELETE"],
        respuesta: 1,
        explicacion: "GET obtiene datos del servidor.",
      },
      {
        pregunta: "¿Qué es una API REST?",
        opciones: ["Base de datos", "Interfaz de transferencia de estado", "Servidor web", "Lenguaje de programación"],
        respuesta: 1,
        explicacion: "REST = Representational State Transfer.",
      },
      {
        pregunta: "¿Qué es el estado en React?",
        opciones: ["Datos que cambian y vuelven a renderizar", "CSS del componente", "URL de la página", "Librería externa"],
        respuesta: 0,
        explicacion: "El estado son datos mutables que disparan re-render.",
      },
    ],
  },
  {
    id: "ac-mov",
    docenteId: "arcides",
    docente: "Arcides Canales",
    nombre: "Desarrollo Móvil",
    area: "Desarrollo de Software",
    nivel: "Avanzado",
    descripcion:
      "Aplicaciones móviles multiplataforma: diseño de interfaces móviles, navegación, almacenamiento local y publicación en tiendas.",
    instrumentos: [
      "Rúbrica de interfaz móvil",
      "Lista de cotejo de navegación",
      "Guía de publicación en tiendas",
      "App móvil funcional",
    ],
    programas: ["Android Studio", "VS Code", "Flutter / React Native", "Git"],
    herramientas: ["Dart / JavaScript", "Flutter", "React Native", "Firebase"],
    recursos: [
      { nombre: "Flutter Docs", url: "https://docs.flutter.dev/" },
      { nombre: "React Native Docs", url: "https://reactnative.dev/" },
      { nombre: "Firebase Documentation", url: "https://firebase.google.com/docs" },
    ],
    evidencias: [
      { tipo: "Captura", descripcion: "App en emulador", url: "#" },
      { tipo: "Repositorio", descripcion: "Código de la app móvil", url: "#" },
    ],
    quiz: [
      {
        pregunta: "¿Framework multiplataforma de Google?",
        opciones: ["React Native", "Flutter", "Ionic", "Xamarin"],
        respuesta: 1,
        explicacion: "Flutter es desarrollado por Google.",
      },
      {
        pregunta: "¿Qué es Firebase?",
        opciones: ["Base de datos relacional", "Plataforma de desarrollo móvil/web", "Lenguaje de programación", "Editor de código"],
        respuesta: 1,
        explicacion: "Firebase es plataforma de desarrollo de Google.",
      },
      {
        pregunta: "¿Formato común para datos en apps móviles?",
        opciones: ["XML solo", "JSON", "CSV solo", "Solo binario"],
        respuesta: 1,
        explicacion: "JSON es el formato estándar para APIs móviles.",
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
