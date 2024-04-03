<script>
    import { goto } from '$app/navigation';
    import { onNavigate } from '$app/navigation';
    import { onMount, afterUpdate } from 'svelte';

    export let data;

    let aboutText = "About It";

    let currentIndex = 1;

    let hideDescription = true;

    import websiteImage from "$lib/biopic.webp"

    let websiteUrl = "https://photographic-portfolio.vercel.app/";

    let bioText = "Tommaso Prinetti, Photographer";

    let resizeImg = false;

    let imgSrc;

    onMount(() => {
        imgSrc = `/images/${data.props.titolo.titolo}/Gallery/img${currentIndex}.webp`;
    });

    afterUpdate(() => {
        imgSrc = `/images/${data.props.titolo.titolo}/Gallery/img${currentIndex}.webp`;
    });

    async function toggleDescription() {
        hideDescription = !hideDescription;
    }

    async function toggleImgSize() {
        resizeImg = !resizeImg;

        if (resizeImg === true) {
        aboutText = "Close about";
        } else if (resizeImg === false) {
            aboutText = "About It";
        }
    }

    async function toggleAll() {
        toggleDescription();
        toggleImgSize();
        console.log("clicked");
    }

    const maxIndex = 10;

    const updateIndex = (increment) => {
        currentIndex += increment;
        if (currentIndex < 1) {
            currentIndex = maxIndex;
        } else if (currentIndex > maxIndex) {
            currentIndex = 1;
        }
        console.log("IndexUpdated");
        currentIndex = currentIndex;
    };

    const handleNavigation = async (url) => {
        if (resizeImg) {
            resizeImg = false;
        }
        if (!hideDescription) {
            hideDescription = true;
        }

        currentIndex = 1; 
        await goto(url);
    };

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });

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



<div class="galleryDescriptionMaster"> 
    <div class="DescriptionContainer">
        <div class="descriptionAbout {hideDescription ? '' : 'show'}">
            <p class="descrizioni">
                {data.props.titolo.descrizione}
            </p>
        </div>
    </div>
</div>

<div class="galleryGrandfather">
    
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="galleryMaster">
        <div class="indexContainer">
            <a class="nomeContainer" href="/">
                <p class="nome" >
                    TOMMASO PRINETTI <br>
                    BASED IN MILAN, ITALY
                </p>
            </a>
        
            <div class="indexVoicesContainer isPage">
                {#if data && data.props && data.props.capitoliFoto}
                    <!-- svelte-ignore a11y-missing-attribute -->
                    {#each data.props.capitoliFoto as capitoloFoto, index}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a class="singleIndexVoice {capitoloFoto.titolo === data.props.titolo.titolo ? 'isSlug' : 'isNotSlug'}" on:click={() => handleNavigation(`/titoli/${capitoloFoto.titolo}`)}>
                        <p class="dritto">{index + 1}.</p>
                        <p class="obliqueo">{capitoloFoto.titolo}</p>
                        <p class="dritto">-</p>
                        <p class="dritto">{capitoloFoto.location}</p>
                    </a>
                    {/each}
                {/if}
            </div>
        </div>

        <!-- svelte-ignore a11y-missing-attribute -->
        <a role="button" class="galleryArrowContainer" on:click={() => { updateIndex(-1) }} on:keydown={(event) => { if (event.key === 'ArrowLeft') { updateIndex(-1) } }} tabindex="0" aria-keyshortcuts="ArrowLeft" aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="37" viewBox="0 0 24 37" fill="none">
                <path d="M0.47998 16.004L20.96 0.579987L23.52 5.69999L3.03998 18.5L23.52 31.3L20.96 36.42L0.47998 21.06V16.004Z" fill="#FF5129"/>
            </svg>
        </a>
        
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="galleryImgContainer {resizeImg ? 'Active' : ''}" on:click={() => { updateIndex(+1), console.log("tap") }}>
            <img src={imgSrc} alt="" >
        </div>
    
        <!-- svelte-ignore a11y-missing-attribute -->
        <a role="button" class="galleryArrowContainer" on:click={() => { updateIndex(1) }} on:keydown={(event) => { if (event.key === 'ArrowRight') { updateIndex(1) } }} tabindex="0" aria-keyshortcuts="ArrowRight" aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="37" viewBox="0 0 24 37" fill="none">
                <path d="M23.52 20.996L3.04002 36.42L0.480019 31.3L20.96 18.5L0.480021 5.70001L3.04002 0.580011L23.52 15.94L23.52 20.996Z" fill="#FF5129"/>
            </svg>
        </a>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="aboutContainer" on:click={toggleAll}>
        <p class="descrizioni">{aboutText}</p>
    </a>

    <div class="counterContainer">
        <p class="descrizioni">{currentIndex} of {maxIndex}</p>
    </div>
</div>

