<script>

const capitoliFoto = []; 
export let data;

import websiteImage from "$lib/biopic.jpeg"

let websiteUrl = "https://photographic-portfolio.vercel.app/";

let bioText = "Tommaso Prinetti, Photographer";

</script>

<svelte:head>
     <!-- Meta tags -->
     <meta name="description" content="Tommaso Prinetti is a Photographer and Designer from Milan, Italy">
     <meta name="keywords" content="Photography, Portfolio, Photographer, Corporate Photography, Reportage Photography, Wedding Photography">
     <meta property="og:title" content={bioText}>
     <meta property="og:description" content="Tommaso Prinetti is a Photographer and Designer from Milan, Italy">
     <meta property="og:image" content={websiteImage}>
     <meta property="og:url" content={websiteUrl}>
     <meta property="og:type" content="portfolio">
     
     <!-- Favicon -->
     <link rel="icon" href="/favicon.webp">
</svelte:head>

<div class="indexContainer">
    <div class="nomeContainer">
        <p class="nome">
            TOMMASO PRINETTI <br>
            BASED IN MILAN, ITALY
        </p>
    </div>
    <div class="indexVoicesContainer"> 
        {#each data.props.capitoliFoto as capitoloFoto, index}
            <a class="singleIndexVoice" href="/titoli/{capitoloFoto.titolo}">
                <div class="firstIndexDiv">
                    <p class="dritto">
                        {index +1}.
                    </p>
                </div>

                <div class="secondIndexDiv">
                    <p class="obliqueo">
                        {capitoloFoto.titolo} 
                    </p>
                    <p class="dritto">
                        - {capitoloFoto.location}
                    </p>
                </div> 
            </a>
                <div class="absoluteImgContainer">
                    <img class="absoluteImg" src="images/{capitoloFoto.titolo}/thumb.webp" alt={capitoloFoto.titolo}>
                </div>
        {/each}
    </div>
</div>

