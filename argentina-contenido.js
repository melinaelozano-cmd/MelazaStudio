/* ==========================================================================
   PROYECTO 5 — ARGENTINA FUERTE · branding (Photoshop + Illustrator)
   Caso corto, sin investigación. Mismo formato que Mesa (clases .mz-*):
   ficha de datos · 01 Presentación · 02 Desafíos · 03 Identidad · 04 Aplicaciones.
   Los textos y datos salen de la información del Behance del proyecto.
   ========================================================================== */
(function () {
  const p = PROJECTS[4];

  p.name = "Argentina Fuerte";
  p.heroTitle = ["ARGENTINA", "FUERTE"];           // título de la portada: Baskerville, mayúsculas, dos líneas
  p.category = "Branding · Identidad visual";
  p.description = "Argentina Fuerte es una empresa dedicada a la venta de nueces de macadamia. Su objetivo es llevar a las personas hacia un estilo de vida más saludable, demostrándoles que es posible lograrlo cambiando pequeños hábitos. Este proyecto consistió en la creación de su identidad visual.";
  p.cover = "assets/af-circulo.jpg";            // pelota de la Home y selector (recorte sin líneas del marco)
  p.images[0] = "assets/af-circulo.jpg";        // círculo de la portada

  const A = "assets/";
  const DIM = {"af-logotipos.jpg": [1800, 1400], "af-etiquetas.jpg": [1800, 421], "af-tarjeta.jpg": [1800, 1158], "af-tarjetas-mockup.jpg": [2000, 1070], "af-tote.jpg": [2000, 1290], "af-cartel.jpg": [2000, 1058], "af-vidriera.jpg": [2000, 1092], "af-circulo.jpg": [744, 744]};   // medidas reales: reservan el espacio antes de cargar la imagen
  const img = (file, alt, h) => `<img class="af-img" src="${A}${file}" alt="${alt}" width="${DIM[file][0]}" height="${DIM[file][1]}" decoding="async"${h ? ` style="--h:${h}"` : ''}>`;
  const head = (n, t) => `<div class="mz-head"><span class="n">${n}</span><h2>${t}</h2></div>`;

  /* Paleta (valores del manual de marca). El tamaño de cada muestra baja según su jerarquía:
     primarios (grande) > secundarios (mediano) > de acento (chico). */
  const PAL = [
    ["Colores primarios", "lg", [["#e8ddc7", "#1a335e"], ["#1a335e", "#e8ddc7"], ["#edd596", "#1a335e"]]],
    ["Colores secundarios", "md", [["#80411c", "#e8ddc7"], ["#80c5ec", "#1a335e"]]],
    ["Colores de acento", "sm", [["#676733", "#e8ddc7"], ["#3c5225", "#e8ddc7"], ["#dba147", "#1a335e"]]]
  ];
  const ABC = "a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>1 2 3 4 5 6 7 8 9 0";

  p.mesaPanels = function () {   // mismo gancho que usa Mesa: reemplaza todo lo que sigue a la portada
    const tools = (p.tools || []).map(k => TOOLS[k]).filter(Boolean);
    const out = [];

    /* Primera pantalla: descripción · imagen principal · ficha técnica (con los programas) */
    out.push(`
    <section class="panel mz mz-info">
      <div class="mz-desc reveal">
        <span class="label">Descripción general</span>
        <p class="mz-lead">${p.description}</p>
      </div>
      <div class="mz-screens reveal" style="--d:.12s"><img class="af-img af-main" src="${A}af-vidriera.jpg" alt="Logotipo de Argentina Fuerte en la vidriera de un local" width="2000" height="1092"></div>
      <dl class="mz-ficha reveal" style="--d:.2s">
        <div><dt class="label">Proyecto</dt><dd>Argentina Fuerte</dd></div>
        <div><dt class="label">Categoría</dt><dd>Branding<br>Identidad visual</dd></div>
        <div><dt class="label">Rubro</dt><dd>Nueces de<br>macadamia</dd></div>
        <div class="mz-progs">
          <dt class="label">Programas utilizados</dt>
          <dd class="mz-progs-row">${tools.map(t => `<span class="sq" role="img" aria-label="${t.name}" title="${t.name}" style="--img:url('${t.image}')"></span>`).join('')}</dd>
        </div>
      </dl>
    </section>`);

    /* 01 · Presentación y desafíos (en una sola sección) */
    out.push(`
    <section class="panel mz af-pres">
      <div class="mz-introl reveal">
        ${head("01", "Presentación")}
        <span class="label">Objetivo</span>
        <p class="mz-lead">Desarrollar la identidad visual de Argentina Fuerte, con el propósito de fortalecer a los ciudadanos del país mediante productos de alta calidad para su nutrición y la de sus hijos.</p>
        <p class="mz-body" style="margin-top:1.1rem">La marca busca ser percibida como una empresa que prioriza a sus clientes y que se asocia de inmediato con la nutrición y la salud.</p>
      </div>
      <div class="af-chal">
        <span class="label reveal">Desafíos</span>
        <div class="af-cards stag">
          <article class="af-card reveal" style="--d:.1s"><span class="num">01</span><h3>Diferenciarse de la competencia</h3><p>Lograr una identidad propia y reconocible frente a otras marcas del mismo rubro.</p></article>
          <article class="af-card reveal" style="--d:.2s"><span class="num">02</span><h3>Mantener una identidad nacional sin parecer un partido político</h3><p>Representar lo argentino desde el diseño, cuidando que el sistema visual no remita a una bandera ni a una fuerza política.</p></article>
        </div>
      </div>
    </section>`);

    /* 03 · Identidad: logotipo y sus reducciones */
    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        ${head("02", "Identidad")}
        <span class="label">Logotipo y sus reducciones</span>
        <p class="mz-lead">El logotipo y sus reducciones permitidas, ordenadas de mayor a menor nivel de detalle.</p>
      </div>
      <div class="reveal" style="--d:.12s">${img('af-logotipos.jpg', 'Logotipo de Argentina Fuerte y sus reducciones en cuatro colores', 'calc(var(--mh) * .86)')}</div>
    </section>`);

    /* Tipografías y paleta (con código, con los datos del manual de marca) */
    out.push(`
    <section class="panel mz af-specp">
      <div class="af-spec">
        <div class="af-box reveal">
          <span class="label">Tipografías</span>
          <div class="af-ty">
            <div class="b"><b>Baskerville Pro Bold</b><span>${ABC}</span></div>
            <div class="g"><b style="font-weight:400">Century Gothic Regular</b><span>${ABC}</span></div>
            <div class="g bold"><b>Century Gothic Regular</b><span>${ABC}</span></div>
          </div>
        </div>
        <div class="af-box reveal" style="--d:.1s">
          <span class="label">Paleta de colores</span>
          <div class="af-pal">
            ${PAL.map(([t, sz, cs]) => `<div><h5>${t}</h5><div class="af-sw ${sz}">${cs.map(([bg, fg]) => `<i style="background:${bg};color:${fg}">${bg}</i>`).join('')}</div></div>`).join('')}
          </div>
        </div>
      </div>
    </section>`);

    /* 03 · Aplicaciones: etiquetas arriba, business card abajo */
    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        ${head("03", "Aplicaciones")}
        <span class="label">Piezas de la marca</span>
        <p class="mz-lead">Diseño de la etiqueta de las nueces y de la tarjeta de presentación.</p>
      </div>
      <div class="af-stack">
        <div class="af-grp reveal" style="--d:.1s"><h3 class="af-t">Etiquetas</h3>${img('af-etiquetas.jpg', 'Etiquetas octogonales de las nueces: frente, historia, ingredientes y contacto', 'calc(var(--mh) * .2)')}</div>
        <div class="af-grp reveal" style="--d:.2s"><h3 class="af-t">Business card</h3>${img('af-tarjeta.jpg', 'Tarjeta de presentación de Argentina Fuerte, frente y dorso', 'calc(var(--mh) * .5)')}</div>
      </div>
    </section>`);

    /* 04 · Caso aplicado: la marca en uso, con la vista previa del Instagram de la empresa */
    const IG = "https://www.instagram.com/argentinafuerte/";
    out.push(`
    <section class="panel mz af-case p-proto">
      <div class="mz-introl af-case-txt reveal">
        ${head("04", "Caso aplicado")}
        <span class="label">La marca en uso</span>
        <p class="mz-lead">El branding es un trabajo en conjunto entre Melaza y el dueño de la marca: una base sólida para que pueda crear su propio contenido, siempre dentro de la estética y las guidelines que pactamos al diseñar la identidad.</p>
        <p class="mz-body" style="margin-top:1.1rem">En Melaza Studio no solo creamos conceptos: creamos obras que permiten el desarrollo futuro de las empresas. Hoy, Argentina Fuerte crece como empresa a partir de nuestra propuesta.</p>
        <a class="af-ig-link" href="${IG}" target="_blank" rel="noopener">Ver @argentinafuerte en Instagram <i aria-hidden="true">↗</i></a>
      </div>
      <div class="frame af-ig reveal" style="--d:.12s" data-proto>
        <iframe src="${IG}embed" title="Instagram de Argentina Fuerte" loading="lazy" allowtransparency="true"></iframe>
        <button class="shield" type="button"><span>Hacer clic para recorrer el Instagram</span></button>
      </div>
    </section>`);

    /* 05 · Galería (la imagen del subte va al final) */
    out.push(`
    <section class="panel mz af-mock">
      <div class="mz-introl reveal">
        ${head("05", "Galería")}
      </div>
      <div class="af-gal">
        <img class="reveal g1" src="${A}af-tarjetas-mockup.jpg" alt="Pilas de tarjetas de presentación de Argentina Fuerte" width="2000" height="1070" decoding="async">
        <img class="reveal g2" style="--d:.1s" src="${A}af-tote.jpg" alt="Bolsa de tela con el logotipo de Argentina Fuerte" width="2000" height="1290" decoding="async">
        <img class="reveal g3" style="--d:.2s" src="${A}af-cartel.jpg" alt="Cartel de Argentina Fuerte en una estación de subte" width="2000" height="1058" decoding="async">
      </div>
    </section>`);

    return out;
  };
})();
