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
        descrizione: "",
     },
     {
        titolo: "Lucia & Luca",
        location: "Verona città metropolitana",
        descrizione: "",
     },
     {
        titolo: "At Carol Rama’s",
        location: "Torino, Casa museo Carol Rama",
        descrizione: "",
     },
     {
        titolo: "Sinking",
        location: "Milano, Studi PoliMi",
        descrizione: "",
     },
     {
        titolo: "Atacama",
        location: "Cave di Malnate",
        descrizione: "",
     },
     {
        titolo: "Corporate events",
        location: "Mixed locations",
        descrizione: "",
     },
     {
        titolo: "Reportages",
        location: "Mixed locations",
        descrizione: "",
     },
     {
        titolo: "Lazza, Re Mida",
        location: "Alcatraz, 2019",
        descrizione: "",
     },
     {
        titolo: "Curriculum vitae",
        location: "",
        descrizione: "",
     }
];

let titolo

export async function load({ params }) {
   const titoloSlug = decodeURIComponent(params.titolo); 

   const foundTitolo = capitoliFoto.find(titolo => titolo.titolo === titoloSlug); 

   return {
       props: {
           titolo: foundTitolo,
       }
   };
}