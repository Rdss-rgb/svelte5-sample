<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>

<h1 class="font-bold text-3xl">{data.post.title}</h1>
<div>{@html data.post.content}</div>
