/** @type {import('./$types').PageLoad} */

import { error } from '@sveltejs/kit';

let capitoliFoto = [
   {
       titolo: "Monica & Paolo",
       location: "San Colombano al Lambro",
    },
    {
       titolo: "Lucia & Stefano",
       location: "Verona città metropolitana",
    },
    {
       titolo: "Lucia & Luca",
       location: "Verona città metropolitana",
    },
    {
       titolo: "At Carol Rama’s",
       location: "Torino, Casa museo Carol Rama",
    },
    {
       titolo: "Sinking",
       location: "Milano, Studi PoliMi",
    },
    {
       titolo: "Atacama",
       location: "Cave di Malnate",
    },
    {
       titolo: "Corporate events",
       location: "Mixed locations",
       imgSrc: "Corporate",
    },
    {
       titolo: "Reportages",
       location: "Mixed locations",
    },
    {
       titolo: "Lazza, Re Mida",
       location: "Alcatraz, 2019",
    },
    {
       titolo: "Curriculum vitae",
       location: "",
    }
];

//serve cambiare il parametro titolo sennò l'oggetto diventa titolo.titolo e fa confusione

export async function load({ params }) {

   return {
       props: {
         capitoliFoto,
       }
   };
 
}