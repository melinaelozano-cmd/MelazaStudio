/* ==========================================================================
   MELAZA STUDIO — DATOS COMPARTIDOS
   Usado por index.html (pelotas) y proyecto.html (plantilla de cada trabajo).
   Para completar un trabajo, editá los campos de su objeto en PROJECTS.
   ========================================================================== */

/* Programas disponibles (clave → nombre + ícono) */
const TOOLS = {
  indesign:     { name: "InDesign",      image: "assets/adobe_indesign.png", blurb: "Maquetación editorial. Lo uso para dar orden a zines, libros y catálogos donde conviven ilustración, fotografía y materiales escaneados." },
  lightroom:    { name: "Lightroom",     image: "assets/adobe_lightroom.png", blurb: "Revelado y color. Lo uso para dar coherencia a las fotos de mis procesos y piezas: costura, papel, tinta y pintura." },
  photoshop:    { name: "Photoshop",     image: "assets/adobe_photoshop.png", blurb: "Retoque y collage digital. Lo uso para mezclar texturas reales —papel, tela, acuarela— y pintar encima de materiales escaneados." },
  figma:        { name: "Figma",         image: "assets/figma.png", blurb: "Diseño de interfaces. Lo uso para prototipar sitios y apps donde lo digital conserva el carácter de lo hecho a mano." },
  aftereffects: { name: "After Effects", image: "assets/adobe_after_effects.png", blurb: "Animación y motion. Lo uso para dar movimiento a ilustraciones y texturas reales digitalizadas." },
  blender:      { name: "Blender",       image: "assets/blender.png", blurb: "Modelado y animación 3D. Lo uso para sumar volumen, luz y profundidad a mis piezas." },
  illustrator:  { name: "Illustrator",   image: "assets/adobe_illustrator.png", blurb: "Ilustración vectorial. Lo uso para llevar un trazo hecho a mano a formas limpias y escalables: logos, patrones y piezas gráficas." }
};

/* Correo que recibe los mensajes del formulario de contacto (proyecto.html).
   Dejalo vacío hasta definirlo: mientras tanto el formulario avisa que falta conectarlo. */
/* ----------------------------------------------------------------------------
   FORMULARIO DE CONTACTO
   1) Poné acá el mail donde querés recibir los mensajes.
   2) El primer mensaje que se envíe hace que FormSubmit (servicio gratuito, sin
      cuenta) te mande UN mail de activación a esa casilla: abrilo y confirmá.
   3) Desde ahí, cada mensaje del formulario te llega a tu bandeja de entrada
      (revisá también spam la primera vez). Al responder, contestás directo al
      mail de quien escribió.
   ---------------------------------------------------------------------------- */
const CONTACT_EMAIL = "Melinaelozano@gmail.com";

/* WhatsApp: el link abre un chat directo con este número (formato internacional, sin "+": 54 9 + característica + número) */
const CONTACT_WHATSAPP = "5491167096336";
const CONTACT_WHATSAPP_LABEL = "+54 11 6709 6336";
const whatsappURL = (texto) => `https://wa.me/${CONTACT_WHATSAPP}` + (texto ? `?text=${encodeURIComponent(texto)}` : '');

/* HTML del formulario (lo usan proyecto.html y contacto.html) */
function contactFormHTML() {
  const chips = ['Identidad de marca', 'UX / UI', 'Diseño de producto', 'Sitio web', 'Motion Graphics', 'Otros']
    .map(t => `<label class="ct-chip"><input type="checkbox" name="interes" value="${t}"><span>${t}</span></label>`).join('');
  return `
    <fieldset class="ct-chips"><legend>¿Qué querés crear?</legend>${chips}</fieldset>
    <div class="ct-row">
      <label class="ct-f"><span>Nombre</span><input name="nombre" type="text" autocomplete="name" placeholder="Tu nombre" required></label>
      <label class="ct-f"><span>Email</span><input name="email" type="email" autocomplete="email" placeholder="tu@email.com" required></label>
    </div>
    <label class="ct-f"><span>Mensaje</span><textarea name="mensaje" rows="5" placeholder="Contame tu idea, plazos o referencias" required></textarea></label>
    <input class="ct-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
    <div class="ct-foot">
      <button class="ct-send" type="submit"><b>Enviar mensaje</b><i aria-hidden="true">→</i></button>
      <p class="ct-msg" role="status" aria-live="polite"></p>
    </div>`;
}

