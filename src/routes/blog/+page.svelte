<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>

<section class="w-screen p-5 lg:px-54">
    <h1 class="text-2xl font-bold text-neutral-600 mb-5">Blog post</h1>
    {#each data.summaries as { slug, title }}
        <li class="text-blue-800 hover:text-blue-400">
            <a href="/blog/{slug}">{title}</a>
        </li>
    {/each}
</section>
