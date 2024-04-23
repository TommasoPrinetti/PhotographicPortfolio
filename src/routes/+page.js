/** @type {import('./$types').PageLoad} */

import { error } from '@sveltejs/kit';

let basicDescription = "Credo che il punto sia che la realtà di per sè accade. E che abbiamo perso molto, nel tempo, la relazione con ciò che è fuori di noi. Le persone, gli spazi. La mia fotografia vuole essere strumento per questo, per la riconquista dei rapporti con il 'fuori di noi'. Per rifondare dei legami solidi con la realtà, che accade, ogni istante."

let capitoliFoto = [
   {
       titolo: "Monica & Paolo",
       location: "Inzago",
       descrizione: {basicDescription},
    },
    {
       titolo: "Lucia & Stefano",
       location: "Verona città",
       descrizione: {basicDescription},
    },
    {
       titolo: "Jack & Chiara ",
       location: "Salò",
       descrizione: {basicDescription},
    },
    {
       titolo: "At Carol Rama’s",
       location: "Torino, Casa museo Carol Rama",
       descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
    },
    {
       titolo: "Sinking",
       location: "Milano, Studi PoliMi",
       descrizione: "Sinking è una collezione di pochi capi nata per esprimere attraverso ciò che vestiamo, una quotidiana relazione con la malattia psicologica. Il set, bianco ed in bianco e nero, risalta il carattere riflessivo della fotografia, che più che al capo, vuole guardare a chi lo indossa.",
    },
    {
       titolo: "Atacama",
       location: "Malnate, Cave di Malnate",
       descrizione: "Abbiamo scelto le vecchie cave come location per lo shooting perchè in sè raccolgono un mondo parzialmente isolato, all'interno dei boschi del varesotto. Dentro, la mancanza di luce ci ha spinti a entrare in relazione con la pietra, per capire come sfruttare e come riflettere i pochi raggi in grado di penetrarvi. ",
    },
    {
       titolo: "Lazza, Re Mida",
       location: "Alcatraz, 2019",
       descrizione: "Il secondo concerto di Lazza. Il mio primo, e l'ultimo prima dello stop dovuto al Covid. Tre ore e mezza di concerto, il suo primo vero live. ",
    },
    {
      titolo: "TutelaLegale",
      location: "Fond. Feltrinelli",
      descrizione: "",
   },
   {
      titolo: "MilanoCityMarathon",
      location: "Milano - Piazza del Duomo",
      descrizione: "Ogni anno è un'occasione unica fotografare la Milano City Marathon. Per me, è innanzitutto l'occasione di stare al fianco di Sostieni il Sostegno e delle loro staffette, per documentare chi corre per chi non può correre.",
   },
   {
      titolo: "MilanoUniversityDistrict",
      location: "Milano - Piazza Leonardo",
      descrizione: "Nel 2024 si è tenuta la prima edizione del MuD, in Piazza Leonardo. L'ultima sera è stato stupendo far festa con i ragazzi, avendo il piacere di raccontare quello che succedeva su e giù dal palco. Degna conclusione di tre giorni di bellezza.",
   },
    {
       titolo: "Me",
       location: "Milano",
       descrizione: "Sono io, Tommaso :)",
    }
];

export async function load({ params }) {

   return {
       props: {
         capitoliFoto,
       }
   };
 
}