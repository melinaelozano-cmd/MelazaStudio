/* ==========================================================================
   AJUSTE FINAL DE LA LISTA DE PROYECTOS (se carga después de todos los *-contenido.js)
   · Se saca el proyecto 1 (sin material) y los demás se renumeran desde 1.
   · Los TAMAÑOS de las pelotas se mantienen: cada proyecto conserva el tamaño que tenía
     (sizeIndex = posición original dentro de los 8), así el más chico ahora es el que era el 2.
   ========================================================================== */
(function () {
  const total = PROJECTS.length;                    // 8 originales: define la escala de tamaños
  PROJECTS.forEach((p, i) => { p.sizeIndex = i; p.sizeTotal = total; });
  PROJECTS.splice(0, 1);                            // fuera el proyecto 1
  for (let i = PROJECTS.length - 1; i >= 0; i--) if (PROJECTS[i].name === 'Título del proyecto') PROJECTS.splice(i, 1);   // fuera el proyecto sin material
  // Orden pedido: BeBeMi primero, PetStar segundo, DUAL tercero (el resto sigue igual)
  const by = n => PROJECTS.findIndex(p => p.name === n);
  const order = ['BeBeMi', 'PetStar', 'DUAL'].map(n => PROJECTS[by(n)]).filter(Boolean);
  if (order.length === 3) { const rest = PROJECTS.filter(p => !order.includes(p)); PROJECTS.length = 0; PROJECTS.push(...order, ...rest); }
  PROJECTS.forEach((p, i) => { p.sizeIndex = i + 1; });   // cada lugar conserva el tamaño de pelota que tenía
  PROJECTS.forEach((p, i) => {
    p.id = i + 1;
    p.title = String(p.id);                         // número dentro de la pelota
    p.number = String(p.id).padStart(2, '0');
    p.url = `proyecto.html?id=${p.id}`;
  });
})();
