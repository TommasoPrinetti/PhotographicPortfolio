<script>

import { onMount } from 'svelte';
import { goto } from '$app/navigation';


export const capitoliFoto = []; 
export let data;

let hideDescription = true;

async function toggleDescription() {
        hideDescription = !hideDescription;
}

async function goToHome() {
        goto('/');
}

let currentIndex = 1;
const maxIndex = 10;

    const updateIndex = (increment) => {
        currentIndex += increment;
        if (currentIndex < 1) {
            currentIndex = maxIndex;
        } else if (currentIndex > maxIndex) {
            currentIndex = 1;
        }
    };

//console.log("data", data)

//console.log("test destructure", data.props.titolo )

</script>

<a class="aboutContainer" on:click={toggleDescription}>
    <p class="descrizioni">About it</p>
</a>

<div class="counterContainer">
    <p class="descrizioni">{currentIndex} of {maxIndex}</p>
</div>


<div class="galleryDescriptionMaster"> 
    <a class="backIntContainer" on:click={goToHome}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="10" viewBox="0 0 25 10" fill="none">
            <path d="M2.5 7.14286C3.30952 7.78572 4.08333 8.54762 4.82143 9.42857H7.57143C7.30952 8.71429 7 8.05952 6.64286 7.46429C6.37046 6.95841 4.3491 6.49229 3.41124 6.06591L4.36271 5.56873L13.0714 5.5L24.6547 5.8763L25 5.56873V3.76674L24.6547 3.4767L13.0714 3.76674H4.36271L3.49155 3.33805C4.45966 2.89516 6.378 2.43724 6.64286 1.96429C7 1.34524 7.30952 0.690476 7.57143 0H4.82143C3.36905 1.7381 1.7619 3.05953 0 3.96429V5.5C0.880952 5.92857 1.71429 6.47619 2.5 7.14286Z" fill="#FF5129"/>
        </svg>
    </a>

    <div class="DescriptionContainer">
        <a class="singleIndexVoice" href="/titoli/{data.props.titolo.titolo}" style="opacity: 100%;">
            <p class="dritto">
                {1}.
            </p>
            <p class="obliqueo">
                {data.props.titolo.titolo}
            </p>
            <p class="dritto">
                -
            </p>
            <p class="dritto">
                {data.props.titolo.location}
            </p>
        </a>

        <div class:descriptionAbout="{hideDescription ? 'show' : ''}">
            <p class="descrizioni">
                La casa/studio di Carol Rama si colloca a Torino in un ambiente completamente oscuro e al riparo da ogni tipo di luce. Il lavoro d'indagine fotografica ha voluto prioritizzare l'intrusione della poca luce (artificiale) nella casa, e del suo rapporto con gli oggetti che assumono forme e silhouette appena percettibili.
            </p>
            <div class="allWhiteCover">

            </div>

        </div>
        
    </div>
</div>

<div class="galleryMaster">

    <a role="button" class="galleryArrowContainer" on:click={() => { updateIndex(-1) }} on:keydown={(event) => { if (event.key === 'ArrowLeft') { updateIndex(-1) } }} tabindex="0" aria-keyshortcuts="ArrowLeft" aria-label="Previous">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="37" viewBox="0 0 24 37" fill="none">
            <path d="M0.47998 16.004L20.96 0.579987L23.52 5.69999L3.03998 18.5L23.52 31.3L20.96 36.42L0.47998 21.06V16.004Z" fill="#FF5129"/>
        </svg>
    </a>
    
    <div class="galleryImgContainer">
        <img src={`/images/${data.props.titolo.titolo}/Gallery/img${currentIndex}.jpg`} alt="">
    </div>

    <a role="button" class="galleryArrowContainer" on:click={() => { updateIndex(1) }} on:keydown={(event) => { if (event.key === 'ArrowRight') { updateIndex(1) } }} tabindex="0" aria-keyshortcuts="ArrowRight" aria-label="Next">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="37" viewBox="0 0 24 37" fill="none">
            <path d="M23.52 20.996L3.04002 36.42L0.480019 31.3L20.96 18.5L0.480021 5.70001L3.04002 0.580011L23.52 15.94L23.52 20.996Z" fill="#FF5129"/>
        </svg>
    </a>
</div>
