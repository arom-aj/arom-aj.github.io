/**
 * HUB 3DS·B — Aplicación principal
 * Responsabilidades:
 *  - Navegación por profesor (Javier Mineros / Arcides Canales)
 *  - Render de módulos desde data/modulos.js
 *  - Búsqueda en tiempo real y filtros por nivel
 *  - Tema claro/oscuro persistido
 *  - Progreso del repaso persistido (localStorage)
 *  - Quiz interactivo con retroalimentación
 *  - Checklist de entregas del portal
 *  - Animaciones al scroll (Intersection Observer)
 *  - Accesibilidad (aria-live, foco visible)
 */

import { DOCENTES, MODULOS, modulosPorDocente, moduloPorId } from "../data/modulos.js";

const STATE = {
  activeProfesor: "javier",
  query: "",
  nivel: "todos",
  theme: localStorage.getItem("hub:theme") || "dark",
};

const els = {
  html: document.documentElement,
  themeBtn: document.getElementById("theme-toggle"),
  navToggle: document.getElementById("nav-toggle"),
  navMenu: document.getElementById("nav-menu"),
  profTabs: document.querySelectorAll(".prof-tab"),
  moduleViews: document.querySelectorAll(".modules-view"),
  moduleGrids: {},
  searches: {},
  counts: {},
  chips: {},
  liveRegions: {},
  modalFicha: document.getElementById("modal-ficha"),
  modalFichaClose: document.getElementById("modal-ficha-close"),
  modalFichaContent: document.getElementById("modal-ficha-content"),
  modalQuiz: document.getElementById("modal-quiz"),
  modalQuizClose: document.getElementById("modal-quiz-close"),
  modalQuizContent: document.getElementById("modal-quiz-content"),
  progresoBarra: document.getElementById("progreso-barra"),
  progresoTexto: document.getElementById("progreso-texto"),
  progresoGlobal: document.getElementById("progreso-global"),
};

Object.values(DOCENTES).forEach((d) => {
  els.moduleGrids[d.id] = document.getElementById(`grid-${d.id}`);
  els.searches[d.id] = document.getElementById(`search-${d.id}`);
  els.counts[d.id] = document.getElementById(`count-${d.id}`);
  els.chips[d.id] = document.querySelectorAll(`.chip[data-prof="${d.id}"]`);
  els.liveRegions[d.id] = document.getElementById(`live-${d.id}`);
});

function init() {
  applyTheme();
  bindNavToggle();
  bindProfTabs();
  bindTheme();
  bindFichaModal();
  bindQuizModal();
  renderProfesor(STATE.activeProfesor);
  observeReveals();
  initDayCounter();
  actualizarProgresoGlobal();
}

function applyTheme() {
  const isLight = STATE.theme === "light";
  els.html.classList.toggle("light", isLight);
  els.themeBtn.setAttribute("aria-pressed", String(isLight));
  els.themeBtn.textContent = isLight ? "☀️" : "🌙";
}

function toggleTheme() {
  STATE.theme = STATE.theme === "light" ? "dark" : "light";
  localStorage.setItem("hub:theme", STATE.theme);
  applyTheme();
}

