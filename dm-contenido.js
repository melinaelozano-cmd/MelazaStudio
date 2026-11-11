/* ==========================================================================
   PROYECTO 6 — DR. MARTENS × THE GREAT FROG · motion graphics (colaboración)
   Mismo formato que los demás (clases .mz-*, .af-*, .bb-*): portada con el botón
   "Ver proyecto final" · ficha · 01 Presentación · 02 Las marcas · 03 Dirección de arte ·
   04 Storyboard · 05 Planos · 06 Animación final.
   Textos e imágenes: memoria del TP02 (TP02_Lozano-_Virasoro_Memoria.pdf).
   El video final todavía no está: cuando lo tengas, copialo a assets/ y escribí su ruta en p.video.
   ========================================================================== */
(function () {
  const p = PROJECTS[5];

  p.name = "Dr. Martens × The Great Frog";
  p.logo = "assets/dm-logo.png";                  // logos de ambas marcas (con su silueta, tal cual la memoria)
  p.logoKeep = true;                               // no se pinta de blanco
  p.category = "Motion graphics";
  p.tools = ["photoshop", "aftereffects"];
  p.description = "Pieza promocional de 30 segundos para la colaboración entre Dr. Martens y The Great Frog, bajo el mensaje «Born to be different». Combina el carácter rebelde de Dr. Martens con la estética oscura, rockera y artesanal de The Great Frog, en una ciudad nocturna recorrida por una moto roja.";
  p.cover = "assets/dm-circulo.jpg";               // pelota de la Home y selector
  p.images[0] = "assets/dm-circulo.jpg";           // círculo de la portada
  p.protoId = "dm-video";                          // ancla del botón "Ver proyecto final"
  p.video = "https://youtu.be/GTBB0ug4Q-g";        // animación final (YouTube; también acepta Vimeo o un archivo .mp4 en assets/)
  /* Propuesta sonora: pegá acá el link de la canción en Spotify (en Spotify: ··· → Compartir → Copiar enlace de la canción).
     Mientras esté vacío, el reproductor muestra un acceso que abre la búsqueda de la canción en Spotify. */
  p.spotify = "https://open.spotify.com/track/4nFNJmjfgBF7jwv2oBC45b";
  p.animatic = "https://drive.google.com/file/d/1isg49cUqgIeZ-VCmoejjfDYBe_Ldox7h/view?usp=sharing";   // link del animatic (de la memoria)

  const A = "assets/";
  const DIM = {
    "dm-colab.jpg": [1400, 1621], "dm-marca-dm.jpg": [1100, 1442], "dm-marca-tgf.jpg": [1100, 1408],
    "dm-moodboard.jpg": [2000, 1124], "dm-afiches.jpg": [1192, 884], "dm-tipografia.jpg": [1600, 240],
    "dm-sonido.jpg": [1300, 1191], "dm-storyboard.jpg": [2000, 1289]
  };
  const img = (file, alt, h) => `<img class="af-img" src="${A}${file}" alt="${alt}" width="${DIM[file][0]}" height="${DIM[file][1]}" decoding="async"${h ? ` style="--h:${h}"` : ''}>`;
  const head = (n, t) => `<div class="mz-head"><span class="n">${n}</span><h2>${t}</h2></div>`;
  const hp = '<i class="hp lt" aria-hidden="true"></i>';

  /* Brief: solo se ve el título; el texto sale con el hover */
  const BRIEF = [
    ["Contexto de uso", "Promocional: una pieza consumida en redes y en carteles LED de la vía pública."],
    ["Tono", "Rebelde, rockero, potente, urbano, oscuro, exclusivo."],
    ["Público objetivo", "Adultos de entre 20 y 45 años, pertenecientes a la cultura alternativa del rock y el punk, con un profundo conocimiento de sus códigos, referentes y estéticas. Público familiarizado con la escena musical independiente, los recitales, los festivales y los espacios culturales."],
    ["Objetivo", "Presentar y promocionar la colaboración entre Dr. Martens y The Great Frog, destacando la combinación entre el carácter rebelde de Dr. Martens y la estética oscura, rockera y artesanal de The Great Frog."]
  ];

  /* Planos de la animación */
  const PL = [
    ["Plano general con tilt hacia abajo", "Arranca en un afiche pegado en un poste con posters de Dr. Martens, The Great Frog y frases acordes a la colaboración, y la cámara baja hasta la avenida mojada, de noche. Presenta el escenario: una ciudad nocturna y urbana, donde viven ambas marcas. El movimiento de cámara hacia abajo guía la mirada al piso, que es por donde va a entrar la moto en el siguiente plano."],
    ["Plano detalle", "Se ve la moto roja cruzando la avenida a lo lejos y la cámara se acerca a la rueda trasera, donde sale el texto de «A collab between» con un efecto de humo. Pasar de un plano general a un plano detalle genera cierta expectativa y concentra la mirada en la rueda. Que el texto aparezca del caño de escape se integra y refuerza la idea de movimiento."],
    ["Travelling lateral sobre la moto", "La cámara acompaña el costado de la moto, se ve la bota amarilla apoyada en el pedal y el logo de Dr. Martens sobre la rueda delantera. Muestra el producto (la bota) en uso, integrado al personaje; el logo aparece acompañando al movimiento de la rueda delantera. El travelling lateral le suma velocidad y sensación de recorrido."],
    ["Plano frontal del manubrio y la luz", "Hay un cambio de ángulo, donde la moto se muestra de frente. La luz empieza apagada, en rojo, y se enciende en blanco y revela el logo de The Great Frog. El cambio de ángulo da la sensación de que la moto viene hacia el espectador. La luz se enciende cuando el piloto mueve la mano sobre el manubrio, de modo que responde a una acción del personaje y no aparece de la nada. Además responde a un cue musical, acompañando la banda sonora y brindando coordinación visual."],
    ["Transición tipográfica", "Aparecen palabras en movimiento sobre un fondo rojo, como «Born to be different», entre otras, con un efecto de glitch que cubre la luz de la moto. Funciona como puente entre la moto y la ciudad: corta el ritmo y reinicia la mirada antes de pasar a lo que sigue. Además, resume el concepto de la pieza, ser diferente y rebelde, a través de la tipografía, con un estilo de collage punk."],
    ["Plano general de la ciudad", "Se muestran los edificios de noche. Algunos aparecen pintados de amarillo y rojo mientras la cámara se desplaza hacia abajo. Los edificios son de esos colores porque retoman los colores de la moto y de la bota. El movimiento de la cámara hacia abajo anticipa la caminata del producto principal. Todos los movimientos de cámara acompañan a la música, unificando la imagen con el sonido."],
    ["Plano detalle de las botas caminando", "Las botas de Dr. Martens caminan sobre una vereda con la ciudad de fondo. El producto pasa a ser el protagonista: el amarillo sobre el fondo negro es el mayor contraste de la imagen. Caminar transmite actitud, y el movimiento de la cámara sigue el ritmo acelerado de la música, de modo que el producto aparece en un contexto de uso y no como un objeto quieto."],
    ["Plano detalle de los afiches", "La cámara recorre una pared de ladrillos cubierta de afiches: bandas como Blur y Dire Straits, «punk!», «Rock n Roll», el afiche de The Great Frog London y uno de una bota de Dr. Martens. El recorrido termina en el cartel «Born to be different», con una bota y una estrella roja. Pasa de la calle a la pared, un soporte clásico del afiche y la cultura rock y punk. Las dos marcas conviven en el mismo muro, junto con bandas que remiten a la música de la colaboración."],
    ["Plano detalle de la bota", "Se genera una transición entre el afiche y la bota. Se utilizaron dos cámaras simultáneas para coordinar las distintas capas de la escena dentro del archivo. La transición de quemado surge del juego con el eslogan de la campaña, «Born to be different», que puede interpretarse como el renacer de una nueva personalidad. A partir de la figura del ave fénix, que renace de sus cenizas, se eligió una transición de fuego que quema el estilo caricaturesco de la bota y da paso a la bota real de la colaboración. Esta escena funciona como el fotoproducto."],
    ["Plano general de cierre", "En la escena final se muestran los logos de las marcas que integran la colaboración. Sobre un fondo plano, ambos se exhiben de forma clara, destacando la identidad de cada marca. Funciona como cierre de la pieza, reforzando la colaboración y facilitando que ambas marcas permanezcan en la memoria del espectador."]
  ];

  /* Visor con imagen que cambia (mismo comportamiento que el storyboard de BeBeMi) */
  const viewer = (cls, imgs, txts, lays, scrub) => `
      <div class="bb-sb dm-sb ${cls} reveal" data-bbsb>
        <div class="dm-l">
          <div class="bb-sb-img">${imgs.map((s, i) => `<img src="${s[0]}" alt="${s[1]}" width="1600" height="900" decoding="async" loading="lazy"${i ? '' : ' class="on"'}>`).join('')}</div>
          <div class="bb-sb-nav dm-nav" role="tablist" aria-label="Elegir plano">${imgs.map((s, i) => `<button type="button" role="tab" aria-selected="${i ? 'false' : 'true'}" aria-label="${s[1]}" data-name="${(s[2] || '').replace(/"/g, '&quot;')}" class="${i ? '' : 'on'}">${i + 1}</button>`).join('')}</div>
        </div>
        <div class="dm-r">
          ${lays ? `<div class="bb-sb-lay" aria-hidden="true">${lays.map((s, i) => `<img src="${s}" alt="" decoding="async" loading="lazy"${i ? '' : ' class="on"'}>`).join('')}</div>` : ''}
          <div class="bb-sb-txt" aria-live="polite">${txts.map((t, i) => `<div${i ? '' : ' class="on"'}><span class="label">${t[0]}</span><p class="mz-body">${t[1]}</p></div>`).join('')}</div>
        </div>
      </div>`;

  p.mesaPanels = function () {   // mismo gancho que Mesa, Argentina Fuerte y BeBeMi: reemplaza todo lo que sigue a la portada
    const tools = (p.tools || []).map(k => TOOLS[k]).filter(Boolean);
    const out = [];

    /* Primera pantalla: descripción · imagen principal · ficha técnica (con los programas) */
    out.push(`
    <section class="panel mz mz-info">
      <div class="mz-desc reveal">
        <span class="label">Descripción general</span>
        <p class="mz-lead">${p.description}</p>
      </div>
      <div class="mz-screens reveal" style="--d:.12s"><img class="af-img af-main" src="${A}dm-principal.jpg" alt="Botas de Dr. Martens caminando sobre la vereda, con la ciudad de fondo" width="1600" height="900"></div>
      <dl class="mz-ficha reveal" style="--d:.2s">
        <div><dt class="label">Proyecto</dt><dd>Dr. Martens ×<br>The Great Frog</dd></div>
        <div><dt class="label">Categoría</dt><dd>Motion graphics<br>Pieza promocional</dd></div>
        <div><dt class="label">Duración</dt><dd>30 segundos</dd></div>
        <div><dt class="label">Mi rol</dt><dd>Animación: rigging y<br>animación de personajes<br>y objetos</dd></div>
        <div><dt class="label">Con</dt><dd>Justina Virasoro<br>(dirección de arte)</dd></div>
        <div class="mz-progs">
          <dt class="label">Programas utilizados</dt>
          <dd class="mz-progs-row">${tools.map(t => `<span class="sq" role="img" aria-label="${t.name}" title="${t.name}" style="--img:url('${t.image}')"></span>`).join('')}</dd>
        </div>
      </dl>
    </section>`);

    /* 01 · Presentación: la colaboración y el brief (títulos; el texto sale con el hover) */
    out.push(`
    <section class="panel mz af-pres">
      <div class="mz-introl reveal">
        ${head("01", "Presentación")}
        <span class="label">La colaboración</span>
        <p class="mz-lead">Dr. Martens y The Great Frog se unen nuevamente en una colaboración que celebra la contracultura, el rock ’n’ roll y la autoexpresión sin límites.</p>
      </div>
      <div class="af-chal">
        <span class="label reveal">Brief del proyecto · «Born to be different»</span>
        <div class="af-cards bb-cards grid2">
          ${BRIEF.map(([t, d], i) => `<article class="af-card bb-rv hv reveal" tabindex="0" style="--d:${.08 * (i + 1)}s"><h3>${t}</h3><p>${d}</p>${hp}</article>`).join('')}
        </div>
        <p class="bb-hint">${matchMedia('(hover: none)').matches ? 'Tocá' : 'Pasá el mouse sobre'} cada título para leer más</p>
      </div>
      <div class="reveal" style="--d:.2s">${img('dm-colab.jpg', 'Botas de la colaboración Dr. Martens × The Great Frog sobre papel rasgado', 'calc(var(--mh) * .86)')}</div>
    </section>`);

    /* 02 · Las marcas (imagen + título; el texto sale con el hover) */
    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        ${head("02", "Las marcas")}
        <span class="label">Dos identidades</span>
        <p class="mz-lead">Dos marcas británicas unidas por una fuerte conexión con las comunidades alternativas y una estética que desafía las normas.</p>
      </div>
      <div class="dm-row">
        <div class="dm-tile hv reveal" tabindex="0" style="--d:.1s;--w:clamp(250px,24vw,360px)"><img src="${A}dm-marca-dm.jpg" alt="Botas de Dr. Martens en un escenario" width="1100" height="1442" decoding="async" loading="lazy"><span class="ttl"><img class="lg" src="${A}dm-logo-dm.png" alt="Dr. Martens" width="651" height="372"></span><div class="txt"><img class="lg" src="${A}dm-logo-dm.png" alt="" width="651" height="372">Atrae a personas con un estilo propio y una fuerte identidad, unidas por un espíritu auténtico y una actitud de autoexpresión. Sus siluetas simples permiten que cada persona incorpore las botas y zapatos a su estilo individual, mientras que su durabilidad y comodidad las convirtieron en un elemento clave de la cultura urbana y musical. Desde su nacimiento en la década de 1960, la marca se posicionó constantemente en contra de lo establecido, convirtiendo una bota originalmente funcional en un ícono asociado a distintas generaciones, movimientos y formas de expresión.</div>${hp}</div>
        <div class="dm-tile hv reveal" tabindex="0" style="--d:.2s;--w:clamp(250px,24vw,360px)"><img src="${A}dm-marca-tgf.jpg" alt="Anillos de calavera de The Great Frog" width="1100" height="1408" decoding="async" loading="lazy"><span class="ttl"><img class="lg" src="${A}dm-logo-tgf.png" alt="The Great Frog" width="1382" height="173"></span><div class="txt"><img class="lg" src="${A}dm-logo-tgf.png" alt="" width="1382" height="173">Mantiene los valores establecidos por sus fundadores: crear joyería audaz y llamativa, atemporal en su ejecución y poco convencional en su simbolismo. Trabaja principalmente con piezas artesanales de plata esterlina 925 y oro, inspiradas en la cultura del rock ’n’ roll y la contracultura. A través de su trabajo artesanal y sus símbolos característicos, construyó una identidad contemporánea profundamente vinculada con su herencia, convirtiendo sus piezas en objetos de expresión personal que combinan valor estético, identidad y una fuerte conexión con la cultura alternativa.</div>${hp}</div>
      </div>
    </section>`);

    /* 03 · Dirección de arte: moodboard + paleta, tratamiento de imagen, tipografía y sonido */
    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        ${head("03", "Dirección de arte")}
        <span class="label">Moodboard estético</span>
        <p class="mz-lead">Paleta, tratamiento de imagen, tipografía y sonido que unifican todos los planos en un mismo lenguaje.</p>
      </div>
      <div class="reveal" style="--d:.1s">${img('dm-moodboard.jpg', 'Moodboard estético: afiches de rock y punk y fotografías de botas Dr. Martens', 'calc(var(--mh) * .72)')}</div>
    </section>`);

    /* Paleta en burbujas · tipografía en afiche · tratamiento en tarjeta · propuesta sonora en vinilo */
    const bub = [[0, 0, 1, "#131010"], [0, 22, .82, "#7A0F0A"], [0, -6, .66, "#A49518"], [0, 26, .52, "#C6BD9C"], [0, -2, .4, "#4ED3D8"]];
    out.push(`
    <section class="panel mz af-id dm-art">
      <div class="dm-stack">
        <div class="dm-box reveal">
        <span class="label">Paleta cromática</span>
        <div class="dm-bubbles" role="group" aria-label="Paleta cromática: pasá el mouse por cada círculo">${bub.map(([x, y, k, c], i) => `<i tabindex="0" style="--k:${k};--c:${c};--i:${i};--dy:${y}px"><b>${c}</b></i>`).join('')}</div>
        <p class="mz-body">Una paleta reducida: el amarillo viene del logo de Dr. Martens, el rojo aporta la energía y la actitud rebelde de la colaboración, el celeste suma contraste y el crema da aspecto de papel viejo. El negro ocupa casi toda la pieza y hace que los demás colores se destaquen.</p>
        </div>
        <div class="dm-box dm-poster reveal" style="--d:.08s">
        <span class="label">Tipografía</span>
        <div class="sheet"><img src="${A}dm-tipografia.jpg" alt="Frases con efecto ink bleed: «Rock what you wear» y «Born to be different»" width="1600" height="240" decoding="async" loading="lazy"><em>ink bleed</em></div>
        <p class="mz-body">El efecto ink bleed simula la tinta corrida sobre el papel, con bordes irregulares y manchados, como en una impresión hecha a mano. Las letras se ven más crudas e imperfectas, en sintonía con el threshold y el grano del resto de la pieza.</p>
        </div>
      </div>
      <div class="dm-box dm-photo reveal" style="--d:.16s">
        <span class="label">Tratamiento de imagen</span>
        <figure class="pol"><img src="${A}dm-afiches.jpg" alt="Pared de afiches con tratamiento de threshold y grano" width="1192" height="884" decoding="async" loading="lazy"><i class="tape" aria-hidden="true"></i></figure>
        <p class="mz-body">Usamos threshold, grano y alto contraste, para dar el efecto de fotocopia callejera. Así seguimos la estética rock y punk de la colaboración, hacemos que el rojo y el amarillo se destaquen sobre el fondo oscuro y que todos los planos compartan un mismo lenguaje visual.</p>
      </div>
      <div class="dm-box dm-sound reveal" style="--d:.24s">
        <span class="label">Propuesta sonora</span>
        <div class="dm-vinyl" aria-hidden="true"><span class="disc"><span class="lab"><b>Money for<br>Nothing</b>Dire Straits</span></span></div>
        ${p.spotify
          ? `<iframe class="dm-spot" src="https://open.spotify.com/embed/track/${(p.spotify.match(/track\/([A-Za-z0-9]+)/) || [, p.spotify])[1]}?utm_source=generator&theme=0" width="100%" height="80" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Money for Nothing, de Dire Straits, en Spotify"></iframe>`
          : `<a class="dm-spot mini" href="https://open.spotify.com/search/Money%20for%20Nothing%20Dire%20Straits" target="_blank" rel="noopener"><span class="pl" aria-hidden="true"></span><span class="tt"><b>Money for Nothing</b>Dire Straits</span><span class="bar" aria-hidden="true"><i></i></span></a>`}
        <p class="mz-body">Elegimos «Money for Nothing», de Dire Straits: una banda de rock británica, como las marcas, con un ritmo acelerado que acompaña la velocidad de la moto y le da energía a los cortes. La guitarra, cruda y potente, refuerza la estética rock y punk de la imagen.</p>
      </div>
    </section>`);

    /* 04 · Storyboard + animatic */
    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        ${head("04", "Storyboard")}
        <span class="label">11 tomas</span>
        <p class="mz-body">La pieza se planificó en un storyboard de once tomas, desde el afiche en el poste hasta el título final.</p>
        <a class="af-ig-link" href="${p.animatic}" target="_blank" rel="noopener">Ver el animatic <i aria-hidden="true">↗</i></a>
      </div>
      <div class="reveal" style="--d:.1s">${img('dm-storyboard.jpg', 'Storyboard de once tomas: poste con afiches, moto, escape, bota, manubrio, tipografía, ciudad y título final', 'calc(var(--mh) * .84)')}</div>
    </section>`);

    /* 05 · Planos de la animación */
    out.push(`
    <section class="panel mz af-id">
      <div class="mz-introl reveal">
        ${head("05", "Planos")}
        <span class="label">Diez planos</span>
        <p class="mz-body">Cada plano del video, con qué muestra y por qué se presenta así. Todos los movimientos de cámara acompañan a la música.</p>
      </div>
      ${viewer('dm-pl', PL.map((c, i) => [`${A}dm-pl${String(i + 1).padStart(2, '0')}.jpg`, `Plano ${i + 1}: ${c[0]}`, c[0]]), PL.map((c, i) => [`Plano ${String(i + 1).padStart(2, '0')} · ${c[0]}`, c[1]]))}
    </section>`);

    /* 06 · Animación final */
    out.push(`
    <section class="panel mz mz-protosec p-proto" id="${p.protoId}">
      <div class="mz-protowrap reveal">
        <div class="mz-head row"><span class="n">06</span><h2>Animación final</h2></div>
        <div class="frame mz-frame bb-vid">
          ${(() => {
            const v = p.video || '';
            const yt = ytId(v), vm = v.match(/vimeo\.com\/(?:video\/)?(\d+)/);
            if (yt) return ytFacade(v, A + 'dm-pl10.jpg', 'Animación final de Dr. Martens × The Great Frog');
            if (vm) return `<iframe src="https://player.vimeo.com/video/${vm[1]}" title="Animación final de Dr. Martens × The Great Frog" allow="fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
            if (v) return `<video controls playsinline preload="metadata" poster="${A}dm-pl10.jpg" aria-label="Animación final de Dr. Martens × The Great Frog"><source src="${v}" type="video/mp4">Tu navegador no puede reproducir el video.</video>`;
            return `<img class="dm-soon" src="${A}dm-pl10.jpg" alt="Cierre de la animación: The Great Frog × Dr. Martens" width="1600" height="900"><span class="dm-soon-chip">El video final se suma acá</span>`;
          })()}
        </div>
      </div>
    </section>`);

    return out;
  };
})();
