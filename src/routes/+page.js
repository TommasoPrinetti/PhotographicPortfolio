/** @type {import('./$types').PageLoad} */

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
       titolo: "Lucia & Luca",
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
       titolo: "Corporate events",
       location: "Mixed locations",
       descrizione: "La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.",
    },
    {
       titolo: "Reportages",
       location: "Mixed locations",
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
       titolo: "Curriculum vitae",
       location: "",
       descrizione: "",
    }
];

export async function load({ params }) {

   return {
       props: {
         capitoliFoto,
       }
   };
 
}