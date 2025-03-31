<script lang="ts">
    import Cookies from "js-cookie";
    let { data } = $props();
    function this1() {
        let current = Cookies.get("visited") === "true";
        Cookies.set("visited", !current ? "true" : "false", { path: "/" });
        location.reload();
    }
</script>

<section class="w-screen p-5 md:px-54">
    <h1 class="text-2xl font-bold text-neutral-600">Cookie checker</h1>

    <h1>Hello {data.visited ? "friend" : "stranger"}!</h1>

    <button
        onclick={this1}
        class="text-xl bg-amber-500 px-2 py-2 rounded-xl mt-5 w-full hover:bg-amber-600"
        >Change Cookie</button
    >
</section>