/* Envío real: POST a FormSubmit (llega por mail). Si falla la red, abre el correo del visitante. */
async function enviarContacto(form) {
  const msg = form.querySelector('.ct-msg, .cp-msg'), btn = form.querySelector('.ct-send, .cp-send');
  const say = (t, kind) => { msg.textContent = t; msg.className = 'ct-msg ' + (kind || ''); };
  if (form._honey && form._honey.value) return;                     // anti-spam (campo trampa)
  const nombre = form.nombre.value.trim(), email = form.email.value.trim(), texto = form.mensaje.value.trim();
  const intereses = [...form.querySelectorAll('input[name="interes"]:checked')].map(i => i.value).join(', ');
  if (!nombre || !/\S+@\S+\.\S+/.test(email) || !texto) { say('Completá tu nombre, un email válido y el mensaje.', 'err'); return; }
  if (!CONTACT_EMAIL) { say('Falta definir CONTACT_EMAIL en proyectos.js para recibir los mensajes.', 'err'); return; }
  btn.disabled = true; btn.classList.add('sending'); say('Enviando…');
  const files = form._files || [];                                   // imágenes opcionales (solo la página de contacto)
  try {
    const campos = {
      Nombre: nombre, Email: email, Interes: intereses || '—', Mensaje: texto,
      _subject: 'Nuevo mensaje desde el portfolio — ' + nombre, _replyto: email, _template: 'table', _captcha: 'false'
    };
    let opts;
    if (files.length) {                                              // con imágenes: multipart (FormSubmit las adjunta al mail)
      const fd = new FormData();
      Object.entries(campos).forEach(([k, v]) => fd.append(k, v));
      files.forEach((f, i) => fd.append('imagen_' + (i + 1), f, f.name));
      opts = { method: 'POST', headers: { 'Accept': 'application/json' }, body: fd };
    } else {
      opts = { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(campos) };
    }
    const r = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(CONTACT_EMAIL), opts);
    const d = await r.json().catch(() => ({}));
    if (!r.ok || d.success === false || d.success === 'false') { const er = new Error(d.message || ('HTTP ' + r.status)); er.fromServer = true; throw er; }
    form.reset();
    say('¡Listo! Recibí tu mensaje y te respondo pronto.', 'ok');
    form.dispatchEvent(new CustomEvent('ct:sent'));
  } catch (err) {
    console.warn('Formulario: no se pudo enviar →', err && err.message);
    if (err && err.fromServer && /activat/i.test(err.message)) {        // el servicio pide confirmar el mail la primera vez: no abrir el correo
      say('Falta activar el formulario: revisá tu casilla (también spam) y confirmá el mail de FormSubmit. Después probá de nuevo.', 'err');
      return;
    }
    const body = `${texto}\n\nInterés: ${intereses || '—'}\n— ${nombre} (${email})`;
    say((files.length ? 'No pude enviarlo desde acá. Se abre tu correo: adjuntá las imágenes ahí.' : 'No pude enviarlo desde acá. Se abre tu correo para mandarlo igual.') + (err && err.message ? ' (' + err.message + ')' : ''), 'err');
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Consulta desde el portfolio')}&body=${encodeURIComponent(body)}`;
  } finally {
    btn.disabled = false; btn.classList.remove('sending');
  }
}

/* Video de YouTube limpio y simple: se ve solo la imagen del proyecto con un botón de play.
   Recién al tocar play se carga el reproductor de YouTube (con el mínimo de interfaz: sin videos relacionados). */
