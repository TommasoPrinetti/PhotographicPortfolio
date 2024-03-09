/** @type {import('./$types').PageLoad} */

import { error } from '@sveltejs/kit';

let capitoliFoto = [
    {
        titolo: "Monica & Paolo",
        location: "San Colombano al Lambro",
        imgSrc: "MonicaEPaolo",
     },
     {
        titolo: "Lucia & Stefano",
        location: "Verona città metropolitana",
        imgSrc: "LuciaEStefano",
     },
     {
        titolo: "Lucia & Luca",
        location: "Verona città metropolitana",
        imgSrc: "LuciaELuca",
     },
     {
        titolo: "At Carol Rama’s",
        location: "Torino, Casa museo Carol Rama",
        imgSrc: "AtCarolRama",
     },
     {
        titolo: "Sinking",
        location: "Milano, Studi PoliMi",
        imgSrc: "Sinking",
     },
     {
        titolo: "Atacama",
        location: "Cave di Malnate",
        imgSrc: "Atacama",
     },
     {
        titolo: "Corporate events",
        location: "Mixed locations",
        imgSrc: "Corporate",
     },
     {
        titolo: "Reportages",
        location: "Mixed locations",
        imgSrc: "Reportages",
     },
     {
        titolo: "Lazza, Re Mida",
        location: "Alcatraz, 2019",
        imgSrc: "LazzaReMida",
     },
     {
        titolo: "Curriculum vitae",
        location: "",
        imgSrc: "Curriculum",
     }
];

export async function load({ params }) {
   // console.log("params", params)
   const titoloSlug = params.titolo;

   // console.log("params", params.titolo)
   const foundTitolo = capitoliFoto.find(titolo => params.titolo === titoloSlug);

   return {
       props: {
           titolo: foundTitolo,
       }
   };
 
}