import type { CampsiteConfig } from "../types";

/**
 * Seegasthof Katschnig · Ferienzentrum Süd — St. Kanzian am Klopeiner See, Kärnten.
 * Alle Texte/Fakten/Preise belegt aus feriensued.com (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Fotos des Betriebs (feriensued.com) in
 *   /public/campsites/feriensued/ — jede Datei einmal verwendet, Motiv geprüft.
 * EHRLICH: der Platz liegt WIRKLICH direkt am Südufer des Klopeiner Sees
 *   ("Camping direkt am See", "direkt am Ufer des Klopeinersees", freie
 *   Strandbenützung) → see = Klopeiner See ist belegt.
 * Preise = REALE Sommer-2026-Preise von der Camping- und Pensionsseite
 *   (Nebensaison als "ab"-Basis); pricesArePlaceholder = false.
 * Award = real & im Quelltext genannt: Rudi Katschnig "Koch des Jahres"
 *   (Genussengel) + site-weit gezeigtes Siegel "Kärntner Wirtshauskultur".
 * KEIN Pixabay-Stock (people/leisure/bike laut Impressum) und KEIN
 *   Fremd-Webcam-Bild (apartments-klopeinersee.at) verwendet.
 */
const IMG = "/campsites/feriensued";

export const feriensued: CampsiteConfig = {
  name: "Seegasthof Katschnig",
  shortName: "Katschnig",
  slug: "feriensued",
  ort: "St. Kanzian am Klopeiner See",
  region: "Kärnten",
  brandKind: "Camping · Pension · Seegasthof",
  see: "Klopeiner See",
  regionLong: "Klopeiner See · Südkärnten · Österreich",

  claim: "Dein Urlaub direkt am Klopeiner See",
  claimEmphasis: "direkt am Klopeiner See",
  intro:
    "Camping, Pension und Seegasthof in einem — familiär geführt, direkt am Südufer des Klopeiner Sees in St. Kanzian, Südkärnten. Freie Strandbenützung inklusive.",

  // Wortmarke „Seegasthof Katschnig“ statt Bild: das vorhandene Logo ist eine
  // weiße Variante (auf hellem Grund unsichtbar) → logo bewusst weggelassen.

  statement: {
    text: "Ankommen, durchatmen, am See sein — bei Familie Katschnig ist Urlaub noch ehrlich und persönlich.",
    emphasis: "noch ehrlich und persönlich",
  },

  pillars: [
    {
      title: "Direkt am Klopeiner See",
      text: "Ruhig am Südufer gelegen, mit freier Strandbenützung und Seezugang direkt vom Platz.",
      image: { src: `${IMG}/pillar-see.webp`, alt: "Liegewiese und Stellplätze am Ufer des Klopeiner Sees" },
    },
    {
      title: "Familiär geführter Seegasthof",
      text: "Direkt am Ufer des Klopeinersees, seit Generationen mit Leidenschaft betrieben — Restaurant, Pension und Camping unter einem Dach.",
      image: { src: `${IMG}/pillar-seegasthof.webp`, alt: "Seegasthof Katschnig am Klopeiner See" },
    },
    {
      title: "Küche mit Fisch & Wild",
      text: “Frischer Fisch und regionale Wild-Spezialitäten — Rudi Katschnig wurde als „Koch des Jahres” ausgezeichnet.”,
      image: { src: `${IMG}/pillar-kueche.webp`, alt: "Rudi Katschnig mit fangfrischem Hecht aus dem Klopeiner See" },
    },
  ],

  usps: [
    "Direkt am Klopeiner See",
    "80 Stellplätze auf ca. 10.000 m²",
    "Freie Strandbenützung",
    "Neu errichtete Sanitäranlagen",
    "Seegasthof mit Fisch- & Wildküche",
    "Täglicher Bäckerservice",
  ],

  trust: {
    heading: "Worauf Sie sich bei Katschnig verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Ein familiär geführter Seegasthof, der seit Generationen mit Leidenschaft betrieben wird — direkt am Klopeiner See, mit ehrlicher Küche aus Fisch und Wild und einem ruhigen, gepflegten Campingplatz mit freier Strandbenützung.",
  },

  // Real & im Quelltext belegt: „Koch des Jahres“ (Genussengel) für Rudi
  // Katschnig; „Kärntner Wirtshauskultur“-Siegel wird site-weit im Footer geführt.
  awards: [
    { label: "Rudi Katschnig — „Koch des Jahres“ (Genussengel)" },
    { label: "Kärntner Wirtshauskultur", image: { src: `${IMG}/seal-wirtshauskultur.png`, alt: "Mitglied der Kärntner Wirtshauskultur" } },
  ],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-camping-see.webp`, alt: "Campingplatz Seegasthof Katschnig direkt am Klopeiner See mit Wohnwagen auf grüner Wiese" },
  },

  camping: {
    heading: "Camping direkt am See",
    intro:
      "Ein ruhiger, sauberer Campingplatz mit allen Annehmlichkeiten: schöne Stellplätze mit Stromanschluss, neu errichtete Sanitäranlagen und freie Strandbenützung am Südufer des Klopeiner Sees — nur 20 Gehminuten zum Ortszentrum Seelach.",
    features: [
      {
        title: "80 Stellplätze mit Strom",
        text: "80 schöne, ruhige Stellplätze auf ca. 10.000 m² mit Stromanschluss für Wohnwagen, Wohnmobil und Zelt.",
        image: { src: `${IMG}/camping-stellplaetze.webp`, alt: "Stellplätze mit Wohnwagen direkt am Ufer des Klopeiner Sees" },
      },
      {
        title: "Freie Strandbenützung",
        text: "Direkter Zugang zum Klopeiner See mit freier Strandbenützung — Schwimmen, Stand-Up-Paddeln und Sonne direkt am Platz.",
        image: { src: `${IMG}/camping-strand.webp`, alt: "Schilfufer und Liegewiese am Klopeiner See" },
      },
      {
        title: "Neu errichtete Sanitäranlagen",
        text: "Helle, neu errichtete und gepflegte Sanitäranlagen sorgen für Komfort im Campingurlaub.",
        image: { src: `${IMG}/camping-sanitaer.webp`, alt: "Neuer Sanitärbereich mit Waschplätzen und Seeblick" },
      },
      {
        title: "Ruhig am Südufer",
        text: "Sommer- und Feriencamping in ruhiger Lage am Südufer des Klopeiner Sees — nur 20 Gehminuten zum Ortszentrum Seelach.",
        image: { src: `${IMG}/camping-gelaende.webp`, alt: "Ruhiges Campinggelände am Südufer mit Blick auf den Seegasthof und die Hügel" },
      },
      {
        title: "Rundum versorgt",
        text: "Täglicher Bäckerservice, Beach-Volleyball und eine Tauchschule — auch an Sonn- und Feiertagen bestens versorgt.",
        image: { src: `${IMG}/camping-flair.webp`, alt: "Gepflegtes Campinggelände mit Sanitärgebäude und Liegewiese" },
      },
    ],
  },

  mobilheime: {
    heading: "Zimmer & Pension",
    intro:
      "13 komfortable Zimmer mit Dusche, WC, Sat-TV und Heizung — viele mit Balkon oder Veranda. Inklusive großzügigem Frühstücksbuffet im Speiseraum mit Seeblick; ein Teil der Zimmer wurde kürzlich komplett renoviert.",
    items: [
      {
        name: "Doppelzimmer",
        kind: "Pension · inkl. Frühstück",
        text: "Gemütliches Doppelzimmer mit Dusche, WC, Sat-TV und Heizung — inklusive großzügigem Frühstücksbuffet im Speiseraum mit Seeblick.",
        image: { src: `${IMG}/zimmer-doppelzimmer.webp`, alt: "Helles Doppelzimmer im Seegasthof Katschnig" },
        priceFrom: 54,
        features: ["pro Person, Nebensaison", "Dusche / WC", "Frühstücksbuffet"],
      },
      {
        name: "Komfortzimmer",
        kind: "Pension · inkl. Frühstück",
        text: "Komfortables Zimmer mit Sitzgelegenheit, Sat-TV und Schreibtisch — der entspannte Rückzugsort nach einem Tag am See.",
        image: { src: `${IMG}/zimmer-komfort.webp`, alt: "Komfortzimmer mit Couch und Sat-TV im Seegasthof Katschnig" },
        features: ["Sat-TV", "Heizung", "ruhige Lage"],
      },
      {
        name: "Neu renoviertes Zimmer",
        kind: "Pension · inkl. Frühstück",
        text: "Ein Teil unserer Zimmer wurde erst kürzlich komplett renoviert und neu eingerichtet — hell und freundlich.",
        image: { src: `${IMG}/zimmer-renoviert-neu.webp`, alt: "Neu renoviertes, helles Zimmer im Seegasthof Katschnig" },
        features: ["neu renoviert", "Balkon / Veranda*", "Frühstücksbuffet"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Der Seegasthof & der See",
    intro:
      "Direkt am Ufer des Klopeinersees: ehrliche Küche, ein Frühstück mit Seeblick und das ganze Wassersport- und Ausflugsangebot der Südkärntner Seenlandschaft.",
    items: [
      {
        title: "Seegasthof-Restaurant",
        text: "Gemütliches Restaurant mit regionaler Küche, Di–So geöffnet; Küchenzeiten 11:30–13:30 und 18:00–20:30 Uhr.",
        image: { src: `${IMG}/gasthof-restaurant.webp`, alt: "Restaurantstube im Seegasthof Katschnig mit Seeblick" },
      },
      {
        title: "Fisch & Wild aus der Region",
        text: "Frischer Fisch aus den umliegenden Gewässern und feine Wild-Spezialitäten — traditionelle Rezepte mit modernen Einflüssen.",
        image: { src: `${IMG}/gasthof-kueche.webp`, alt: "Anrichten eines Gerichts am See im Seegasthof Katschnig" },
      },
      {
        title: "Frühstück mit Seeblick",
        text: "Großzügiges Frühstücksbuffet im Speiseraum mit Blick auf den Klopeiner See — der ideale Start in den Urlaubstag.",
        image: { src: `${IMG}/gasthof-fruehstueck.webp`, alt: "Frühstücks- und Speiseraum mit Fensterfront zum Klopeiner See" },
      },
      {
        title: "Baden & Wassersport",
        text: "Schwimmen, Segeln, Surfen, Stand-Up-Paddeln, Tauchen und Angeln — dazu Wandern und Radtouren in die Umgebung.",
        image: { src: `${IMG}/see-baden.webp`, alt: "Steg am Klopeiner See" },
      },
    ],
  },

  anreise: {
    heading: "So finden Sie uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Aus Ost-Österreich über die A2 (Abfahrt Völkermarkt West), aus Deutschland über die A10/A2 — durch St. Kanzian Richtung Seelach am Klopeiner See; das Ferienzentrum Süd liegt nach dem Zentrum auf der linken Seite. Navi-Adresse: Südpromenade 57, 9122 St. Kanzian.",
      },
      {
        title: "Öffentliche Verkehrsmittel",
        text: "Der Klopeiner See ist gut mit den öffentlichen Verkehrsbetrieben erreichbar — Fahrplanauskunft über die Kärntner Linien.",
      },
    ],
  },

  galerie: {
    heading: "Sommer am Klopeiner See",
    headingEmphasis: "Klopeiner See",
    intro:
      "Ein paar Eindrücke vom Seegasthof Katschnig — vom Balkon mit Seeblick bis in die gemütliche Stube.",
    tag: "Mai bis September",
    images: [
      { src: `${IMG}/galerie-balkon-seeblick.webp`, alt: "Blick vom Balkon über den Campingplatz zum Klopeiner See" },
      { src: `${IMG}/galerie-stube-herz.webp`, alt: "Liebevoll gedeckter Tisch mit Seeblick im Seegasthof Katschnig" },
      { src: `${IMG}/galerie-restaurant.webp`, alt: "Eingedeckte Tische im Restaurant des Seegasthof Katschnig" },
      { src: `${IMG}/galerie-menue-seeblick.webp`, alt: "Menükarte am gedeckten Tisch mit Blick auf den See" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Unterkunft und Personenzahl — Familie Katschnig meldet sich mit Ihrer persönlichen Verfügbarkeit. Keine Mindestaufenthaltsdauer und keine Buchungsgebühr.",
    pricesArePlaceholder: false,
    priceNote:
      "Reale Preise der Sommersaison 2026 (Nebensaison als „ab“-Basis). Camping: Stellplatz Wohnwagen/Wohnmobil € 12, Erwachsene je € 9,50, Kind 3–12 J. € 5,50, Auto € 6, Strompauschale € 4,50/Tag, Abfallbeitrag € 1,50/Tag pro Person — alle Preise pro Übernachtung zzgl. € 2,70 Ortstaxe pro Person (entfällt unter 16 J.). Hauptsaison (Juli/August) etwas höher. Doppelzimmer ab € 54 pro Person inkl. Frühstück. Bitte mit dem Betrieb bestätigen.",
    highlight: {
      title: "Freie Strandbenützung",
      text: "Direkter Seezugang mit freier Strandbenützung — Baden, Stand-Up-Paddeln und Sonne am Südufer inklusive.",
    },
    categories: [
      // Reale Sommer-2026-Preise (Nebensaison), als 2-Personen-Basis zusammengesetzt.
      { id: "stellplatz", label: "Stellplatz (2 Pers., inkl. Auto & Strom)", perNight: 40, perExtraGuest: 10 },
      { id: "zelt", label: "Zeltplatz (2 Pers.)", perNight: 28, perExtraGuest: 10 },
      { id: "zimmer", label: "Doppelzimmer inkl. Frühstück (2 Pers.)", perNight: 108, perExtraGuest: 30 },
    ],
  },

  kontakt: {
    tel: "+43 (0) 664 10 11 737",
    telHref: "tel:+436641011737",
    mail: "office@feriensued.com",
    adresse: "Südpromenade 57 · 9122 St. Kanzian am Klopeiner See · Kärnten",
    coords: { lat: 46.599457, lng: 14.582835 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
        { label: "Strand am See", href: "#camping" },
      ],
    },
    {
      label: "Zimmer",
      href: "#mobilheime",
      children: [
        { label: "Doppelzimmer", href: "#mobilheime" },
        { label: "Ausstattung", href: "#mobilheime" },
        { label: "Frühstück", href: "#mobilheime" },
      ],
    },
    {
      label: "Seegasthof",
      href: "#aktivitaeten",
      children: [
        { label: "Restaurant", href: "#aktivitaeten" },
        { label: "Fisch & Wild", href: "#aktivitaeten" },
        { label: "Baden & See", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Galerie",
      href: "#galerie",
    },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default feriensued;
