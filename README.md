# HUB 3DS·B · Repaso del Año

Portal educativo estático para el repaso integral de **3.º Bachillerato Técnico Vocacional en Desarrollo de Software «B»** (INDEL).

**Curso:** 3.º DS «B»  
**Docentes:** Javier Mineros (4 módulos) · Arcides Canales (4 módulos)  
**Total:** 8 módulos organizados por profesor  
**Estado:** v1.0 · Versión final  
**Entrega:** jueves 5 de noviembre · 10 % de la nota  

---

## Estructura del proyecto

```
├── index.html              # Punto de entrada: hero, navegación, módulos y entregas
├── css/
│   └── style.css           # Estilos profesionales: tema cálido, sin neón, responsive
├── js/
│   └── app.js              # Lógica: navegación, render, búsqueda, filtros, progreso, quiz, tema
├── data/
│   └── modulos.js          # Fuente de datos única: 8 módulos (4 por docente) con fichas, quiz y evidencias
├── .nojekyll               # Para GitHub Pages (sin procesamiento Jekyll)
└── README.md               # Este archivo
```

---

## Diseño

- **Tema cálido y editorial** inspirado en Notion / Anthropic / Stripe Press: fondos gris-piedra en oscuro, crema en claro, bordes sutiles de 1px, sombras suaves sin glows ni neón.
- **Paleta:** un solo acento ámbar/terracota (`#E8963A` oscuro / `#B45309` claro) usado con moderación.
- **Tipografía:** Inter para títulos y cuerpo, JetBrains Mono para detalles técnicos pequeños.
- **Responsive:** grid adaptable, tarjetas apiladas en móvil, navegación con menú hamburguesa.
- **Accesibilidad:** saltar al contenido, regiones `aria-live`, foco visible, contraste WCAG AA en ambos temas, botones con `aria-pressed`.

---

## Funcionalidades (v1.0)

1. **Navegación por profesor** — filtra la vista a los 4 módulos de cada docente (Javier Mineros y Arcides Canales).
2. **Búsqueda en tiempo real** — por nombre, docente, descripción, herramientas y programas (tolerante a mayúsculas y acentos).
3. **Filtros por nivel** — Base / Avanzado según el docente.
4. **Tema claro/oscuro** — toggle persistido en `localStorage`.
5. **Progreso del repaso** — marca módulos como repasados, guarda en `localStorage`, muestra porcentaje global con barra de progreso.
6. **Quiz interactivo** — preguntas de opción múltiple por módulo con retroalimentación inmediata y puntuación final.
7. **Checklist de entregas** — requisitos previos y producto del portal, guardado en `localStorage`.
8. **Animaciones al scroll** — Intersection Observer para tarjetas.
9. **Ficha de módulo** — modal con instrumentos, programas, herramientas, recursos, evidencias y quiz.

---

## Cómo ejecutar

### Opción A — Live Server (recomendado)
1. Abre la carpeta raíz del proyecto en **Visual Studio Code**.
2. Instala la extensión **Live Server** (Ritwick Dey).
3. Haz clic en **Go Live**.
4. Abre la URL que asigne (ej. `http://localhost:5500/index.html`).

### Opción B — Servidor con Python
```bash
cd <raiz-del-proyecto>
python -m http.server 8000
# Luego abre http://localhost:8000/index.html
```

### Opción C — Servidor con Node
```bash
cd <raiz-del-proyecto>
npx serve .
# O
npx http-server .
```

> **Nota:** Abrir `index.html` directamente (`file://`) puede bloquear los módulos ES6 (`type="module"`). Se recomienda usar un servidor local.

---

## Fuente de datos (`data/modulos.js`)

Todos los módulos viven en un solo archivo y se exportan como constantes:

- `DOCENTES` — lista de los 2 docentes con su color de acento.
- `MODULOS` — array de 8 módulos con nombre, docente, descripción, instrumentos, programas, herramientas, recursos, evidencias y quiz.
- `modulosPorDocente(id)` — filtra módulos por docente.
- `moduloPorId(id)` — obtiene un módulo por su ID.

---

## Rúbrica del portal (10 puntos)

| Criterio | Puntos | Enfoque del portal |
|----------|--------|-------------------|
| Contenido por módulo | 3 | Módulos con instrumentos, programas, herramientas, recursos y quiz |
| Interactividad y dinamismo | 2 | Búsqueda, filtros por profesor y nivel, tema claro/oscuro, progreso, quiz |
| Diseño creativo, intuitivo y accesible | 2 | Identidad propia, responsive, contraste, foco visible |
| GitHub y publicación | 2 | README, commits, versión etiquetada v1.0, Pages publicado |
| Dominio individual | 1 | Explicar módulos y código propio |

---

## Próximos pasos

- Fichas con contenido real por módulo (campos vacíos listos para llenar).
- Publicación en GitHub Pages con versión etiquetada v1.0.

---

## Stack

- HTML5 semántico
- CSS3 (variables, Grid, Flexbox, backdrop-filter, animaciones)
- JavaScript ES6+ (módulos ES, Intersection Observer, localStorage)
- Sin frameworks ni librerías externas (excepto fuentes de Google Fonts)

---

## Licencia

Uso educativo — Instituto Nacional Cantón Lourdes (INDEL).
