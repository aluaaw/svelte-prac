<!-- child -->
<script>
    export let fruits;
    export let reverse;
    export let bindText;
    export let slice;
    let name = '';
    if (reverse) {
        fruits = [...fruits].reverse();
        name = 'Reverse';
    } else if (slice) {
        fruits = [...fruits].slice(...slice.split(','));
        name = 'Slice';
    } else {
        fruits = fruits;
    }
</script>

<h2>Fruits {name}</h2>
<ul>
    {#each fruits as fruit}
        <li>{fruit}</li>
    {/each}
</ul>
<!-- <h2>BIND TEXT</h2> -->
<!-- <input type="text" bind:value={bindText} on:input={(e) => bindText = e.target.value} /> -->