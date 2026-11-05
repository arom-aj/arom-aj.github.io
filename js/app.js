/**
 * HUB 3DS·B — Aplicación principal
 * Responsabilidades:
 *  - Navegación por profesor (Javier Mineros / Arcides Canales)
 *  - Render de módulos desde data/modulos.js
 *  - Búsqueda en tiempo real y filtros por nivel
 *  - Tema claro/oscuro persistido
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
  renderProfesor(STATE.activeProfesor);
  observeReveals();
  initDayCounter();
}

function applyTheme() {
  const isLight = STATE.theme === "light";
  els.html.classList.toggle("light", isLight);
  els.themeBtn.setAttribute("aria-pressed", String(isLight));
  els.themeBtn.textContent = isLight ? "☀️" : "🌙";
}

function toggleTheme() {
  STATE.theme = STATE.theme === "dark" ? "light" : "dark";
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

function renderProfesor(profId) {
  const modulos = modulosPorDocente(profId);
  const grid = els.moduleGrids[profId];
  const searchInput = els.searches[profId];
  const countEl = els.counts[profId];
  const live = els.liveRegions[profId];
  const chips = els.chips[profId];

  if (!grid) return;

  function filtrarYRender() {
    const q = STATE.query.toLowerCase();
    const nivel = STATE.nivel;

    const filtrados = modulos.filter((m) => {
      const matchQuery =
        m.nombre.toLowerCase().includes(q) ||
        m.docente.toLowerCase().includes(q) ||
        m.descripcion.toLowerCase().includes(q) ||
        m.herramientas.some((h) => h.toLowerCase().includes(q)) ||
        m.programas.some((p) => p.toLowerCase().includes(q));

      const matchNivel = nivel === "todos" || m.nivel === nivel;
      return matchQuery && matchNivel;
    });

    grid.innerHTML = filtrados.map(buildCard).join("");

    if (countEl) countEl.textContent = filtrados.length;
    if (live) {
      live.textContent = `${filtrados.length} módulo${
        filtrados.length !== 1 ? "s" : ""
      } de ${modulos.length}`;
    }

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

  return `
    <article class="module-card reveal" data-nivel="${m.nivel}">
      <div class="module-card__header">
        <span class="module-card__id">${escapeHtml(m.id)}</span>
        <span class="module-card__doc" style="--doc-color: ${docenteColor}">
          <span class="dot" style="background:${docenteColor}"></span>
          ${escapeHtml(m.docente)}
        </span>
      </div>
      <h3 class="module-card__title">${escapeHtml(m.nombre)}</h3>
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
        <button class="btn btn--sm btn--outline" data-module="${m.id}" aria-label="Ver ficha de ${escapeHtml(m.nombre)}">
          Ficha →
        </button>
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
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && els.modalFicha.classList.contains("modal--open")) {
      closeFicha();
    }
  });

  els.modalFicha.addEventListener("click", (e) => {
    if (e.target === els.modalFicha) closeFicha();
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

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
