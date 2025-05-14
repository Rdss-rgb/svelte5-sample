<script lang="ts">
    import Header from "./header.svelte";
    let name = "aaron";

    let status: "OPEN" | "CLOSED" = $state("OPEN");

    function onclick() {
        status = status === "OPEN" ? "CLOSED" : "OPEN";
    }
</script>

<section class="w-screen p-5 md:px-54">
    <h1 class="text-3xl">Welcome to Svelte 5 projects</h1>
    <ul>
        <li>Basic Counter</li>
        <li>Temperature Converter</li>
        <li>Text to Speech</li>
        <li>Blog</li>
        <li>Cookie</li>
    </ul>
</section>

<!-- <Header {name} />
<p>{status}</p>
<button {onclick}>ssss</button> -->

<style lang="postcss">
    @reference "tailwindcss";
    :global(html) {
        background-color: theme(--color-gray-100);
    }
</style>
