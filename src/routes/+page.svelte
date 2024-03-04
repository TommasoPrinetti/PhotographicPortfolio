<script>

export let capitoliFoto = [
    {
       titolo: "Monica & Paolo",
       location: "San Colombano al Lambro",
       imgSrc: "images//MonicaEPaolo/thumb.jpg",
    },
    {
       titolo: "Lucia & Stefano",
       location: "Verona città metropolitana",
       imgSrc: "",
    },
    {
       titolo: "Lucia & Luca",
       location: "Verona città metropolitana",
       imgSrc: "",
    },
    {
       titolo: "At Carol Rama’s",
       location: "Torino, Casa museo Carol Rama",
       imgSrc: "",
    },
    {
       titolo: "Sinking",
       location: "Milano, Studi PoliMi",
       imgSrc: "",
    },
    {
       titolo: "Atacama",
       location: "Cave di Malnate",
       imgSrc: "",
    },
    {
       titolo: "Corporate events",
       location: "Mixed locations",
       imgSrc: "",
    },
    {
       titolo: "Reportages",
       location: "Mixed locations",
       imgSrc: "",
    },
    {
       titolo: "Lazza, Re Mida",
       location: "Alcatraz, 2019",
       imgSrc: "",
    },
    {
       titolo: "Curriculum vitae",
       location: "",
       imgSrc: "",
    }
]

</script>

<div class="indexContainer">
    <div>
        <p class="nome">
            TOMMASO PRINETTI <br>
            BASED IN MILAN, ITALY
        </p>
    </div>
    <div class="indexVoicesContainer"> 
        {#each capitoliFoto as capitoloFoto, index}
                <a class="singleIndexVoice" href="/"> 
                    <p class="dritto">
                        {index +1}.
                    </p>
                    <p class="obliqueo">
                        {capitoloFoto.titolo}
                    </p>
                    <p class="dritto">
                        -
                    </p>
                    <p class="dritto">
                        {capitoloFoto.location}
                    </p>
                </a>
                <div class="absoluteImgContainer">
                    <img class="absoluteImg" src="{capitoloFoto.imgSrc}" alt={capitoloFoto.titolo}>
                </div>
        {/each}
    </div>
</div>

