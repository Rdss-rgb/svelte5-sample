<script lang="ts">
    let count = 0;
</script>

<section class="w-screen p-5 md:px-54">
    <h1 class="text-2xl font-bold text-neutral-600">Counter App</h1>

    <input
        type="number"
        bind:value={count}
        class="bg-neutral-200 text-2xl w-full h-10 flex mt-5 indent-2"
    />

    <button
        on:click={() => count++}
        class="text-xl bg-amber-500 px-2 py-2 rounded-xl mt-5 w-full md:w-34 hover:bg-amber-600"
    >
        Count
    </button>
</section>
