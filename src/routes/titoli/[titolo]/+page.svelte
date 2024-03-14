<script>
    import { goto } from '$app/navigation';
    import { onNavigate } from '$app/navigation';

    export let data;

    let hideDescription = true;

    let resizeImg = false;

    async function toggleDescription() {
        hideDescription = !hideDescription;
    }

    async function toggleImgSize() {
        resizeImg = !resizeImg;
    }

    async function toggleAll() {
        toggleDescription();
        toggleImgSize();
    }

    let currentIndex = 1;
    const maxIndex = 20;

    const updateIndex = (increment) => {
        currentIndex += increment;
        if (currentIndex < 1) {
            currentIndex = maxIndex;
        } else if (currentIndex > maxIndex) {
            currentIndex = 1;
        }
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

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->




<div class="indexContainer">
    <div>
        <p class="nome">
            TOMMASO PRINETTI <br>
            BASED IN MILAN, ITALY
        </p>
    </div>

    <div class="indexVoicesContainer isPage">
        {#if data && data.props && data.props.capitoliFoto}
            {#each data.props.capitoliFoto as capitoloFoto, index}
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
    <div class="galleryMaster">

        <a role="button" class="galleryArrowContainer" on:click={() => { updateIndex(-1) }} on:keydown={(event) => { if (event.key === 'ArrowLeft') { updateIndex(-1) } }} tabindex="0" aria-keyshortcuts="ArrowLeft" aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="37" viewBox="0 0 24 37" fill="none">
                <path d="M0.47998 16.004L20.96 0.579987L23.52 5.69999L3.03998 18.5L23.52 31.3L20.96 36.42L0.47998 21.06V16.004Z" fill="#FF5129"/>
            </svg>
        </a>
        
        <div class="galleryImgContainer {resizeImg ? 'Active' : ''}">
            <img src={`/images/${data.props.titolo.titolo}/Gallery/img${currentIndex}.jpg`} alt="">
        </div>
    
        <a role="button" class="galleryArrowContainer" on:click={() => { updateIndex(1) }} on:keydown={(event) => { if (event.key === 'ArrowRight') { updateIndex(1) } }} tabindex="0" aria-keyshortcuts="ArrowRight" aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="37" viewBox="0 0 24 37" fill="none">
                <path d="M23.52 20.996L3.04002 36.42L0.480019 31.3L20.96 18.5L0.480021 5.70001L3.04002 0.580011L23.52 15.94L23.52 20.996Z" fill="#FF5129"/>
            </svg>
        </a>
    </div>
    <a class="aboutContainer" on:click={toggleAll}>
        <p class="descrizioni">About it</p>
    </a>

    <div class="counterContainer">
        <p class="descrizioni">{currentIndex} of {maxIndex}</p>
    </div>
</div>

