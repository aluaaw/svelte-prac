<script>
    export let name;
    import Fruits from './Fruits.svelte';
    let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango'];
    let toggle = false;
    function deleteFruits() {
        fruits = fruits.slice(1);
    }
    // const deleteFruits = () => { 	console.log("몇번 렌더링?")     fruits =
    // fruits.slice(1); }
	function leave() {
		name = 'leave';
	}
    let isRed = false;
	let text = '';
	function submit() {
		text = 'SUCCESS';
	}
    let bindText = '';
</script>

<!-- toggle practice -->
<main>
    {#if toggle}
        <h1>Hello
            {name}!</h1>
    {:else}
        <h1>NONO</h1>
    {/if}
    <button on:click={() => {toggle = !toggle} }>Toggle</button>
</main>

<!-- slice practice -->
<main>
    <h1>{name}</h1>
    <ul>
        {#each fruits as fruit}
            <li>{fruit}</li>
        {/each}
    </ul>
    <button on:click={deleteFruits}>Eat it!</button>
</main>

<!-- mouseEnter & mouseLeave practice -->
<div
    class='box'
    style='background-color: {isRed? 'red' : 'orange'}'
    on:click={() => {
		isRed = !isRed}}
		on:mouseenter={() => name = 'enter'}
		on:mouseleave={leave}>
    Box
</div>

<!-- input, binding practice -->
<div>
	<h2>{text}</h2>
	<input on:input={(e) => text = e.target.value}/>
	<input type="text" bind:value={text} on:input={(e) => text = e.target.value}/>
	<button on:click={submit}>SUBMIT</button>
</div>

<!-- component practice -->
<Fruits {fruits} {bindText}/>
<Fruits {fruits} reverse {bindText}/>
<Fruits {fruits} {bindText} slice='2'/>
<Fruits {fruits} {bindText} slice='0,1'/>

<style>
    .box {
        width: 300px;
        height: 150px;
        background-color: orange;
    }

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>