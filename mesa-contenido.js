/* ==========================================================================
   PROYECTO 8 — MESA · interior del caso de estudio
   La primera pantalla (portada, descripción y datos) la arma proyecto.html como en
   los demás trabajos. Todo lo que viene después sale de p.mesaPanels(), que devuelve
   un array de <section class="panel"> con el diseño propio de Mesa.
   ========================================================================== */
(function () {
  const p = PROJECTS[7];

  p.description = "Sistema POS para gastronomía diseñado desde las necesidades reales del salón y la cocina: investigación de campo, benchmark, flujos y pruebas de usabilidad para reducir errores en momentos de alta demanda.";

  /* Prototipo de Figma que se muestra al final (es el que ya estaba en el sitio).
     Para cambiarlo, pegá acá la URL del prototipo final de Mesa. */
  p.prototype = "https://www.figma.com/proto/jHVf5VfzUlPTVYnE4X8akb/TP3-INT-III--Copy-?node-id=701-10572&p=f&viewport=-5151%2C2021%2C0.44&t=Kg1sdRs75GLtFLe4-1&scaling=contain&content-scaling=fixed&starting-point-node-id=701%3A10572&page-id=701%3A10571";
  p.protoId = "mesa-proto";            // ancla del botón "Ver proyecto"

  const TOUCH = matchMedia('(hover: none)').matches;

  /* ---------- Datos ---------- */
  const ICO = {
    hobbies: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3.6 8.5c4 1 7 4 8.4 8M20.4 15.5c-4-1-7-4-8.4-8M7 4.5c1.4 3 1.4 6.5 0 10"/></svg>',
    edad:    '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
    genero:  '<svg viewBox="0 0 24 24"><circle cx="10" cy="14" r="5.5"/><path d="M14 10l6-6M15 4h5v5"/></svg>',
    oficio:  '<svg viewBox="0 0 24 24"><rect x="3" y="7.5" width="18" height="12.5" rx="2.5"/><path d="M9 7.5V5.5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 5.5v2M3 13h18"/></svg>'
  };

  const PERSONAS = [
    {
      name: "Carlos Martínez", quote: "Lo barato sale caro.", img: "assets/mesa-carlos.png",
      perfil: [["hobbies", "Hobbies", "Cocinar<br>Escuchar música rock<br>Mirar TV"], ["edad", "Edad", "59 años"], ["genero", "Género", "Masculino"], ["oficio", "Profesión", "Cocinero"]],
      bio: "Su trabajo de todos los días requiere extrema precisión y atención al detalle. Valora la tranquilidad y la concentración en lo que mejor sabe hacer, buscando evitar cualquier factor externo que altere su ritmo de trabajo.",
      ideal: "Necesita sistemas de apoyo que sean extremadamente visuales, directos y limpios, que no requieran curva de aprendizaje ni navegación compleja para que pueda integrarlos orgánicamente sin perder su valioso enfoque.",
      skills: "Dominio de la memoria muscular, intuición, comprensión tecnológica básica.",
      motiv: "Mantener calidad impecable en lo que produce, encontrar un equilibrio en sus jornadas.",
      frus: "Las interfaces digitales confusas, el desgaste físico e ineficiente que implica tener que documentar todo a mano cuando la carga de tareas acumuladas es muy alta.",
      obj: "Delegar la carga administrativa o el registro de datos para poder abocarse al 100% en la ejecución de su oficio.",
      metas: "Disminuir su estrés diario ocasionado por la sobrecarga de pendientes."
    },
    {
      name: "Hugo Vázquez", quote: "Aprender a fluir también es crecer.", img: "assets/mesa-hugo.png",
      perfil: [["hobbies", "Hobbies", "Fútbol<br>Streaming<br>HIIT training"], ["edad", "Edad", "25 años"], ["genero", "Género", "Masculino"], ["oficio", "Profesión", "Mesero (cafetería)"]],
      bio: "Trabaja jornadas intensas en una cafetería concurrida, donde debe atender varias mesas al mismo tiempo manteniendo rapidez, precisión y buena atención al cliente.",
      ideal: "Necesita velocidad, claridad y recuperación rápida de errores en un entorno de trabajo exigente y dinámico, por lo que depende de herramientas intuitivas que no interrumpan su flujo de trabajo.",
      skills: "Uso intermedio de pantallas táctiles; capacidad de usar el sistema con una sola mano mientras trabaja.",
      motiv: "Mantener todo funcionando de manera ágil y dar una buena experiencia incluso bajo presión.",
      frus: "Perder tiempo por procesos innecesarios y tener que corregir errores evitables.",
      obj: "Crecer profesionalmente mientras desarrolla rapidez, organización y confianza en su trabajo diario.",
      metas: "Reducir errores en momentos de alta demanda y optimizar la gestión de pedidos para trabajar con mayor fluidez."
    }
  ];

  const BENCH = [
    {
      name: "Fudo", kind: "Sistema POS", logo: "assets/mesa-fudo.png", steps: "9",
      desc: "Software online para gestión de restaurantes, bares, cafeterías, dark kitchens, y todo tipo de negocios gastronómicos con mesas, delivery o take away.",
      design: "Presenta una estética minimalista y profesional con una paleta de colores coherente que facilita el reconocimiento de los estados de las mesas fácilmente. Utiliza una estructura de navegación sencilla para evitar menús profundos, aunque en pantallas de carga de productos el flujo de retroceder puede generar clics innecesarios si el menú es muy extenso.",
      pain: [
        ["Seguimiento del pedido", ["El aviso de cocina es visual (un botón que titila), pero “imperceptible” y sin sonido, lo que afecta la comunicación salón-cocina.", "La actualización del pedido en cocina no es inmediata."]],
        ["Cierre del pedido y pago", ["La imposibilidad de eliminar un solo ítem de la cuenta obliga a borrar el artículo y sus cantidades completas, penalizando el error y aumentando el tiempo de tarea.", "El software no agrupa artículos iguales para dividir cuentas grandes, obligando al mozo a una división manual lenta y propensa a errores."]]
      ],
      gain: [
        ["Registro de pedido", ["Al usar nombres personalizados (la carta del local), el mozo no debe aprender rotulaciones o sistemas de etiquetado extra.", "El mapa de mesas con códigos de color (rojo para mesa ocupada, celeste a la espera del cobro, y verde para mesa libre) permite un escaneo rápido del salón."]],
        ["Extra", ["Los resúmenes estadísticos detallados para el dueño (promedios por horario, medios de pago) son un valor agregado."]]
      ]
    },
    {
      name: "Maxirest", kind: "Sistema POS", logo: "assets/mesa-maxirest.png", steps: "12",
      desc: "Maxirest es un software de gestión que asiste en la administración y operatividad de tu negocio gastronómico.",
      design: "En este sistema viejo que evaluamos, la identidad es maxalista y saturada. Aunque no tiene un alto nivel estético, permite a los trabajadores entenderlo. La navegación nativa de la app integra menús profundos de hasta 3 niveles, lo que complejiza el flujo.",
      pain: [
        ["Cierre de caja", ["Aunque el sistema guarda la información del arqueo de caja, cuando se reinicia el programa, se tiene que ingresar manualmente el valor del arqueo de caja que había quedado."]]
      ],
      gain: [
        ["Registro de pedido", ["Se pueden registrar los pedidos de manera fácil. El sistema permite una alta personalización, lo cual habilita que, si hay un error en el nombre, se pueda cambiar en el momento.", "Los botones de los pedidos se visualizan y organizan según el usuario, lo que facilita el registro del pedido."]],
        ["Seguimiento del pedido", ["Las mesas cambian de color cuando están esperando el pedido y otro color cuando esperan la cuenta.", "Cuando se mandan los pedidos a cocina, es claro para el mozo cuándo estos están listos para llevar."]],
        ["Cierre del pedido y pago", ["Gran personalización de pago y división de cuentas. Permite elegir libremente los productos a cobrar, cambiar precios y nombres en el momento, aplicar descuentos o incluso registrarlos a un cliente regular."]],
        ["Extra", ["Integra Pedidos Ya, Mercado Pago y muchas billeteras virtuales. La cocina es un usuario extra en el sistema. Presenta estadísticas de alta claridad y con un alto nivel de personalización."]]
      ]
    },
    {
      name: "Pedidos Ya", kind: "Delivery", logo: "assets/mesa-pedidosya.png", steps: "3",
      desc: "Empresa líder de delivery rápido en LATAM. Funciona a través de una app móvil, conectando a usuarios con todo tipo de locales para envíos a domicilio.",
      design: "Diseño moderno y minimalista, con una identidad visual clara. Aporta mucha información balanceando el uso de espacios para mejorar la legibilidad. Paleta simple y clara. Previene los menús complejos con un flujo claro y simple. Deja espacios para descansar la vista.",
      pain: [
        ["General", ["La aplicación tiene muchos pop-ups y notificaciones de recomendaciones para agregar promociones o descuentos, lo que entorpece el flujo del usuario.", "Tiene muchas actualizaciones con numerosos cambios que desorientan al usuario."]]
      ],
      gain: [
        ["Registro de pedido", ["El registro es automático y la aplicación es clara para mostrar esta información."]]
      ]
    }
  ];

  const REQS = [
    "Implementar un sistema de etiquetado basado en verbos de acción clara",
    "Crear distinción visual entre tareas operativas y administrativas",
    "Sistema de notificaciones multisensoriales de alto impacto para informar el estado de los pedidos",
    "Permitir la edición personalizada de ítems ante errores de cantidad",
    "Incorporar indicadores visuales tras acciones críticas"
  ];

  const HEUR = [
    ["4", "Consistencia y estándares", "Se utilizan los estándares de las aplicaciones de POS, respaldado por la investigación de campo realizada en la etapa de benchmark. Dentro de la aplicación se utilizan distintos formatos para los mismos componentes."],
    ["7", "Flexibilidad y eficiencia de uso", "No hay shortcuts en el sistema."],
    ["9", "Reconocer, diagnosticar y recuperarse de los errores", "Hay mensajes de error que explican lo sucedido en el lenguaje apropiado para el usuario. Sin embargo, no se ofrecen soluciones, solo una notificación."]
  ];

  /* Tablas de eficiencia (clics y tiempo) y eficacia por tarea */
  const TAB_CLICS = [["5","6","14","6","9","8"],["10","4","5","4","4","5,4"],["10","11","13","7","33","14,8"],["3","3","3","3","3","3"],["14","14","17","17","32","18,8"]];
  const TAB_TIEMPO = [["36s","51s","310s","171s","118s","137s"],["52s","10s","29s","18s","9s","23,6s"],["34s","34s","62s","52s","69s","50,2s"],["6s","7s","10s","16s","4s","8,6s"],["26s","41s","65s","82s","32s","49,2s"]];
  const TAB_EFICACIA = [["1","1","0","1","1","0,80"],["1","1","1","1","1","1"],["1","1","1","1","1","1"],["1","1","1","1","1","1"],["1","1","0","0","1","0,60"]];

  /* ---------- Helpers de HTML ---------- */
  /* Encabezado de sección: el MISMO tamaño de número y de título en todas (.mz-head) */
  const head = (n, t) => `<div class="mz-head"><span class="n">${n}</span><h2>${t}</h2></div>`;

  const table = (title, rows) => `
    <div class="mz-tab">
      <table>
        <thead><tr><th></th><th>U1</th><th>U2</th><th>U3</th><th>U4</th><th>U5</th><th>Promedio</th></tr></thead>
        <tbody>${rows.map((r, i) => `<tr><th><span>Tarea ${i + 1}</span></th>${r.map((v, k) => `<td${k === 5 ? ' class="avg"' : ''}>${v}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>`;

  const bulletsHtml = groups => groups.map(([k, items]) => `
      <div class="mz-grp"><em>${k}:</em><ul>${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('');

  /* Doble diamante con vértices redondeados (se genera, para que quede igual que en Figma) */
  function diamondSvg() {
    const rnd = (pts, r) => {
      let d = `M${pts[0][0]} ${pts[0][1]}`;
      for (let i = 1; i < pts.length - 1; i++) {
        const [px, py] = pts[i - 1], [cx, cy] = pts[i], [nx, ny] = pts[i + 1];
        const l1 = Math.hypot(cx - px, cy - py), l2 = Math.hypot(nx - cx, ny - cy);
        const a = [cx + (px - cx) / l1 * r, cy + (py - cy) / l1 * r], b = [cx + (nx - cx) / l2 * r, cy + (ny - cy) / l2 * r];
        d += ` L${a[0].toFixed(1)} ${a[1].toFixed(1)} Q${cx} ${cy} ${b[0].toFixed(1)} ${b[1].toFixed(1)}`;
      }
      const e = pts[pts.length - 1]; return d + ` L${e[0]} ${e[1]}`;
    };
    const A = [50, 100], E = [360, 100], M = [205, 100], T1 = [128, 30], T2 = [283, 30], B1 = [128, 170], B2 = [283, 170];
    const top = rnd([A, T1, M, T2, E], 16);
    const bot = rnd([A, B1, M, B2, E], 16);
    return `
        <svg class="dia-svg" viewBox="0 0 410 215" role="img" aria-label="Doble diamante: Descubrir, Definir, Desarrollar, Entregar">
          <g class="dia-t"><text x="89" y="12">Descubrir</text><text x="166" y="12">Definir</text><text x="244" y="12">Desarrollar</text><text x="321" y="12">Entregar</text></g>
          <g fill="none" stroke="#FAFAFA" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="${top}"/><path d="${bot}"/></g>
          <g stroke="rgba(250,250,250,.5)" stroke-width="1"><path d="M205 106 V176"/><path d="M360 112 V176"/><path d="M50 106 V176"/></g>
          <circle cx="50" cy="100" r="6.5" fill="#E8786D"/>
          <circle cx="205" cy="100" r="11" fill="rgba(232,120,109,.35)"/><circle cx="205" cy="100" r="6.5" fill="#E8786D"/>
          <circle cx="360" cy="100" r="12" fill="rgba(232,120,109,.35)"/><circle cx="360" cy="100" r="8.5" fill="#E8786D"/><circle cx="360" cy="100" r="4.2" fill="#600F08"/>
          <g class="dia-b"><text x="50" y="190">Problema</text><text x="205" y="190">Definición del</text><text x="205" y="203">Problema</text><text x="360" y="190">Solución</text></g>
        </svg>`;
  }

  p.mesaPanels = function () {
    const out = [];

    /* ===== Primera sección (tal cual Figma): descripción · pantallas · ficha · programas ===== */
    const tools = (p.tools || []).map(k => TOOLS[k]).filter(Boolean);
    out.push(`
    <section class="panel mz mz-info">
      <div class="mz-desc reveal">
        <span class="label">Descripción general</span>
        <p class="mz-lead">${p.description}</p>
      </div>
      <div class="mz-screens reveal" style="--d:.12s"><img src="assets/mesa-pantallas.png" alt="Pantallas del sistema Mesa: mapa de mesas, pedido, cobro y cierre" loading="eager"></div>
      <dl class="mz-ficha reveal" style="--d:.2s">
        <div><dt class="label">Proyecto</dt><dd>Sistema POS<br>gastronómico</dd></div>
        <div><dt class="label">Categoría</dt><dd>UX/UI<br>Diseño de producto</dd></div>
        <div><dt class="label">Duración</dt><dd>4 semanas</dd></div>
        <div><dt class="label">Año</dt><dd>2026</dd></div>
        <div class="mz-progs">
          <dt class="label">Programas utilizados</dt>
          <dd class="mz-progs-row">${tools.map(t => `<span class="sq" role="img" aria-label="${t.name}" title="${t.name}" style="--img:url('${t.image}')"></span>`).join('')}</dd>
        </div>
      </dl>
    </section>`);

    /* ===== 01 · Presentación (tal cual el diseño): objetivo · doble diamante · estrategia · branding ===== */
    out.push(`
    <section class="panel mz mz-intro">
      <div class="mz-introl reveal">
        ${head("01", "Presentación")}
        <span class="label">Objetivo</span>
        <p class="mz-lead">Abrir el panorama y empatizar con el entorno real del servicio gastronómico para diseñar un software de gestión de pedidos basándonos en necesidades reales de sus usuarios.</p>
      </div>
      <div class="mz-intror">
        <div class="mz-dia reveal" style="--d:.1s"><span class="label">Proceso de diseño - doble diamante</span>${diamondSvg()}</div>
        <div class="mz-strat reveal" style="--d:.18s"><span class="label">Estrategia</span><p class="mz-lead">La estrategia de Mesa consiste en una gestión centralizada en una terminal fija (un único dispositivo compartido), donde cada mozo se identifica según su mesa operativa.</p></div>
        <div class="mz-brandcol reveal" style="--d:.26s"><span class="label">Branding</span><div class="zoomable" tabindex="0" role="button" aria-label="Ampliar el branding de Mesa en pantalla completa" data-full="assets/mesa-branding.png"><img class="mz-brandimg" src="assets/mesa-branding.png" alt="Branding de Mesa: isotipo e isologo, concepto visual, paleta de colores y uso de color del logo" loading="lazy"><span class="lens" aria-hidden="true"></span></div></div>
      </div>
    </section>`);

    /* ===== Descripción del doble diamante + etapas + estrategia ===== */
    out.push(`
    <section class="panel mz mz-diamond">
      <div class="mz-dtxt reveal">
        <span class="label">Proceso de diseño</span>
        <p class="mz-body">Es un marco metodológico ordenado paso a paso que organiza la creatividad del diseñador para garantizar una solución funcional, estética y enfocada en el usuario.</p>
        <p class="mz-prob"><b>Problema</b> Los sistemas de gestión de pedidos de softwares gastronómicos actuales están diseñados como herramientas administrativas y no como asistentes operativos.</p>
      </div>
      <div class="mz-stages">
        ${[["1","Descubrir","Se lleva a cabo la investigación del entorno, realización de benchmark, con el objetivo de comprender el contexto, identificar oportunidades y detectar necesidades del usuario."],
           ["2","Definir","Se consolida el listado de requerimientos de la aplicación, estableciendo una base clara para el desarrollo de la solución basada en las necesidades del usuario identificadas en la etapa anterior."],
           ["3","Desarrollar","Se trabaja en la creación de flujos/flows de tareas, prototipos, evaluaciones heurísticas, pruebas de usabilidad y mejoras, iterando sobre las propuestas realizadas para mejorar la experiencia."],
           ["4","Entregar","Se consolida el prototipo final, integrando los aprendizajes y conclusiones de las etapas anteriores para dar lugar a una solución coherente y funcional."]
          ].map(([n, t, x], i) => `<article class="mz-stage reveal" style="--d:${.1 + i * .08}s"><span class="num">${n}</span><h3>${t}</h3><p>${x}</p></article>`).join('')}
      </div>
      <div class="mz-3 reveal" style="--d:.2s">
        <div><h4>Un ecosistema, un dispositivo</h4><p>Una interfaz de escritorio centraliza la operación del salón, en lugar de pantallas sueltas.</p></div>
        <div><h4>Gestión por identidad</h4><p>Todos los mozos utilizan el mismo hardware, indicando mediante la interfaz quién está gestionando cada mesa dentro del flujo de trabajo.</p></div>
        <div><h4>Escenario de uso</h4><p>La estrategia se valida en contextos de máxima presión, donde la app debe absorber el estrés permitiendo transiciones rápidas y sin errores.</p></div>
      </div>
    </section>`);

    /* ===== User personas (el hover se activa SOLO sobre el recuadro blanco) ===== */
    const persona = (pe, i) => `
      <article class="mz-persona reveal" style="--d:${.1 + i * .12}s">
        <div class="pl">
          <h3>${pe.name.replace(' ', '<br>')}</h3>
          <p class="q">${pe.quote}</p>
          <span class="qm" aria-hidden="true">”</span>
          <img src="${pe.img}" alt="${pe.name}" loading="lazy">
        </div>
        <div class="pc hv" tabindex="0" aria-label="Perfil de ${pe.name}: pasá el mouse o tocá para ver todo">
          <div class="pc-in">
            <div class="c1">
              <div class="pc-main">
                <h4>Perfil</h4>
                <div class="perfil">${pe.perfil.map(([ic, k, v]) => `<div><i>${ICO[ic]}</i><b>${k}</b><span>${v}</span></div>`).join('')}</div>
                <span class="more-hint"><i class="hp" aria-hidden="true"></i>${TOUCH ? "Tocá para ver más" : "Pasá el mouse para ver más"}</span>
              </div>
              <div class="pc-rest">
                <section><h4>Biografía</h4><p>${pe.bio}</p></section>
                <section><h4>Persona ideal</h4><p>${pe.ideal}</p></section>
                <section><h4>Habilidades</h4><p>${pe.skills}</p></section>
              </div>
            </div>
            <div class="c2 pc-rest">
              <section><h4>Motivaciones</h4><p>${pe.motiv}</p></section>
              <section><h4>Frustraciones</h4><p>${pe.frus}</p></section>
              <section><h4>Objetivos</h4><p>${pe.obj}</p></section>
              <section><h4>Metas</h4><p>${pe.metas}</p></section>
            </div>
          </div>
        </div>
      </article>`;
    out.push(`
    <section class="panel mz mz-personas">
      <div class="mz-ptitle reveal"><span class="label">Definición de objetivos</span><h2>User personas</h2></div>
      <div class="mz-plist">${PERSONAS.map(persona).join('')}</div>
    </section>`);

    /* ===== 02 · Análisis benchmark: el título va ARRIBA de "Estrategia" ===== */
    out.push(`
    <section class="panel mz mz-bench-intro">
      <div class="mz-col reveal">
        ${head("02", "Análisis Benchmark")}
        <span class="label">Estrategia</span>
        <p class="mz-lead"><b>Escenario + meta:</b><br>Un viernes por la noche, con el local al 100% de su capacidad, el mozo debe abrir una mesa para 4 personas, registrar una ronda de bebidas y 4 platos principales, y enviar la comanda a cocina mientras se desplaza hacia otra mesa que solicita la cuenta.</p>
        <p class="mz-lead gap">Evaluar el número de clics y el tiempo de respuesta necesarios para completar un comando desde la apertura de mesa hasta el pago final.</p>
      </div>
    </section>`);

    /* Las tres apps: se expanden con hover (en táctil, con un toque) */
    const bench = (b, i) => `
      <article class="mz-bench reveal" style="--d:${.1 + i * .1}s">
        <div class="bh"><span class="lg"><img src="${b.logo}" alt="${b.name}"></span><div><h3>${b.name}</h3><span class="kind">${b.kind}</span></div></div>
        <div class="bc" aria-expanded="false" tabindex="0" role="group" aria-label="${b.name}: pasá el mouse para ver más">
          <div class="bc-top">
            <h4>Descripción</h4><p>${b.desc}</p>
            <h4>Pasos para lograr la meta</h4><div class="steps-n">${b.steps}</div>
          </div>
          <div class="bc-more"><div class="bc-more-in">
            <h4>Diseño</h4><p>${b.design}</p>
            <h4>Entrevista - Pain Points</h4>${bulletsHtml(b.pain)}
            <h4>Entrevista - Gain Points</h4>${bulletsHtml(b.gain)}
          </div></div>
          <div class="bc-hint"><i></i><b>${TOUCH ? "Tocá" : "Pasá el mouse"} para ver más descripción</b></div>
        </div>
      </article>`;
    out.push(`<section class="panel mz mz-benchs">${BENCH.map(bench).join('')}</section>`);

    /* ===== 03 · Requisitos: título al INICIO y abajo, recuadros escalonados en stack ===== */
    out.push(`
    <section class="panel mz mz-reqs">
      <div class="mz-reqhead reveal">${head("03", "Requisitos")}<p class="hint">${TOUCH ? 'Tocá un recuadro para destacarlo' : 'Pasá el mouse por los recuadros'}</p></div>
      <div class="mz-stack reveal" id="req-stack" style="--d:.1s" aria-label="Listado de requerimientos">
        ${REQS.map((t, i) => `<button type="button" class="rq" style="--i:${i}" data-i="${i}"><span class="rn">${i + 1}.</span><span class="rt">${t}</span></button>`).join('')}
      </div>
    </section>`);

    /* ===== 04 · Análisis del primer prototipo (heurísticas) ===== */
    out.push(`
    <section class="panel mz mz-heur">
      <div class="mz-heurhead reveal">${head("04", "Análisis primer prototipo")}</div>
      <div class="mz-heurcol reveal" style="--d:.1s">
        <span class="label">Heurísticas no cumplidas</span>
        ${HEUR.map(([n, t, x]) => `<article class="hc"><h3>${n}. ${t}</h3><b>NO CUMPLE</b><p>${x}</p></article>`).join('')}
      </div>
    </section>`);

    /* ===== Testeos: eficiencia y eficacia (más aire entre bloques) ===== */
    out.push(`
    <section class="panel mz mz-tests">
      <div class="mz-testcol reveal">
        <span class="label">Eficiencia y eficacia</span>
        <div class="mz-tabs">
          <div class="mz-box mz-eff">
            <div class="mz-tab-bar">Eficiencia</div>
            <div class="mz-eff-in">
              <div><span class="sub">Cantidad de clics</span>${table("clics", TAB_CLICS)}</div>
              <div><span class="sub">Tiempo por tarea</span>${table("tiempo", TAB_TIEMPO)}</div>
            </div>
          </div>
          <div class="mz-box mz-eficacia">
            <div class="mz-tab-bar">Eficacia</div>
            ${table("eficacia", TAB_EFICACIA)}
          </div>
          <div class="mz-analisis"><span class="label">Análisis</span><p class="mz-lead">Identificamos problemas de alta gravedad para la usabilidad de puntos claves del recorrido. Esto permitió crear un segundo MVP optimizado y mejorado, adaptado a las necesidades puntuales de los usuarios.</p></div>
        </div>
      </div>
    </section>`);

    /* ===== 05 · Prototipo final (Figma) ===== */
    const src = p.prototype.replace('://www.figma.com/', '://embed.figma.com/') + '&embed-host=share';
    out.push(`
    <section class="panel mz mz-protosec p-proto" id="${p.protoId}">
      <div class="mz-protowrap reveal">
        <div class="mz-head row"><span class="n">05</span><h2>Prototipo final</h2></div>
        <div class="frame mz-frame" data-proto>
          <iframe src="${src}" title="Prototipo final de Mesa (Figma)" allowfullscreen loading="lazy"></iframe>
          <button class="shield" type="button"><span>Hacer clic para interactuar</span></button>
        </div>
      </div>
    </section>`);

    return out;
  };
})();
