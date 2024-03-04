<script>

export let capitoliFoto = [
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
            <a class="singleIndexVoice">
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
                    <img class="absoluteImg" src="images/{capitoloFoto.imgSrc}/thumb.jpg" alt={capitoloFoto.titolo}>
                </div>
        {/each}
    </div>

    
</div>

