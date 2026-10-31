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
      { nombre: "Instagram", url: "http://instagram.com/adnmidgista" },
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
  { fecha: "2027-01-22", carrera: "Fecha 8 (Invitados)" },
  { fecha: "2027-01-29", carrera: "Fecha 9" },
  { fecha: "2027-02-05", carrera: "Fecha 10" },
  { fecha: "2027-02-12", carrera: "Fecha 11 - Ronda 1 Playoffs" },
  { fecha: "2027-02-19", carrera: "Fecha 12 - Ronda 1 Playoffs" },
  { fecha: "2027-02-26", carrera: "Fecha 13 - Ronda 2 Playoffs" },
  { fecha: "2027-03-05", carrera: "Fecha 14 - Ronda 2 Playoffs" },
  { fecha: "2027-03-12", carrera: "Fecha 15 - Ronda 3 Playoffs" },
  { fecha: "2027-03-19", carrera: "Fecha 16 - Ronda 3 Playoffs" }
],

  /* ---------- Campeones históricos ----------
     Para sumar uno nuevo, agregá una línea más con el mismo formato.
     No importa el orden: el sitio los ordena y cuenta los títulos solo. */
  campeones: [
    { temporada: "1954-55", piloto: "Eduardo Mendivil", club: "Liniers" },
    { temporada: "1955-56", piloto: "Manuel Benamo", club: "Liniers" },
    { temporada: "1956-57", piloto: "Manuel Benamo", club: "Liniers" },
    { temporada: "1957-58", piloto: "Manuel Benamo", club: "Liniers" },
    { temporada: "1958-59", piloto: "Héctor Plano", club: "Liniers" },
    { temporada: "1959-60", piloto: "Héctor Plano", club: "Liniers" },
    { temporada: "1960-61", piloto: "Héctor Plano", club: "Liniers" },
    { temporada: "1961-62", piloto: "Héctor Plano", club: "Liniers" },
    { temporada: "1962-63", piloto: "Héctor Plano", club: "Villa Mitre" },
    { temporada: "1963-64", piloto: "Vicente Nápoli", club: "Villa Mitre" },
    { temporada: "1964-65", piloto: "Héctor Plano", club: "Villa Mitre" },
    { temporada: "1965-66", piloto: "Vicente Nápoli", club: "Villa Mitre" },
    { temporada: "1966-67", piloto: "Vicente Nápoli", club: "Villa Mitre" },
    { temporada: "1967-68", piloto: "Alejandro Cirelli", club: "Villa Mitre" },
    { temporada: "1971-72", piloto: "Vicente Nápoli", club: "Villa Mitre" },
    { temporada: "1972-73", piloto: "Mario Artus", club: "Villa Mitre" },
    { temporada: "1973-74", piloto: "Vicente Nápoli", club: "Villa Mitre" },
    { temporada: "1975-76", piloto: "Juan José Estévez", club: "Villa Mitre" },
    { temporada: "1976-77", piloto: "Héctor Álvarez", club: "Villa Mitre" },
    { temporada: "1977-78", piloto: "Héctor Plano", club: "Villa Mitre" },
    { temporada: "1978-79", piloto: "Horacio Andría", club: "Villa Mitre" },
    { temporada: "1979-80", piloto: "Alberto Palma", club: "Villa Mitre" },
    { temporada: "1980-81", piloto: "Rubén Blanco", club: "Villa Mitre" },
    { temporada: "1981-82", piloto: "Alberto Palma", club: "Tiro Federal" },
    { temporada: "1982-83", piloto: "Alberto Palma", club: "Tiro Federal" },
    { temporada: "1983-84", piloto: "Alberto Palma", club: "Tiro Federal" },
    { temporada: "1984-85", piloto: "Hugo Salaberry", club: "Tiro Federal" },
    { temporada: "1985-86", piloto: "Hugo Salaberry", club: "Tiro Federal" },
    { temporada: "1986-87", piloto: "Juan Carlos Salaberry", club: "Tiro Federal" },
    { temporada: "1987-88", piloto: "Daniel Vicente", club: "Tiro Federal" },
    { temporada: "1988-89", piloto: "Francisco Palma", club: "Tiro Federal" },
    { temporada: "1989-90", piloto: "Francisco Palma", club: "Tiro Federal" },
    { temporada: "1990-91", piloto: "Néstor Rossini", club: "Tiro Federal" },
    { temporada: "1991-92", piloto: "Sergio Urretabizcaya", club: "Tiro Federal" },
    { temporada: "1992-93", piloto: "Sergio Urretabizcaya", club: "Tiro Federal" },
    { temporada: "1993-94", piloto: "Fabián Colturi", club: "Tiro Federal" },
    { temporada: "1994-95", piloto: "Néstor Mancini", club: "Tiro Federal" },
    { temporada: "1995-96", piloto: "Fabián Colturi", club: "Tiro Federal" },
    { temporada: "1996-97", piloto: "Fabián Colturi", club: "Dublin" },
    { temporada: "1997-98", piloto: "Néstor Mancini", club: "Dublin" },
    { temporada: "1998-99", piloto: "Daniel Altamirano", club: "Dublin" },
    { temporada: "1999-00", piloto: "Fernando Saldamando", club: "Aldea Romana" },
    { temporada: "2000-01", piloto: "Fabián Colturi", club: "Aldea Romana" },
    { temporada: "2001-02", piloto: "Daniel Altamirano", club: "Aldea Romana" },
    { temporada: "2002-03", piloto: "Fernando Saldamando", club: "Aldea Romana" },
    { temporada: "2003-04", piloto: "Fernando Saldamando", club: "Aldea Romana" },
    { temporada: "2004-05", piloto: "Diego Andrade", club: "Aldea Romana" },
    { temporada: "2005-06", piloto: "Claudio Roth", club: "Aldea Romana" },
    { temporada: "2006-07", piloto: "Mariano Pérez", club: "Aldea Romana" },
    { temporada: "2007-08", piloto: "Matías Salaberry", club: "Aldea Romana" },
    { temporada: "2008-09", piloto: "Mariano Pérez", club: "Aldea Romana" },
    { temporada: "2009-10", piloto: "Martín Saldamando", club: "Aldea Romana" },
    { temporada: "2010-11", piloto: "Martín Saldamando", club: "Aldea Romana" },
    { temporada: "2011-12", piloto: "Sebastián Burgos", club: "Aldea Romana" },
    { temporada: "2012-13", piloto: "Daniel Altamirano", club: "Aldea Romana" },
    { temporada: "2013-14", piloto: "Julio Monteros", club: "Aldea Romana" },
    { temporada: "2014-15", piloto: "Claudio Roth", club: "Aldea Romana" },
    { temporada: "2015-16", piloto: "Esteban Mancini", club: "Aldea Romana" },
    { temporada: "2016-17", piloto: "Esteban Mancini", club: "Aldea Romana" },
    { temporada: "2017-18", piloto: "Claudio Roth", club: "Aldea Romana" },
    { temporada: "2018-19", piloto: "Fernando Caputo", club: "Aldea Romana" },
    { temporada: "2019-20", piloto: "Luciano Franchi", club: "Aldea Romana" },
    { temporada: "2021-22", piloto: "Luciano Vallejos", club: "Aldea Romana" },
    { temporada: "2022-23", piloto: "Luciano Vallejos", club: "Aldea Romana" },
    { temporada: "2023-24", piloto: "Luciano Vallejos", club: "Aldea Romana" },
    { temporada: "2024-25", piloto: "Luciano Vallejos", club: "Aldea Romana" },
    { temporada: "2025-26", piloto: "Luciano Franchi", club: "Aldea Romana" }
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