function bindProfTabs() {
  els.profTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const profId = tab.dataset.prof;
      if (profId === STATE.activeProfesor) return;

      els.profTabs.forEach((t) => {
        t.classList.remove("prof-tab--active");
        t.setAttribute("aria-selected", "false");
        const color = DOCENTES.find((d) => d.id === t.dataset.prof)?.color;
        t.style.setProperty("--color-active", color);
      });
      tab.classList.add("prof-tab--active");
      tab.setAttribute("aria-selected", "true");
      const color = DOCENTES.find((d) => d.id === profId)?.color;
      tab.style.setProperty("--color-active", color);

      els.moduleViews.forEach((v) => v.classList.remove("modules-view--active"));
      const view = document.getElementById(`view-${profId}`);
      if (view) view.classList.add("modules-view--active");

      STATE.activeProfesor = profId;
      renderProfesor(profId);
    });
  });
}

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function renderProfesor(profId) {
  const modulos = modulosPorDocente(profId);
  const grid = els.moduleGrids[profId];
  const searchInput = els.searches[profId];
  const countEl = els.counts[profId];
  const live = els.liveRegions[profId];
  const chips = els.chips[profId];

  if (!grid) return;

  function filtrarYRender() {
    const q = normalizarTexto(STATE.query);
    const nivel = STATE.nivel;

    const filtrados = modulos.filter((m) => {
      const matchQuery =
        normalizarTexto(m.nombre).includes(q) ||
        normalizarTexto(m.docente).includes(q) ||
        normalizarTexto(m.descripcion).includes(q) ||
        m.herramientas.some((h) => normalizarTexto(h).includes(q)) ||
        m.programas.some((p) => normalizarTexto(p).includes(q));

      const matchNivel = nivel === "todos" || m.nivel === nivel;
      return matchQuery && matchNivel;
    });

    grid.innerHTML = filtrados.map(buildCard).join("");

    if (countEl) countEl.textContent = filtrados.length;
    if (live) {
      live.textContent = `Mostrando ${filtrados.length} de ${modulos.length} módulo${
        modulos.length !== 1 ? "s" : ""
      }${
        filtrados.length === 0
          ? ". No se encontraron resultados con ese término."
          : ""
      }`;
    }

    // Actualizar mensaje vacío si es necesario
    if (filtrados.length === 0) {
      grid.innerHTML = `
        <div class="vacio">
          <p>No se encontraron módulos con "<strong>${escapeHtml(STATE.query)}</strong>".</p>
          <p>Prueba con otro término o ajusta el filtro de nivel.</p>
        </div>
      `;
    }

    actualizarProgresoGlobal();
    observeReveals();
  }

  let timer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(timer);
    STATE.query = e.target.value;
    timer = setTimeout(filtrarYRender, 150);
  });

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const nivel = chip.dataset.nivel;
      chips.forEach((c) => {
        c.classList.remove("chip--active");
        c.setAttribute("aria-pressed", "false");
      });
      chip.classList.add("chip--active");
      chip.setAttribute("aria-pressed", "true");
      STATE.nivel = nivel;
      filtrarYRender();
    });
  });

  filtrarYRender();
}

function actualizarProgresoGlobal() {
  const total = MODULOS.length;
  if (!total) return;

  let repasados = 0;
  MODULOS.forEach((m) => {
    if (localStorage.getItem(`progreso:${m.id}`) === "1") repasados++;
  });

  const porcentaje = Math.round((repasados / total) * 100);

  if (els.progresoBarra) els.progresoBarra.style.width = `${porcentaje}%`;
  if (els.progresoTexto) els.progresoTexto.textContent = `${repasados} de ${total} módulos repasados`;
  if (els.progresoGlobal) els.progresoGlobal.textContent = `${porcentaje}%`;
}

function toggleProgreso(id) {
  const key = `progreso:${id}`;
  const ahora = localStorage.getItem(key) === "1" ? "0" : "1";
  localStorage.setItem(key, ahora);
  actualizarProgresoGlobal();

  // Marcar visualmente en la tarjeta si está renderizada
  const btn = document.querySelector(`[data-progreso="${id}"]`);
  if (btn) {
    btn.classList.toggle("hecho", ahora === "1");
    btn.setAttribute("aria-pressed", ahora === "1");
  }
}

function renderNombre(nombre) {
  const match = nombre.match(/^(\S+)\s(.+)$/s);
  if (match) {
    return `<span class="module-card__numero">${escapeHtml(match[1])}</span> <span class="module-card__texto">${escapeHtml(match[2])}</span>`;
  }
  return escapeHtml(nombre);
}

