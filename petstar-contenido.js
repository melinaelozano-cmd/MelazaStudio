/* ==========================================================================
   PROYECTO 3 — PETSTAR · rediseño web (grooming de perros en Nueva York)
   Mismo formato que Mesa, Argentina Fuerte y BeBeMi (clases .mz-*, .af-*): portada con el botón
   "Ver proyecto final" · ficha · 01 Presentación · 02 UI Kit · 03 Prototipo (Figma).
   El texto es el que escribiste para el proyecto; el UI Kit es la imagen assets/ps-uikit.svg.
   ========================================================================== */
(function () {
  const p = PROJECTS[2];

  p.name = "PetStar";
  p.logo = "assets/petstar-logo.png";               // logo de la marca (se muestra en blanco, como los demás)
  p.category = "UX/UI · Rediseño web";
  p.tools = ["figma"];
  p.description = "Rediseño de la página de información de una peluquería de perros en Nueva York. La propuesta nació de la necesidad del cliente de mostrar sus valores y la personalidad del negocio a través de una página web.";
  p.cover = "assets/ps-circulo.jpg";               // pelota de la Home y selector
  p.images[0] = "assets/ps-circulo.jpg";           // círculo de la portada
  p.protoId = "petstar-proto";                      // ancla del botón "Ver proyecto final"

  const A = "assets/";
  const head = (n, t) => `<div class="mz-head"><span class="n">${n}</span><h2>${t}</h2></div>`;

  p.mesaPanels = function () {   // mismo gancho que los demás proyectos
    const tools = (p.tools || []).map(k => TOOLS[k]).filter(Boolean);
    const out = [];

    /* Primera pantalla: descripción · imagen principal · ficha técnica */
    out.push(`
    <section class="panel mz mz-info">
      <div class="mz-desc reveal">
        <span class="label">Descripción general</span>
        <p class="mz-lead">${p.description}</p>
      </div>
      <dl class="mz-ficha reveal" style="--d:.2s">
        <div><dt class="label">Proyecto</dt><dd>PetStar</dd></div>
        <div><dt class="label">Categoría</dt><dd>UX/UI<br>Rediseño web</dd></div>
        <div><dt class="label">Rubro</dt><dd>Grooming de perros<br>(Nueva York)</dd></div>
        <div class="mz-progs">
          <dt class="label">Programas utilizados</dt>
          <dd class="mz-progs-row">${tools.map(t => `<span class="sq" role="img" aria-label="${t.name}" title="${t.name}" style="--img:url('${t.image}')"></span>`).join('')}</dd>
        </div>
      </dl>
    </section>`);

    /* 01 · Presentación: el texto del proyecto, en tres tarjetas */
    out.push(`
    <section class="panel mz af-pres">
      <div class="mz-introl reveal">
        ${head("01", "Presentación")}
        <span class="label">El encargo</span>
        <p class="mz-lead">Un rediseño pensado para que la página transmita los valores y la personalidad del negocio.</p>
      </div>
      <div class="af-chal">
        <div class="af-cards zig">
          <article class="af-card reveal" style="--d:.1s"><span class="num">01</span><h3>La necesidad del cliente</h3><p>Este proyecto es un rediseño de la página de información para una peluquería de perros en Nueva York. La propuesta nació a partir de la necesidad del cliente de crear una propuesta de diseño que le permitiera mostrar sus valores y la personalidad del negocio a través de una página web.</p></article>
          <article class="af-card reveal" style="--d:.2s"><span class="num">02</span><h3>La propuesta</h3><p>A partir del feedback con el cliente, creé una propuesta que no solo se alineara con los valores que buscaba transmitir el negocio, sino que también coordinara con la landing page y el resto de la identidad visual. Busqué que la página mantuviera una coherencia visual con las piezas que ya existían, pero que al mismo tiempo tuviera su propia estructura y jerarquía para presentar la información de manera clara.</p></article>
          <article class="af-card reveal" style="--d:.3s"><span class="num">03</span><h3>El equilibrio</h3><p>El proyecto se centró principalmente en encontrar un equilibrio entre identidad, funcionalidad y comunicación, utilizando el diseño como una herramienta para transmitir la personalidad del negocio y facilitar el acceso a la información para sus clientes.</p></article>
        </div>
      </div>
    </section>`);

    /* 02 · UI Kit: paleta y tipografías (a la vista) + el kit completo */
    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        ${head("02", "UI Kit")}
        <span class="label">Sistema visual</span>
        <p class="mz-body">Pasá el mouse sobre el kit para ver el detalle con la lupa; con un clic se abre en pantalla completa.</p>
      </div>
      <div class="reveal" style="--d:.1s"><div class="zoomable" tabindex="0" role="button" aria-label="Ampliar el UI Kit en pantalla completa" data-full="${A}ps-uikit.svg"><img class="af-img" style="--h:calc(var(--mh) * .92);background:#fff" src="${A}ps-uikit.svg" alt="UI Kit de PetStar: paleta, tipografías, botón, elementos y galería" width="2028" height="1793" decoding="async" loading="lazy"><span class="lens" aria-hidden="true"></span></div></div>
    </section>`);

    /* 03 · Propuesta final: la página completa en un marco 16:9 de computadora, con scroll adentro (y un clic la abre en el visor) */
    out.push(`
    <section class="panel mz mz-protosec p-proto" id="${p.protoId}">
      <div class="mz-protowrap reveal">
        <div class="mz-head row"><span class="n">03</span><h2>Propuesta final</h2></div>
        <div class="ps-prop" role="region" aria-label="Propuesta final de PetStar: página completa, desplazable">
          <div class="mz-scroll"><img src="${A}ps-propuesta.jpg" alt="Propuesta final de la página de PetStar, completa" width="779" height="2000" decoding="async"></div>
        </div>
      </div>
    </section>`);

    return out;
  };
})();