function ytId(url) { const m = String(url || '').match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/); return m ? m[1] : null; }
function ytFacade(url, poster, title) {
  const id = ytId(url);
  return id ? `<div class="yt" data-yt="${id}" data-title="${title}"><img src="${poster}" alt="" width="1600" height="900" decoding="async" loading="lazy"><button class="yt-play" type="button" aria-label="Reproducir: ${title}"></button></div>` : '';
}
document.addEventListener('click', (e) => {
  const box = e.target.closest && e.target.closest('.yt');            // un click en cualquier parte del video (no solo en el play)
  if (!box || box.querySelector('iframe')) return;
  /* YouTube no reproduce videos embebidos cuando la página se abre desde un archivo (file://): ahí se abre directo en YouTube.
     Con la página publicada (https) se reproduce acá mismo. */
  if (location.protocol === 'file:') { window.open('https://youtu.be/' + box.dataset.yt, '_blank', 'noopener'); return; }
  box.innerHTML = `<iframe src="https://www.youtube.com/embed/${box.dataset.yt}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&origin=${encodeURIComponent(location.origin)}" title="${box.dataset.title}" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
});

/* Anti-temblor de las pelotas (Home y "Otros proyectos").
   Una pelota apoyada (en contacto con el piso, una pared u otra pelota) que casi no se mueve durante ~0,3 s pasa a "dormida":
   el motor deja de aplicarle gravedad y correcciones de contacto, que era lo que la hacía vibrar. Despierta sola si algo la golpea,
   si se arrastra otra pelota o si cambia el tamaño de la ventana. Con la gravedad, el rebote y el rozamiento no se mete.
   Uso: const calm = makeCalm(engine, () => cuerposQueNoSeArrastran); y llamar calm() después de cada Engine.update. */
function makeCalm(engine, bodies) {
  const { Events, Body, Sleeping } = Matter;
  let frame = 0;
  const touch = ev => ev.pairs.forEach(pr => { pr.bodyA._t = pr.bodyB._t = frame; });
  Events.on(engine, 'collisionStart', touch);
  Events.on(engine, 'collisionActive', touch);
  return () => {
    frame++;
    bodies().forEach(b => {
      if (b.isStatic || b.isSleeping) return;
      const apoyada = frame - (b._t === undefined ? -99 : b._t) <= 2;
      if (apoyada && b.speed < 0.5 && Math.abs(b.angularSpeed) < 0.02) {
        b._calm = (b._calm || 0) + 1;
        if (b._calm >= 18) { Body.setVelocity(b, { x: 0, y: 0 }); Body.setAngularVelocity(b, 0); Sleeping.set(b, true); b._calm = 0; }
      } else b._calm = 0;
    });
  };
}

/* Física independiente de la pantalla: avanza a pasos fijos de 1/60 s según el reloj real.
   Antes cada cuadro de pantalla era un paso, así que en monitores de 120/144 Hz todo caía y rebotaba el doble de rápido.
   Devuelve una función que se llama en cada cuadro con la hora (el de requestAnimationFrame); ejecuta onStep() en cada paso. */
function makeStepper(engine, onStep) {
  const DT = 1000 / 60; let last = 0, acc = 0;
  return now => {
    if (!last) last = now;
    acc += Math.min(now - last, 100); last = now;
    for (let n = 0; acc >= DT && n < 4; n++, acc -= DT) { Matter.Engine.update(engine, DT); if (onStep) onStep(); }
    if (acc > DT) acc = 0;
  };
}

/* Velocidad de lanzamiento al soltar una pelota: sale del movimiento real del puntero en los últimos ~90 ms
   (distancia / tiempo), no del último salto entre eventos, que depende de cuántos eventos por segundo mande el mouse.
   Si el puntero estaba frenado al soltar, la pelota no sale disparada. Unidad: píxeles por paso de 1/60 s. */
function makeThrow() {
  let pts = [];
  return {
    reset(x, y, t) { pts = [{ x, y, t }]; },
    add(x, y, t) { pts.push({ x, y, t }); while (pts.length > 2 && t - pts[0].t > 90) pts.shift(); },
    vel(now) {
      const a = pts[0], b = pts[pts.length - 1];
      if (!a || pts.length < 2 || now - b.t > 70) return { x: 0, y: 0 };
      const dt = Math.max(b.t - a.t, 8), k = (1000 / 60) / dt, M = 45;
      return { x: Math.max(-M, Math.min(M, (b.x - a.x) * k)), y: Math.max(-M, Math.min(M, (b.y - a.y) * k)) };
    }
  };
}

/* Tamaño de las pelotas:
   la más grande mide siempre 1.28^4 veces la más chica (igual que en el diseño
   original con 5 pelotas). Las intermedias se reparten de forma exponencial,
   sin importar cuántos trabajos haya. */
const MAX_GROWTH = Math.pow(1.28, 4);
function sizeFactor(index, total) {
  return total < 2 ? 1 : Math.pow(MAX_GROWTH, index / (total - 1));
}

/* Plantilla base de un trabajo. Los datos reales de cada uno los completa su *-contenido.js
   (nombre, categoría, descripción, imágenes y las secciones de p.mesaPanels). */
function makeProject(id, tools) {
  return {
    id,
    title: String(id),                         // número dentro de la pelota
    number: String(id).padStart(2, "0"),
    name: "Título del proyecto",
    category: "Categoría",
    description: "",
    tools,                                     // claves de TOOLS
    images: [""],                              // images[0] = círculo de la portada ("" = círculo vacío)
    cover: "",                                 // imagen de la pelota de la Home y de "Otros proyectos"
    url: `proyecto.html?id=${id}`
  };
}

const PROJECTS = [
  makeProject(1, ["indesign", "photoshop", "illustrator"]),
  makeProject(2, ["figma"]),
  makeProject(3, ["aftereffects", "photoshop"]),
  makeProject(4, ["illustrator", "photoshop"]),
  makeProject(5, ["photoshop", "illustrator"]),
  makeProject(6, ["lightroom", "photoshop"]),
  makeProject(7, ["aftereffects", "illustrator"]),
  makeProject(8, ["illustrator", "figma"])
];

/* PROYECTO 8 — MESA (sistema POS gastronómico): datos básicos para la Home; el interior está en mesa-contenido.js */
(function () {
  const p = PROJECTS[7];
  p.name = "Mesa";
  p.logo = "assets/mesa-logo.svg";               // logo de la marca (se muestra en la cabecera del proyecto)
  p.cover = "assets/mesa-principal.jpg";         // círculo del selector final y de la Home
  p.images[0] = "assets/mesa-principal.jpg";     // imagen hero
  p.category = "UX/UI · Sistema POS gastronómico";
  p.description = "Software de gestión gastronómica pensado como asistente operativo para mozos y cocineros: una terminal compartida, jerarquía visual clara, vocabulario del rubro y feedback en cada paso.";
})();
