/* =====================================================
   MICROMIDGET – DATOS (categoría infantil)
   Esta página es independiente del campeonato oficial:
   tiene sus propios resultados, posiciones y estadísticas.
   Editá solo este archivo para cambiar su contenido.
   ===================================================== */

const DATOS_MICRO = {

  /* ---------- Datos generales ---------- */
  campeonato: "Estival 2026-27",
  subtitulo: "Categoría infantil",

  /* Foto de fondo del título (opcional).
     Dejala vacía ("") para usar el fondo oscuro. */
  portada: { imagen: "" },

  /* ---------- Tipos de carrera de esta categoría ----------
     Sacá de la lista los que no se corran en Micromidget:
     dejan de aparecer en Estadísticas. */
  tipos: ["serie", "repechaje", "semifinal", "prefinal", "final"],

  /* ---------- Puntaje ----------
     ATENCIÓN: son los mismos puntos del campeonato oficial, puestos
     como punto de partida. Reemplazalos por los de Micromidget.
     El primer número es el 1°, el segundo el 2°, y así.
     Del que quede afuera de la lista en adelante, suma 0. */
  puntaje: {
    serie:     [3, 2.75, 2.5, 2.25, 2, 1.5, 1, 0.5],
    repechaje: [],
    semifinal: [8, 7, 6, 5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5],
    prefinal:  [2, 1],
    final:     [15, 12, 10, 7, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5]
  },

  /* ---------- Victorias ----------
     Tipos de carrera que cuentan como victoria (🏆) en la tabla de posiciones. */
  victoriasEn: ["final"],

  /* ---------- Resultados ----------
     La fecha más reciente va primero.
     Para probar, copiá el modelo de abajo adentro de los corchetes
     (sin los símbolos de comentario) y después borralo.

     MODELO:
     {
       fecha: "2026-11-20",
       nombre: "Fecha 1",
       sesiones: [
         { tipo: "serie", nombre: "Serie 1", orden: [
           { piloto: "Nombre Apellido", tiempo: "1:10.250" },
           { piloto: "Nombre Apellido", tiempo: "1:11.480" },
           { piloto: "Nombre Apellido", estado: "NT" }
         ]},
         { tipo: "final", nombre: "Final", orden: [
           { piloto: "Nombre Apellido", tiempo: "5:30.120" },
           { piloto: "Nombre Apellido", tiempo: "5:31.004" }
         ]}
       ]
     },

     tipo: serie, repechaje, semifinal, prefinal o final.
     estado: "NL" (no largó) o "NT" (no terminó): no suman puntos.
     Cada piloto tiene que escribirse igual en todas las carreras. */
  resultados: []
};
