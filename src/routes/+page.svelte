<script>

const capitoliFoto = []; 
export let data;

// console.log("IndexData", data)

</script>

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
                    <img class="absoluteImg" src="images/{capitoloFoto.titolo}/thumb.jpg" alt={capitoloFoto.titolo}>
                </div>
        {/each}
    </div>
</div>

