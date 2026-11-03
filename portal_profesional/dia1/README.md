# HUB 3DS·B — Día 1 · Cimientos del HUB

Portal educativo estático para el repaso integral de **3.º Bachillerato Técnico Vocacional en Desarrollo de Software «B»** (INDEL).

**Curso:** 3.º DS «B»  
**Docentes:** Javier Mineros (4 módulos) · Arcides Canales (4 módulos)  
**Total:** 8 módulos organizados por profesor  
**Entrega:** jueves · 10 % de la nota  
**Estado:** Día 1 de 3 (v0.2)

---

## Estructura del proyecto

```
dia1/
├── index.html              # Punto de entrada: hero, navegación por profesor, módulos y entregas
├── css/
│   └── style.css           # Estilos profesionales: dark theme, glassmorphism, responsive
├── js/
│   └── app.js              # Lógica: navegación por docente, render de módulos, búsqueda, filtros, tema
├── data/
│   └── modulos.js          # Fuente de datos única: 8 módulos (4 por docente)
└── README.md               # Este archivo
```

---

## Diseño

- **Tema oscuro profesional** con paleta cian (Javier Mineros) y magenta (Arcides Canales).
- **Glassmorphism** en paneles y tarjetas con `backdrop-filter`.
- **Tipografía jerárquica:** Orbitron (títulos), Exo 2 (cuerpo), JetBrains Mono (código/datos).
- **Responsive:** grid adaptable, tarjetas apiladas en móvil, navegación táctil.
- **Accesibilidad:** saltar al contenido, regiones `aria-live`, foco visible, contraste WCAG, botones con `aria-pressed`.

---

## Navegación por profesor

Al hacer clic en una pestaña de docente se muestra solo sus **4 módulos**:

| Profesor | Módulos | Nivel |
|----------|---------|-------|
| **Javier Mineros** | Programación I, Base de Datos I, Ingeniería de Software, Sistemas Operativos | Base / Avanzado |
| **Arcides Canales** | Desarrollo Web I, POO, Desarrollo Web II, Desarrollo Móvil | Avanzado |

Cada tarjeta de módulo muestra:
- ID del módulo y docente con color de acento
- Nombre, área y nivel
- Descripción
- Tags de área y nivel
- Conteo de instrumentos, programas, herramientas y recursos
- Botón para ver ficha

---

## Funcionalidades (Día 1)

1. **Navegación por profesor** — filtra la vista a los 4 módulos de cada docente.
2. **Búsqueda en tiempo real** — por nombre, docente, descripción, herramientas y programas.
3. **Filtros por nivel** — Base / Avanzado (según el docente).
4. **Tema claro/oscuro** — toggle persistido en `localStorage`.
5. **Checklist de entregas** — requisitos previos y producto del Día 1, guardado en `localStorage`.
6. **Animaciones al scroll** — Intersection Observer para tarjetas.

---

## Cómo ejecutar

### Opción A — Live Server (recomendado)
1. Abre la carpeta `dia1/` en **Visual Studio Code**.
2. Instala la extensión **Live Server** (Ritwick Dey).
3. Haz clic en **Go Live**.
4. Abre la URL que asigne (ej. `http://localhost:5500/dia1/index.html`).

### Opción B — Servidor con Python
```bash
cd dia1
python -m http.server 8000
# Luego abre http://localhost:8000/index.html
```

### Opción C — Servidor con Node
```bash
cd dia1
npx serve .
# O
npx http-server .
```

> **Nota:** Abrir `index.html` directamente (file://) puede bloquear los módulos ES6 (`type="module"`). Se recomienda usar un servidor local.

---

## Fuente de datos (`data/modulos.js`)

Todos los módulos viven en un solo archivo y se exportan como constantes:

- `DOCENTES` — lista de los 2 docentes con su color de acento.
- `MODULOS` — array de 8 módulos con nombre, docente, descripción, instrumentos, programas, herramientas, recursos, evidencias y quiz.
- `modulosPorDocente(id)` — filtra módulos por docente.
- `moduloPorId(id)` — obtiene un módulo por su ID.

---

## Rúbrica del portal (10 puntos)

| Criterio | Puntos | Enfoque Día 1 |
|----------|--------|---------------|
| Contenido por módulo | 3 | Módulos con instrumentos, programas, herramientas, recursos y quiz |
| Interactividad y dinamismo | 2 | Búsqueda, filtros por profesor y nivel, tema claro/oscuro |
| Diseño creativo, intuitivo y accesible | 2 | Identidad propia, responsive, contraste, foco visible |
| GitHub y publicación | 2 | README, commits, Pages publicado |
| Dominio individual | 1 | Explicar módulos y código propio |

---

## Próximos días

- **Día 2:** Datos pintan el portal solo, fichas con contenido real, revisión cruzada.
- **Día 3:** Lanzamiento, buscador/filtros avanzados, progreso guardado, quiz interactivo, PWA opcional.

---

## Stack

- HTML5 semántico
- CSS3 (variables, Grid, Flexbox, backdrop-filter, animaciones)
- JavaScript ES6+ (módulos ES, Intersection Observer, localStorage)
- Sin frameworks ni librerías externas (excepto fuentes de Google Fonts)

---

## Licencia

Uso educativo — Instituto Nacional Cantón Lourdes (INDEL).
