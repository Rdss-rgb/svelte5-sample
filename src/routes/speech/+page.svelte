<script lang="ts">
    let inputEl: HTMLInputElement;

    function textToSpeech() {
        const text = inputEl?.value.trim();
        if (!text) return;

        const speechSynth = window.speechSynthesis;

        if (!speechSynth.speaking) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynth.speak(utterance);
        }
    }
</script>

<section class="w-screen p-5 lg:px-54">
    <h1 class="text-2xl font-bold text-neutral-600 mb-5">Text to Speech</h1>
    <section class="mt-10">
        <input
            type="text"
            bind:this={inputEl}
            class="bg-gray-300 p-4 text-2xl w-full"
            placeholder="Enter text"
        />

        <button
            on:click={textToSpeech}
            class="mt-3 bg-blue-500 p-3 font-bold hover:bg-blue-400 text-white w-full"
        >
            Speak
        </button>
    </section>
</section>
