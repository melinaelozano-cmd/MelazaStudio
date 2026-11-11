/* ==========================================================================
   PROYECTO 1 — DUAL · fashion film experimental (Jean Paul Gaultier, proyecto universitario)
   Mismo formato que los demás (clases .mz-*, .af-*, .bb-*, .dm-*): portada · ficha · 01 Presentación ·
   02 La marca · 03 Personajes · 04 Dirección de arte · 05 Guión (libro) · 06 El film.
   Textos e imágenes: DOSSIER_DIGITAL.pdf (UADE · Contenidos Audiovisuales). El film terminado todavía no está:
   cuando lo tengas, pegá su link de YouTube en p.video.
   ========================================================================== */
(function () {
  // Este proyecto ocupa el lugar del primero de la lista (el que antes era la plantilla vacía "2")
  const p = PROJECTS[1];

  p.name = "DUAL";
  p.category = "Fashion film · Montaje";
  p.tools = ["aftereffects", "photoshop"];
  p.description = "DUAL es un fashion film experimental inspirado en Jean Paul Gaultier. Parte de la confrontación entre dos identidades, Blanc y Noir, que evolucionan hasta fusionarse en una tercera identidad común. Explora la tensión entre los extremos como metáfora de la moda y de la vida.";
  p.logo = "assets/du-logo.png";                     // logo de DUAL (blanco, se ve sobre el rojo)
  p.cover = "assets/du-circulo.jpg";
  p.images[0] = "assets/du-circulo.jpg";
  p.video = "https://youtu.be/C5kgW_kmFHU";          // film terminado (YouTube)
  p.protoId = "dual-video";

  const A = "assets/";
  const head = (n, t) => `<div class="mz-head"><span class="n">${n}</span><h2>${t}</h2></div>`;
  const hp = '<i class="hp lt" aria-hidden="true"></i>';
  const img = (f, alt, w, h, hh) => `<img class="af-img" src="${A}${f}" alt="${alt}" width="${w}" height="${h}" decoding="async" loading="lazy" style="--h:${hh}">`;

  const ART = [
    ["Blanco", "Asociado a pureza, inocencia y calma. En psicología del color representa vacío, comienzo, perfección fría. Su uso refuerza la delicadeza y vulnerabilidad de la figura blanca.", "#FFFFFF", "#202126"],
    ["Negro", "Vinculado a misterio, elegancia y poder. Representa densidad, control y magnetismo. La figura negra se vuelve escultural, firme y enigmática.", "#202126", "#FFFFFF"],
    ["Rojo", "Color de pasión, peligro y energía vital. Transmite intensidad, tensión y clímax emocional. Se introduce progresivamente hasta saturar la escena, marcando el momento de unión y disolución de opuestos.", "#E70A0A", "#FFFFFF"]
  ];
  const VALUES = [
    ["Libertad creativa", "Desafiar los códigos establecidos."], ["Dualidad estética", "Convivir entre opuestos, abrazar el contraste."],
    ["Expresión corporal", "El cuerpo como arquitectura viva."], ["Provocación sensible", "Belleza en la contradicción, elegancia en la diferencia."]
  ];
  const TM_BRAND = [
    ["Valores", "Autenticidad, diversidad, sensualidad y libertad de expresión. Invita a escucharse a uno mismo y a encontrar equilibrio entre los propios extremos, celebrando la identidad como un espacio libre y cambiante."],
    ["Público objetivo", "Personas que valoran la moda como forma de autoexpresión y empoderamiento, con interés por el arte, la cultura y las tendencias disruptivas. Un público de mentalidad abierta, que busca piezas con identidad."],
    ["Tono comunicacional", "Audaz, provocador y poético. Combina una elegancia rebelde con un lenguaje visual teatral y emocional."]
  ];
  const BOOK = ["du-guion-1.jpg", "du-guion-2.jpg", "du-guion-3.jpg", "du-guion-4.jpg"];

  p.mesaPanels = function () {
    const tools = (p.tools || []).map(k => TOOLS[k]).filter(Boolean);
    const out = [];

    out.push(`
    <section class="panel mz mz-info">
      <div class="mz-desc reveal">
        <span class="label">Descripción general</span>
        <p class="mz-lead">${p.description}</p>
      </div>
      <div class="mz-screens reveal" style="--d:.12s;width:clamp(260px,34vw,520px)"><img class="af-img af-main" style="aspect-ratio:auto;object-fit:contain;max-height:calc(var(--mh) * .82);width:100%" src="${A}du-poster.jpg" alt="Afiche de DUAL, un fashion film experimental, en una cartelera urbana" width="2000" height="1333"></div>
      <dl class="mz-ficha reveal" style="--d:.2s">
        <div><dt class="label">Proyecto</dt><dd>DUAL</dd></div>
        <div><dt class="label">Categoría</dt><dd>Fashion film<br>experimental</dd></div>
        <div><dt class="label">Marca</dt><dd>Jean Paul Gaultier</dd></div>
        <div><dt class="label">Duración</dt><dd>3 minutos</dd></div>
        <div><dt class="label">Mi rol</dt><dd>Montaje</dd></div>
        <div class="mz-progs">
          <dt class="label">Programas utilizados</dt>
          <dd class="mz-progs-row">${tools.map(t => `<span class="sq" role="img" aria-label="${t.name}" title="${t.name}" style="--img:url('${t.image}')"></span>`).join('')}</dd>
        </div>
      </dl>
    </section>`);

    /* 01 · Presentación */
    out.push(`
    <section class="panel mz af-pres">
      <div class="mz-introl reveal">
        ${head("01", "Presentación")}
        <span class="label">Concepto</span>
        <p class="mz-lead">Explora la tensión entre los extremos como metáfora de la moda y de la vida. A través de los contrastes se revela que los opuestos no existen para enfrentarse, sino para dialogar.</p>
      </div>
      <div class="af-chal">
        <div class="af-cards zig">
          <article class="af-card reveal" style="--d:.1s"><span class="num">01</span><h3>Sinopsis</h3><p>En un espacio infinito, dos figuras opuestas habitan realidades separadas. Blanc, etérea y serena, representa la calma, la pureza y la distancia. Noir, firme y enigmática, encarna la fuerza, el misterio y el magnetismo oscuro. Al encontrarse, sus identidades se desdibujan y las diferencias se disuelven, dando origen a una nueva forma donde ya no existen opuestos.</p></article>
          <article class="af-card reveal" style="--d:.2s"><span class="num">02</span><h3>Tratamiento</h3><p>Cada una vive inmersa en su propio universo hasta que atraviesan sus límites. Blanc gana firmeza y Noir descubre la ligereza. Cuando se encuentran, los destellos rojos crecen y borran los contornos de sus identidades: al final, la luz roja domina el espacio y solo quedan siluetas que laten al mismo compás.</p></article>
        </div>
      </div>
    </section>`);

    /* 02 · La marca: logo + valores bajo el título, y un mini moodboard simétrico */
    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        ${head("02", "La marca")}
        <img class="du-jpg" src="${A}du-jpg-logo.png" alt="Jean Paul Gaultier" width="1119" height="405">
        <p class="mz-lead">Una casa de moda francesa reconocida por su espíritu transgresor y vanguardista: el cuerpo como territorio de exploración y libertad.</p>
        <p class="mz-body" style="margin-top:1rem">Clásico y provocador, artesanal y teatral. Siempre en tensión entre estructura y fluidez, fuerza y delicadeza, deseo y control.</p>
        <div class="du-vals"><span class="label">Valores que transmite</span>${VALUES.map(([t, d]) => `<p class="mz-body"><b>${t}.</b> ${d}</p>`).join('')}</div>
      </div>
      <div class="du-mood reveal" style="--d:.1s" aria-label="Looks de la marca">
        <img src="${A}du-gj-a.jpg" alt="Look de Jean Paul Gaultier: abrigo negro oversize con camisa blanca y corbata" width="700" height="1050" decoding="async" loading="lazy">
        <img src="${A}du-gj-b.jpg" alt="Look de Jean Paul Gaultier: sombrero negro, chaleco y pantalón de pierna ancha" width="700" height="1050" decoding="async" loading="lazy">
        <img src="${A}du-gj-c.jpg" alt="Look de Jean Paul Gaultier: saco estructurado con capucha blanca" width="700" height="1050" decoding="async" loading="lazy">
        <img src="${A}du-gj-d.jpg" alt="Look de Jean Paul Gaultier: abrigo blanco entallado" width="700" height="1050" decoding="async" loading="lazy">
        <img src="${A}du-gj-e.jpg" alt="Look de Jean Paul Gaultier: pollera larga de denim y camisa transparente negra" width="700" height="1050" decoding="async" loading="lazy">
      </div>
    </section>`);

    /* 03 · Personajes: texto siempre visible, con las imágenes integradas */
    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        ${head("03", "Personajes")}
        <span class="label">Blanc y Noir</span>
        <p class="mz-lead">Dos identidades opuestas que se encuentran en un espacio infinito y se funden en una tercera.</p>
      </div>
      <div class="du-sq">
        <article class="sq blanc reveal" style="--d:.1s"><img src="${A}du-tm-kit4.jpg" alt="Blanc, de pie y vestida de blanco" width="656" height="819" decoding="async" loading="lazy"><div class="tx"><b>BLANC</b><span>Pureza · calma</span><p>Piel, ropa y cabello pálidos. Silueta frágil pero elegante, casi espectral. Representa la pureza y la calma. Es serena, distante, inaccesible. Perfección fría.</p></div></article>
        <article class="sq noir reveal" style="--d:.2s"><img src="${A}du-tm-kit2.jpg" alt="Noir, con sombrero, entre las sombras" width="1120" height="1400" decoding="async" loading="lazy"><div class="tx"><b>NOIR</b><span>Fuerza · misterio</span><p>Ropa oscura y con líneas rectas y marcadas. Sombrero y sombras cubren su rostro. Presencia misteriosa e intimidante. Representa el vacío. Segura, enigmática, controladora, con un magnetismo inquietante.</p></div></article>
      </div>
      </section>`);

    /* 04 · Dirección de arte */
    out.push(`
    <section class="panel mz af-id">
      <div class="du-stack">
        <div class="mz-introl reveal">
          ${head("04", "Dirección de arte")}
          <span class="label">Estética visual</span>
          <p class="mz-lead">Un universo abstracto y minimalista donde la progresión cromática —blanco y negro hacia el rojo absoluto— visualiza el recorrido dramático de las siluetas.</p>
        </div>
        <div class="du-trip reveal" style="--d:.1s">
          ${ART.map(([t, d, c, f], i) => `<article class="c${i + 1}" style="--cc:${c};--cf:${f}"><small>${c}</small><h3>${t}</h3><p>${d}</p></article>`).join('')}
        </div>
      </div>
      <div class="reveal" style="--d:.3s"><span class="label" style="display:block;margin-bottom:.6rem">Moodboard</span>${img('du-moodboard.jpg', 'Moodboard: Blanc sobre blanco, Noir sobre negro y clímax rojo', 1794, 1117, 'calc(var(--mh) * .6)')}</div>
    </section>`);

    /* 05 · Guión: libro que se abre y se hojea */
    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        ${head("05", "Guión")}
        <span class="label">Guión literario</span>
        <p class="mz-body">Cuatro páginas con la progresión del film: intro, primer verso, estribillo, segundo verso y outro. Hacé clic para agrandarlo y pasar las páginas como en un libro.</p>
      </div>
      <button class="du-cover reveal" type="button" style="--d:.1s" data-book="${BOOK.join(',')}" aria-label="Ver preview del guión literario de DUAL: se abre a pantalla completa">
        <img src="${A}${BOOK[0]}" alt="Portada del guión literario de DUAL" width="1250" height="1760" decoding="async" loading="lazy">
        <span class="pv-chip">Ver preview</span>
      </button>
    </section>`);

    /* 06 · Campaña transmedia (TP2): concepto, kit fotográfico, microvideos, TikTok, experiencia phygital y mockups urbanos */
    const pic = (f, alt, w, h) => `<img src="${A}du-tm-${f}.jpg" alt="${alt}" width="${w}" height="${h}" decoding="async" loading="lazy">`;
    out.push(`
    <section class="panel mz af-pres">
      <div class="mz-introl reveal">
        ${head("06", "Campaña transmedia")}
        <span class="label">Concepto rector · #Duality</span>
        <p class="mz-lead">Esa misma tensión entre polos se traslada a la vida cotidiana: todos habitamos dualidades. Somos suaves y fuertes, caóticos y serenos, vulnerables y firmes.</p>
        <p class="mz-body" style="margin-top:1.1rem">La belleza no está en elegir un solo extremo, sino en moverse entre ellos, combinarlos. La campaña invita a cada persona a escucharse a sí misma y reconocer su propio equilibrio entre extremos.</p>
      </div>
      <div class="du-plain reveal" style="--d:.1s">
        ${TM_BRAND.map(([t, d]) => `<div><h4>${t}</h4><p>${d}</p></div>`).join('')}
      </div>
      <div class="reveal" style="--d:.2s"><img class="af-img" style="--h:calc(var(--mh) * .66)" src="${A}du-tm-kit7.jpg" alt="Silueta roja de la campaña transmedia de DUAL" width="1040" height="1299" decoding="async" loading="lazy"></div>
    </section>`);

    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        <span class="label">Kit promocional fotográfico</span>
        <p class="mz-lead">Ocho imágenes donde Blanc y Noir transitan una transformación: de la oposición a la fusión total.</p>
        <p class="mz-body" style="margin-top:1rem">Cada fotografía representa un estado emocional —la vulnerabilidad inicial, la fuerza que observa, la búsqueda de equilibrio— hasta la aparición del rojo como símbolo de unión y escucha interior.</p>
      </div>
      <div class="du-kit reveal" style="--d:.1s">${['kit4','kit1','kit2','kit5','kit3','kit6','kit7','kit8'].map((k, i) => `<figure class="k${i + 1}">${pic(k, 'Fotografía ' + (i + 1) + ' del kit promocional de DUAL', 600, 700)}</figure>`).join('')}</div>
    </section>`);

    out.push(`
    <section class="panel mz af-id">
      <div class="du-poster-s big reveal"><span class="label">Afiche</span><img src="${A}du-afiche.jpg" alt="Afiche de DUAL: un fashion film experimental" width="1100" height="1572" decoding="async" loading="lazy"></div>
    </section>`);

    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        <span class="label">Experiencia phygital</span>
        <p class="mz-lead">Una instalación inmersiva que combina cuerpo, movimiento y tecnología.</p>
        <p class="mz-body" style="margin-top:1rem">En una sala vacía, dos paredes cubiertas por cortinas plegadas, una blanca y otra negra, con una luz proyectada del mismo tono. Al acercarse, el visitante descubre su silueta en el color opuesto; el movimiento activa un efecto de ondas y, si es rápido, la silueta se vuelve roja hasta teñir toda la proyección: la fusión de los extremos. La sala está perfumada con un perfume de Jean Paul Gaultier.</p>
      </div>
      <div class="du-ph reveal" style="--d:.1s">${pic('ph6', 'Silueta roja y ondas proyectadas en la experiencia phygital', 512, 768)}${pic('ph4', 'Sala de la experiencia phygital con dos cortinas, una blanca y una negra', 1400, 933)}${pic('ph5', 'Visitante frente a su silueta proyectada en rojo', 717, 1076)}</div>
    </section>`);

    out.push(`
    <section class="panel mz af-id">
      <div class="du-gal reveal">
        <div class="gt"><h2>Galería</h2><span class="label">Piezas en el espacio público</span></div>
        <figure class="lb-img" tabindex="0" role="button" aria-label="Agrandar la foto" data-full="${A}du-tm-urb1.jpg">${pic('urb1', 'Mockup de cartelera urbana de DUAL x Jean Paul Gaultier', 1080, 810)}</figure>
        <figure class="lb-img" tabindex="0" role="button" aria-label="Agrandar la foto" data-full="${A}du-tm-urb2.jpg">${pic('urb2', 'Afiche de DUAL en una parada de colectivo', 1050, 1400)}</figure>
        <figure class="lb-img" tabindex="0" role="button" aria-label="Agrandar la foto" data-full="${A}du-tm-urb3.jpg">${pic('urb3', 'Afiche de DUAL en una cartelera de la calle', 899, 945)}</figure>
      </div>
    </section>`);

    /* El film */
    out.push(`
    <section class="panel mz mz-protosec p-proto" id="${p.protoId}">
      <div class="mz-protowrap reveal">
        <div class="mz-head row"><span class="n">07</span><h2>El film</h2></div>
        <div class="frame mz-frame bb-vid">
          ${p.video ? ytFacade(p.video, A + 'du-sinopsis.jpg', 'DUAL, fashion film') : `<img class="dm-soon" src="${A}du-sinopsis.jpg" alt="DUAL" width="1713" height="1091"><span class="dm-soon-chip">El film se suma acá</span>`}
        </div>
      </div>
    </section>`);

    return out;
  };
})();
