<script lang="ts">
    class temp {
        //  use # = private
        #c = $state(0);
        #f = $state(0);

        get c() {
            return this.#c;
        }

        set c(c) {
            this.#c = c;
            this.#f = c * (9 / 5) + 32;
        }

        get f() {
            return this.#f;
        }
        set f(f) {
            this.#f = f;
            this.#c = (f - 32) * (5 / 9);
        }
    }
    const Temperature = new temp();
</script>

<section class="w-screen p-5 lg:px-54">
    <h1 class="text-2xl font-bold text-neutral-600 mb-5">
        Temperature Converter
    </h1>
    <div class="flex flex-col md:flex-row md:gap-4">
        <div
            class="flex items-center gap-2 flex-wrap lg:flex-nowrap w-auto md:w-100"
        >
            <input
                type="number"
                name="Celcius"
                id="Celcius"
                bind:value={Temperature.c}
                class="bg-sky-100 text-2xl w-full h-10 flex mt-5 indent-2"
            />
            <label for="Celcius">°C </label>
        </div>
        <p class=" text-2xl h-10 text-center lg:mt-5">=</p>
        <div
            class="flex items-center gap-2 flex-wrap lg:flex-nowrap w-auto md:w-100"
        >
            <input
                type="number"
                name="Fahrenheit"
                id="Fahrenheit"
                bind:value={Temperature.f}
                class="bg-red-200 text-2xl w-full h-10 flex mt-5 indent-2"
            />
            <label for="Fahrenheit">°F</label>
        </div>
    </div>
</section>
