/** @type {import('./$types').PageLoad} */

// +page.js [titolo]

import { error } from '@sveltejs/kit';

let capitoliFoto = [
   {
       titolo: "Monica & Paolo",
       location: "San Colombano al Lambro",
       descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
    },
    {
       titolo: "Lucia & Stefano",
       location: "Verona città metropolitana",
       descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
    },
    {
       titolo: "Jack & Chiara ",
       location: "Verona città metropolitana",
       descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
    },
    {
       titolo: "At Carol Rama’s",
       location: "Torino, Casa museo Carol Rama",
       descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
    },
    {
       titolo: "Sinking",
       location: "Milano, Studi PoliMi",
       descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
    },
    {
       titolo: "Atacama",
       location: "Cave di Malnate",
       descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
    },
    {
       titolo: "Lazza, Re Mida",
       location: "Alcatraz, 2019",
       descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
    },
    {
      titolo: "TutelaLegale",
      location: "Fond. Feltrinelli, 2024",
      descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
   },
   {
      titolo: "MilanoCityMarathon",
      location: "Milano - Piazza del Duomo",
      descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
   },
   {
      titolo: "MilanoUniversityDistrict",
      location: "Milano - Piazza Leonardo",
      descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
   },
    {
       titolo: "Me",
       location: "",
       descrizione: "",
    }
];

export async function load({ params }) {
   const titoloSlug = decodeURIComponent(params.titolo); 

   const foundTitolo = capitoliFoto.find(titolo => titolo.titolo === titoloSlug); 

   return {
       props: {
           titolo: foundTitolo,
           capitoliFoto: capitoliFoto,
       }
   };
}