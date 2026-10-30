/* =====================================================
   ADN MIDGISTA – DATOS DEL SITIO
   Editá solo este archivo para cambiar el contenido.
   Todos los nombres, fechas y resultados de abajo son
   DE EJEMPLO: reemplazalos por los reales.
   ===================================================== */

const DATOS = {

  /* ---------- Datos generales ---------- */
  sitio: {
    nombre: "ADN Midgista",
    logo: "ADN_Midgista.png",          // poné tu logo en esa carpeta
    campeonato: "Estival 2026-27",      // se muestra en los títulos
    redes: [
      { nombre: "Instagram", url: "https://instagram.com/" },
    ]
  },

  /* ---------- Puntaje ----------
     El primer número es el 1°, el segundo el 2°, y así.
     Del que quede afuera de la lista en adelante, suma 0. */
  puntaje: {
    serie:     [3, 2.75, 2.5, 2.25, 2, 1.5, 1, 0.5],
    repechaje: [],
    semifinal: [8, 7, 6, 5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5],
    prefinal:  [2, 1],
    final:     [15, 12, 10, 7, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5]
  },

  /* ---------- Portada (la gran foto de arriba) ---------- */
  portada: {
    imagen: "foto_de_inicio.jpg",     // foto grande de fondo
    titulo: "VIDEO: Choque en la primera vuelta deja a dos pilotos fuera",
    boton: "Ver ahora",
    enlace: "#resultados"               // o la URL de un video
  },

  /* ---------- Zonas de la tabla de posiciones ----------
     oro:  puestos 1 hasta este número (Playoffs y Copa de Oro)
     rojo: puestos siguientes hasta este número (Copa de Oro)
     El resto queda en blanco (Copa de Plata). */
  zonas: {
    oro: 12,
    rojo: 38
  },

  /* ---------- Victorias ----------
     Tipos de carrera que cuentan como victoria (🏆) en la tabla de posiciones. */
  victoriasEn: ["final"],

  /* ---------- Calendario ----------
     fecha: formato AAAA-MM-DD
     El sitio marca solo la "Próxima" carrera según la fecha de hoy. */
  calendario: [
  { fecha: "2026-11-20", carrera: "Fecha 1" },
  { fecha: "2026-11-27", carrera: "Fecha 2" },
  { fecha: "2026-12-04", carrera: "Fecha 3" },
  { fecha: "2026-12-11", carrera: "Fecha 4" },
  { fecha: "2026-12-18", carrera: "Fecha 5" },
  { fecha: "2026-12-25", carrera: "Fecha 6" },
  { fecha: "2027-01-01", carrera: "Fecha 7" },
  { fecha: "2027-01-08", carrera: "Fecha 8" },
  { fecha: "2027-01-15", carrera: "Fecha 9" },
  { fecha: "2027-01-22", carrera: "Fecha 10" },
  { fecha: "2027-01-29", carrera: "Fecha 11 - Ronda 1 Playoffs" },
  { fecha: "2027-02-05", carrera: "Fecha 12 - Ronda 1 Playoffs" },
  { fecha: "2027-02-12", carrera: "Fecha 13 - Ronda 2 Playoffs" },
  { fecha: "2027-02-19", carrera: "Fecha 14 - Ronda 2 Playoffs" },
  { fecha: "2027-02-26", carrera: "Fecha 15 - Ronda 3 Playoffs" },
  { fecha: "2027-03-05", carrera: "Fecha 16 - Ronda 3 Playoffs" }
],

  /* ---------- Resultados ----------
     Agregá una carrera nueva copiando un bloque completo.
     La más reciente va primero. */
  resultados: [
    {
      fecha: "2026-11-27",
      sesiones: [
        { tipo: "serie", nombre: "Serie 1", orden: [
          { piloto: "Piloto A", tiempo: "3:10.250" },
          { piloto: "Piloto B", tiempo: "3:11.480" },
          { piloto: "Piloto C", estado: "NT" },
          { piloto: "Piloto D", estado: "NL" }
        ]},
        { tipo: "serie", nombre: "Serie 2", orden: [
          { piloto: "Piloto H", tiempo: "3:10.250" },
          { piloto: "Piloto B", tiempo: "3:11.480" },
          { piloto: "Piloto C", estado: "NT" },
          { piloto: "Piloto D", estado: "NL" }
        ]},
        { tipo: "final", nombre: "Final", orden: [
          { piloto: "Piloto B", tiempo: "9:30.120" },
          { piloto: "Piloto A", tiempo: "9:31.004" },
          { piloto: "Piloto D", tiempo: "9:35.870" }
        ]}
      ]
    },
    {
      fecha: "2026-11-20",
      sesiones: [
        { tipo: "serie", nombre: "Serie 1", orden: [
          { piloto: "Piloto A", tiempo: "3:09.800" },
          { piloto: "Piloto B", tiempo: "3:10.900" },
          { piloto: "Piloto C", tiempo: "3:12.100" }
        ]},
        { tipo: "serie", nombre: "Serie 2", orden: [
          { piloto: "Piloto H", tiempo: "3:10.250" },
          { piloto: "Piloto B", tiempo: "3:11.480" },
          { piloto: "Piloto C", estado: "NT" },
          { piloto: "Piloto D", estado: "NL" }
        ]},
        { tipo: "repechaje", nombre: "Repechaje", orden: [
          { piloto: "Piloto G", tiempo: "2:50.100" },
          { piloto: "Piloto H", estado: "NT" }
        ]},
        { tipo: "semifinal", nombre: "Semifinal 1", orden: [
          { piloto: "Piloto A", tiempo: "5:00.000" },
          { piloto: "Piloto D", tiempo: "5:01.000" }
        ]},
        { tipo: "prefinal", nombre: "Prefinal", orden: [
          { piloto: "Piloto A", tiempo: "4:00.000" },
          { piloto: "Piloto D", tiempo: "4:01.000" }
        ]},
        { tipo: "final", nombre: "Final", orden: [
          { piloto: "Piloto A", tiempo: "9:20.000" },
          { piloto: "Piloto D", tiempo: "9:25.000" },
          { piloto: "Piloto B", tiempo: "9:26.000" }
        ]}
      ]
    }
  ],
};