function buildCard(m) {
  const docenteColor =
    DOCENTES.find((d) => d.id === m.docenteId)?.color || "#9ba7ce";

  const stats = [
    { label: "Instr.", value: m.instrumentos.length },
    { label: "Prog.", value: m.programas.length },
    { label: "Herram.", value: m.herramientas.length },
    { label: "Rec.", value: m.recursos.length },
  ];

  const herramientasPreview = m.herramientas
    .slice(0, 3)
    .map((h) => `<span style="color:var(--color-javier)">#${escapeHtml(h)}</span>`)
    .join(" ")
    + (m.herramientas.length > 3
      ? ` <span style="color:var(--text-dim)">+${m.herramientas.length - 3}</span>`
      : "");

  const repasado = localStorage.getItem(`progreso:${m.id}`) === "1";

  return `
    <article class="module-card reveal${repasado ? ' repasado' : ''}" data-nivel="${m.nivel}">
      <div class="module-card__header">
        <span class="module-card__doc" style="--doc-color: ${docenteColor}">
          <span class="dot" style="background:${docenteColor}"></span>
          ${escapeHtml(m.docente)}
        </span>
        <button class="btn-progreso" data-progreso="${m.id}" aria-label="Marcar ${escapeHtml(m.nombre)} como repasado" aria-pressed="${repasado}">
          ${repasado ? '✓' : '○'}
        </button>
      </div>
      <h3 class="module-card__title" title="${escapeHtml(m.nombre)}">${renderNombre(m.nombre)}</h3>
      <div class="module-card__body">
        <p class="module-card__desc">${escapeHtml(m.descripcion)}</p>
        <div class="module-card__tags">
          <span class="tag">${escapeHtml(m.area)}</span>
          <span class="tag tag--nivel">${escapeHtml(m.nivel)}</span>
        </div>
        <p style="font-family:var(--font-mono);font-size:11px;color:var(--text-dim);margin-bottom:0;">
          ${herramientasPreview}
        </p>
      </div>
      <footer class="module-card__footer">
        <div class="module-card__stats">
          ${stats
            .map(
              (s) =>
                `<div class="stat-pill"><span>${s.label}:</span> <span>${s.value}</span></div>`
            )
            .join("")}
        </div>
        <div class="footer-actions">
          <button class="btn btn--sm btn--outline" data-module="${m.id}" aria-label="Ver ficha de ${escapeHtml(m.nombre)}">
            Ficha →
          </button>
          ${m.quiz.length > 0 ? `<button class="btn btn--sm btn--primary" data-quiz="${m.id}" aria-label="Hacer quiz de ${escapeHtml(m.nombre)}">Quiz</button>` : ''}
        </div>
      </footer>
    </article>
  `;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function announce(msg, profId) {
  const live = document.getElementById(`live-${profId}`) || createLiveRegion();
  live.textContent = msg;
  setTimeout(() => (live.textContent = ""), 3000);
}

function createLiveRegion() {
  const region = document.createElement("div");
  region.className = "visually-hidden";
  region.setAttribute("aria-live", "polite");
  document.body.appendChild(region);
  return region;
}

function initDayCounter() {
  const key = "hub:entregas:completado";
  const btn = document.getElementById("btn-entregas-complete");
  if (!btn) return;

  const completed = localStorage.getItem(key) === "1";
  if (completed) btn.textContent = "✅ Entregas completadas";

  btn.addEventListener("click", () => {
    const now = completed ? "0" : "1";
    localStorage.setItem(key, now);
    btn.textContent = now === "1" ? "✅ Entregas completadas" : "Marcar entregas como completadas";
  });
}

function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("reveal--visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function bindNavToggle() {
  if (!els.navToggle || !els.navMenu) return;
  els.navToggle.addEventListener("click", () => {
    const open = els.navMenu.classList.toggle("open");
    els.navToggle.setAttribute("aria-expanded", String(open));
  });
  // Cerrar al hacer clic en un enlace (móvil)
  els.navMenu.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      els.navMenu.classList.remove("open");
      els.navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function bindTheme() {
  els.themeBtn.addEventListener("click", toggleTheme);
}

function bindFichaModal() {
  if (!els.modalFicha || !els.modalFichaClose || !els.modalFichaContent) return;

  els.modalFichaClose.addEventListener("click", closeFicha);

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-module]");
    if (btn) {
      const id = btn.getAttribute("data-module");
      openFicha(id);
    }

    const btnQuiz = e.target.closest("[data-quiz]");
    if (btnQuiz) {
      const id = btnQuiz.getAttribute("data-quiz");
      openQuiz(id);
    }

    const btnProgreso = e.target.closest(".btn-progreso");
    if (btnProgreso) {
      const id = btnProgreso.getAttribute("data-progreso");
      toggleProgreso(id);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (els.modalFicha.classList.contains("modal--open")) closeFicha();
      if (els.modalQuiz.classList.contains("modal--open")) closeQuiz();
    }
  });

  els.modalFicha.addEventListener("click", (e) => {
    if (e.target === els.modalFicha) closeFicha();
  });

  els.modalQuiz.addEventListener("click", (e) => {
    if (e.target === els.modalQuiz) closeQuiz();
  });
}

