/* ==========================================================================
   PROYECTO 4 — BEBEMI · motion graphics (empresa ficticia)
   Mismo formato que Mesa y Argentina Fuerte (clases .mz-* y .af-*): portada con el botón
   "Ver proyecto final" · ficha · 01 Presentación · 02 Personaje ·
   03 Concepto de animación · 04 Storyboard · 05 Animación final (video).
   Los textos y las imágenes salen de la memoria del TP (Lozano_Melina_Memoria_TP01.pdf) y el
   video es Lozano_Melina_Rigg_TP01.mp4. El comportamiento (hover, storyboard que cambia de
   cuadro) está en proyecto.html.
   ========================================================================== */
(function () {
  const p = PROJECTS[3];

  p.name = "BeBeMi";
  p.logo = "assets/bebemi-logo.png";            // logo de la marca (se muestra en blanco en la cabecera, como los demás)
  p.category = "Motion graphics · Animación de personaje";
  p.tools = ["aftereffects", "illustrator"];
  p.description = "BeBeMi es una marca ficticia de indumentaria infantil high-end cuyo lema es «La ternura de crecer». Este proyecto de motion graphics le da vida a Bemi, el pequeño conejo que representa su espíritu, en una animación de 21 segundos que termina con el logotipo de la marca.";
  p.cover = "assets/bebemi-circulo.jpg";          // pelota de la Home y selector
  p.images[0] = "assets/bebemi-circulo.jpg";      // círculo de la portada
  p.video = "https://youtu.be/PuAQD-eccFY";        // animación final (YouTube)
  p.protoId = "bebemi-video";                     // ancla del botón "Ver proyecto final"

  const A = "assets/";
  const DIM = {
    "bb-moodboard.jpg": [1312, 1199], "bb-bemi.jpg": [780, 1810]
  };
  const img = (file, alt, h) => `<img class="af-img" src="${A}${file}" alt="${alt}" width="${DIM[file][0]}" height="${DIM[file][1]}" decoding="async"${h ? ` style="--h:${h}"` : ''}>`;
  const head = (n, t) => `<div class="mz-head"><span class="n">${n}</span><h2>${t}</h2></div>`;
  /* Paleta (códigos de la memoria): círculos de mayor a menor tamaño (--d = fracción del círculo más grande) */
  const PAL = [["#ff6f61", "#fff", 1], ["#fa8072", "#fff", .82], ["#f4a6a6", "#5a1d1d", .66], ["#ffdab9", "#5a1d1d", .52], ["#bae8e5", "#1d4a47", .4]];

  /* Poses del personaje (y la zanahoria) en círculos orgánicos. x / y / d están en unidades de --H (alto del grupo).
     La descripción sale al pasar el mouse (o al tocar). Textos basados en el storyboard. */
  const POSES = [
    { n: "Pose sentado", f: "bb-pose-sentado.jpg", x: 0, y: .2, d: .56, t: "Pose de apertura: Bemi sentado y tranquilo al comenzar la animación (escena 1)." },
    { n: "Pose de pie y caminata", f: "bb-pose-pie.jpg", x: .6, y: 0, d: .62, t: "Se usa cuando Bemi se pone de pie y camina olfateando su entorno con curiosidad (escenas 1 y 2)." },
    { n: "Pose agarrando", f: "bb-pose-agarrando.jpg", x: 1.26, y: .38, d: .5, t: "Pose de la escena 3: Bemi se agacha y toma la zanahoria." }
  ];

  /* Concepto de animación: solo se ve el título; la descripción aparece con el hover */
  const CONC = [
    ["Ternura y cercanía", "Sus movimientos, acompañados por una morfología redonda y simple, buscan transmitir la ternura, cercanía e inocencia propias de la niñez."],
    ["Curiosidad y energía", "Se trabajó con movimientos y transiciones ligeramente más rápidos, que contrastan con la suavidad de su apariencia y representan la curiosidad y energía de Bemi al explorar, sobre todo cuando descubre la zanahoria y se acerca rápidamente para tomarla."],
    ["Un cierre lúdico", "La «i» del nombre tiene un punto diseñado como una pequeña cara de conejo, que se desplaza mediante pequeños saltos hasta incorporarse al título. Un elemento propio de la identidad cobra vida y se integra nuevamente al nombre de la marca."]
  ];

  /* Storyboard: una sola imagen que va cambiando entre los 4 cuadros */
  const SB = [
    ["Escena 1", "La animación comienza con Bemi sentado y tranquilo. Al finalizar la apertura de escena, marcada por un movimiento de cámara hacia abajo, Bemi mira hacia arriba y se incorpora, poniéndose de pie."],
    ["Escena 2", "Bemi comienza a caminar y olfatea su entorno con curiosidad, explorando el espacio en busca de algo nuevo que descubrir."],
    ["Escena 3", "La escena comienza con un zoom hacia la zanahoria, que aparece en el lado derecho de la imagen. A continuación, vemos a Bemi acercarse caminando hacia ella, agacharse y tomarla, para luego levantarla."],
    ["Escena 4", "La animación concluye con un paneo que introduce el logo en cuadro. La «i», representada por la pequeña cara de conejo, salta hasta ocupar su lugar, completando visualmente el nombre BeBeMi."]
  ];

  p.mesaPanels = function () {   // mismo gancho que Mesa y Argentina Fuerte: reemplaza todo lo que sigue a la portada
    const tools = (p.tools || []).map(k => TOOLS[k]).filter(Boolean);
    const out = [];

    /* Primera pantalla: descripción · imagen principal · ficha técnica (con los programas) */
    out.push(`
    <section class="panel mz mz-info">
      <div class="mz-desc reveal">
        <span class="label">Descripción general</span>
        <p class="mz-lead">${p.description}</p>
      </div>
      <div class="bb-hero reveal" style="--d:.12s"><img class="cut" src="${A}bb-bemi-recorte.png" alt="Bemi, el conejo de BeBeMi" width="677" height="1772"></div>
      <dl class="mz-ficha reveal" style="--d:.2s">
        <div><dt class="label">Proyecto</dt><dd>BeBeMi</dd></div>
        <div><dt class="label">Categoría</dt><dd>Motion graphics<br>Animación de personaje</dd></div>
        <div><dt class="label">Rubro</dt><dd>Indumentaria infantil<br>(empresa ficticia)</dd></div>
        <div><dt class="label">Duración</dt><dd>21 segundos</dd></div>
        <div class="mz-progs">
          <dt class="label">Programas utilizados</dt>
          <dd class="mz-progs-row">${tools.map(t => `<span class="sq" role="img" aria-label="${t.name}" title="${t.name}" style="--img:url('${t.image}')"></span>`).join('')}</dd>
        </div>
      </dl>
    </section>`);

    /* 01 · Presentación: la marca, el target, la paleta (círculos) y el moodboard visual */
    out.push(`
    <section class="panel mz af-pres">
      <div class="mz-introl reveal">
        ${head("01", "Presentación")}
        <span class="label">La marca</span>
        <p class="mz-lead">Una marca de indumentaria infantil high-end que combina delicadeza, elegancia y confort, con una estética minimalista y atemporal.</p>
        <span class="label" style="margin-top:1.4rem">Target</span>
        <p class="mz-body">Padres, madres y familias ABC1 de niños de 0 a 8 años que buscan indumentaria infantil de calidad, cómoda y estética.</p>
      </div>
      <div class="af-box bb-palbox reveal" style="--d:.1s">
        <span class="label">Paleta de colores</span>
        <div class="bb-dots">${PAL.map(([bg, fg, k]) => `<div class="bb-dot" style="--k:${k}"><i style="background:${bg};color:${fg}"></i><b>${bg}</b></div>`).join('')}</div>
      </div>
      <div class="af-grp reveal" style="--d:.2s"><h3 class="af-t">Moodboard visual</h3>${img('bb-moodboard.jpg', 'Moodboard visual de BeBeMi: bolsas de papel con lunares y moños en coral y menta', 'calc(var(--mh) * .8)')}</div>
    </section>`);

    /* 02 · Personaje: Bemi y sus poses en círculos (con la zanahoria) */
    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        ${head("02", "Personaje")}
        <span class="label">Bemi</span>
        <p class="mz-lead">Bemi es el pequeño conejito que representa el espíritu de BeBeMi: se mueve con curiosidad y transmite la ternura propia de la infancia.</p>
      </div>
      <div class="af-grp reveal" style="--d:.2s">
        <h3 class="af-t">Poses</h3>
        <div class="bb-poses" role="group" aria-label="Poses de Bemi y la zanahoria: pasá el mouse para ver para qué se usó cada una">
          ${POSES.map(o => `<div class="bb-pose${o.small ? ' small' : ''}" tabindex="0" style="--x:${o.x};--y:${o.y};--d:${o.d}" aria-label="${o.n}. ${o.t}">
            <img src="${A}${o.f}" alt="${o.n}" width="900" height="900" decoding="async">
            <span class="info"><b>${o.n}</b><span>${o.t}</span></span>
          </div>`).join('')}
        </div>
      </div>
    </section>`);

    /* 03 · Concepto de animación: títulos; la descripción aparece con el hover */
    out.push(`
    <section class="panel mz af-pres">
      <div class="bb-col">
        <div class="bb-top reveal">
          ${head("03", "Concepto de animación")}
        </div>
        <div class="bb-how reveal" style="--d:.05s"><span class="label">Cómo se cuenta</span><p class="mz-body">La animación transmite la identidad de BeBeMi a través de Bemi: curioso y tierno, siempre explorando lo que lo rodea.</p></div>
        <div class="bb-hop up reveal" style="--d:.1s" role="group" aria-label="Concepto de animación: pasá el mouse por cada salto para leerlo">
          <svg class="path" viewBox="0 0 900 360" preserveAspectRatio="none" aria-hidden="true"><path d="M0 340 C 70 340, 90 292, 162 292 C 290 292, 330 186, 450 186 C 570 186, 610 80, 738 80 C 810 80, 830 22, 900 22" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="11 15" stroke-linecap="round"/></svg>
          ${CONC.map(([t, d], i) => `<div class="bb-node n${i + 1}" tabindex="0"><span class="orb"><b>${t}</b></span><span class="bubble">${d}</span></div>`).join('')}
        </div>
      </div>
    </section>`);

    /* 04 · Storyboard: una imagen que cambia entre los 4 cuadros */
    out.push(`
    <section class="panel mz af-id">
      <div class="bb-sb2 reveal" data-bbsb>
        <div class="bb-sb-img">${SB.map((s, i) => `<img src="${A}bb-esc${i + 1}.jpg" alt="Storyboard, ${s[0].toLowerCase()}" width="1884" height="598" decoding="async"${i ? '' : ' class="on"'}>`).join('')}</div>
        <div class="bb-sb-nav" role="tablist" aria-label="Escenas del storyboard">${SB.map((s, i) => `<button type="button" role="tab" aria-selected="${i ? 'false' : 'true'}" class="${i ? '' : 'on'}">${i + 1}</button>`).join('')}</div>
        <div class="row">
          <div class="l">${head("04", "Storyboard")}<span class="label">Cuatro escenas</span></div>
          <div class="bb-sb-txt" aria-live="polite">${SB.map((s, i) => `<div${i ? '' : ' class="on"'}><span class="label">${s[0]}</span><p class="mz-body">${s[1]}</p></div>`).join('')}</div>
        </div>
      </div>
    </section>`);

    /* 05 · Animación final (video) */
    out.push(`
    <section class="panel mz mz-protosec p-proto" id="${p.protoId}">
      <div class="mz-protowrap reveal">
        <div class="mz-head row"><span class="n">05</span><h2>Animación final</h2></div>
        <div class="frame mz-frame bb-vid">
          ${ytFacade(p.video, A + 'bebemi-poster.jpg', 'Animación final de BeBeMi')}
        </div>
      </div>
    </section>`);

    return out;
  };
})();
