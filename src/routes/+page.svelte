<script>

const capitoliFoto = []; 
export let data;

import websiteImage from "$lib/biopic.jpg"

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
     <link rel="icon" href="/favicon.ico">

</svelte:head>

<div class="indexContainer">
    <div>
        <p class="nome">
            TOMMASO PRINETTI <br>
            BASED IN MILAN, ITALY
        </p>
    </div>
    <div class="indexVoicesContainer"> 
        {#each data.props.capitoliFoto as capitoloFoto, index}
            <a class="singleIndexVoice" href="/titoli/{capitoloFoto.titolo}">
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
                    <enhanced:img class="absoluteImg" src="images/{capitoloFoto.titolo}/thumb.jpg" alt={capitoloFoto.titolo}>
                </div>
        {/each}
    </div>
</div>