function openFicha(id) {
  const m = moduloPorId(id);
  if (!m || !els.modalFicha || !els.modalFichaContent) return;

  const docenteColor =
    DOCENTES.find((d) => d.id === m.docenteId)?.color || "#9ba7ce";

  const lista = (arr) =>
    arr.length
      ? `<ul class="ficha-lista">${arr.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`
      : '<p class="ficha-vacio">Sin datos cargados aún.</p>';

  const recursosLista = m.recursos.length
    ? `<ul class="ficha-lista">${m.recursos
        .map((r) => `<li><a href="${escapeHtml(r.url)}" target="_blank" rel="noopener">${escapeHtml(r.nombre)}</a></li>`)
        .join("")}</ul>`
      : '<p class="ficha-vacio">Sin datos cargados aún.</p>';

  const evidenciasLista = m.evidencias.length
    ? `<ul class="ficha-lista">${m.evidencias
        .map(
          (e) =>
            `<li><strong>${escapeHtml(e.tipo)}:</strong> ${escapeHtml(e.descripcion)}${
              e.url && e.url !== "#" ? ` <a href="${escapeHtml(e.url)}" target="_blank" rel="noopener">ver enlace</a>` : ""
            }</li>`
        )
        .join("")}</ul>`
      : '<p class="ficha-vacio">Sin datos cargados aún.</p>';

  const quizLista = m.quiz.length
    ? `<ol class="ficha-lista">${m.quiz
        .map(
          (q, i) =>
            `<li><strong>P${i + 1}. ${escapeHtml(q.pregunta)}</strong><br>Respuesta: ${escapeHtml(q.opciones[q.respuesta])}</li>`
        )
        .join("")}</ol>`
      : '<p class="ficha-vacio">Sin datos cargados aún.</p>';

  els.modalFichaContent.innerHTML = `
    <div class="ficha-header" style="border-left:4px solid ${docenteColor};">
      <div class="ficha-meta" style="display:flex;align-items:center;gap:10px;">
        <span class="ficha-docente-dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${docenteColor}"></span>
        <span class="ficha-docente">${escapeHtml(m.docente)}</span>
      </div>
      <h2 class="ficha-titulo">${escapeHtml(m.nombre)}</h2>
      <p class="ficha-area">${escapeHtml(m.area)} · Nivel ${escapeHtml(m.nivel)}</p>
    </div>
    <p class="ficha-descripcion">${escapeHtml(m.descripcion)}</p>

    <div class="ficha-seccion">
      <h3 class="ficha-subtitulo">Instrumentos</h3>
      ${lista(m.instrumentos)}
    </div>
    <div class="ficha-seccion">
      <h3 class="ficha-subtitulo">Programas</h3>
      ${lista(m.programas)}
    </div>
    <div class="ficha-seccion">
      <h3 class="ficha-subtitulo">Herramientas</h3>
      ${lista(m.herramientas)}
    </div>
    <div class="ficha-seccion">
      <h3 class="ficha-subtitulo">Recursos</h3>
      ${recursosLista}
    </div>
    <div class="ficha-seccion">
      <h3 class="ficha-subtitulo">Evidencias</h3>
      ${evidenciasLista}
    </div>
    <div class="ficha-seccion">
      <h3 class="ficha-subtitulo">Quiz</h3>
      ${quizLista}
    </div>
  `;

  els.modalFicha.classList.add("modal--open");
  els.modalFicha.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeFicha() {
  if (!els.modalFicha) return;
  els.modalFicha.classList.remove("modal--open");
  els.modalFicha.setAttribute("aria-hidden", "true");
  els.modalFichaContent.innerHTML = "";
  document.body.style.overflow = "";
}

function bindQuizModal() {
  if (!els.modalQuiz || !els.modalQuizClose || !els.modalQuizContent) return;

  els.modalQuizClose.addEventListener("click", closeQuiz);
}

function openQuiz(id) {
  const m = moduloPorId(id);
  if (!m || !m.quiz.length || !els.modalQuiz || !els.modalQuizContent) return;

  const docenteColor =
    DOCENTES.find((d) => d.id === m.docenteId)?.color || "#9ba7ce";

  let preguntaActual = 0;
  let respuestasCorrectas = 0;
  let respondido = false;

  function renderPregunta() {
    const q = m.quiz[preguntaActual];
    const progreso = `${preguntaActual + 1} de ${m.quiz.length}`;

    els.modalQuizContent.innerHTML = `
      <div class="quiz-header" style="border-left:4px solid ${docenteColor};">
        <div class="quiz-meta" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <span class="quiz-docente">${escapeHtml(m.docente)}</span>
          <span class="quiz-progreso">${progreso}</span>
        </div>
        <h2 class="quiz-titulo">${escapeHtml(m.nombre)}</h2>
        <p class="quiz-area">${escapeHtml(m.area)} · Nivel ${escapeHtml(m.nivel)}</p>
      </div>
      <div class="quiz-pregunta">
        <h3 class="quiz-pregunta-titulo">Pregunta ${preguntaActual + 1}</h3>
        <p class="quiz-pregunta-texto">${escapeHtml(q.pregunta)}</p>
        <div class="quiz-opciones" role="radiogroup" aria-label="Opciones de respuesta">
          ${q.opciones
            .map(
              (op, i) => `
              <button type="button" class="quiz-opcion" data-opcion="${i}" data-correcta="${i === q.respuesta}">
                <span class="quiz-opcion-texto">${escapeHtml(op)}</span>
              </button>
            `
            )
            .join("")}
        </div>
        ${respondido ? `
          <div class="quiz-feedback ${parseInt(els.modalQuizContent.dataset.seleccionada || -1) === q.respuesta ? 'correcto' : 'incorrecto'}">
            ${parseInt(els.modalQuizContent.dataset.seleccionada || -1) === q.respuesta ? '¡Correcto! ' : ''}${q.explicacion}
          </div>
          <button class="quiz-siguiente btn btn--primary" data-accion="siguiente">
            ${preguntaActual === m.quiz.length - 1 ? 'Ver resultados' : 'Siguiente pregunta →'}
          </button>
        ` : ''}
      </div>
    `;
    els.modalQuizContent.dataset.seleccionada = respondido ? els.modalQuizContent.dataset.seleccionada : '';
  }

  function mostrarResultados() {
    const porcentaje = Math.round((respuestasCorrectas / m.quiz.length) * 100);
    const mensaje = porcentaje === 100 
      ? '¡Perfecto! Dominas este módulo completamente.' 
      : porcentaje >= 66 
        ? 'Buen trabajo. Repasa un poco más para dominarlo todo.' 
        : 'Necesitas repasar este módulo con más atención.';
    els.modalQuizContent.innerHTML = `
      <div class="quiz-header" style="border-left:4px solid ${docenteColor};">
        <div class="quiz-meta" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <span class="quiz-docente">${escapeHtml(m.docente)}</span>
          <span class="quiz-progreso">Completado</span>
        </div>
        <h2 class="quiz-titulo">${escapeHtml(m.nombre)}</h2>
        <p class="quiz-area">${escapeHtml(m.area)} · Nivel ${escapeHtml(m.nivel)}</p>
      </div>
      <div class="quiz-resultados">
        <div class="quiz-puntuacion">
          <span class="quiz-puntuacion-numero">${porcentaje}%</span>
          <span class="quiz-puntuacion-label">de aciertos</span>
        </div>
        <p class="quiz-mensaje">${escapeHtml(mensaje)}</p>
        <p class="quiz-detalle">${respuestasCorrectas} de ${m.quiz.length} respuestas correctas.</p>
        <button class="quiz-cerrar btn btn--primary" data-accion="cerrar">Cerrar</button>
      </div>
    `;
  }

  els.modalQuizContent.addEventListener("click", (e) => {
    const opcion = e.target.closest("[data-opcion]");
    if (opcion && !respondido) {
      const esCorrecta = opcion.dataset.correcta === "true";
      if (esCorrecta) respuestasCorrectas++;
      respondido = true;
      els.modalQuizContent.dataset.seleccionada = opcion.dataset.opcion;
      renderPregunta();
      return;
    }

    const btn = e.target.closest("[data-accion]");
    if (btn) {
      const accion = btn.dataset.accion;
      if (accion === "siguiente") {
        if (preguntaActual === m.quiz.length - 1) {
          mostrarResultados();
        } else {
          preguntaActual++;
          respondido = false;
          delete els.modalQuizContent.dataset.seleccionada;
          renderPregunta();
        }
      } else if (accion === "cerrar") {
        closeQuiz();
      }
    }
  });

  renderPregunta();

  els.modalQuiz.classList.add("modal--open");
  els.modalQuiz.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeQuiz() {
  if (!els.modalQuiz) return;
  els.modalQuiz.classList.remove("modal--open");
  els.modalQuiz.setAttribute("aria-hidden", "true");
  els.modalQuizContent.innerHTML = "";
  document.body.style.overflow = "";
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
