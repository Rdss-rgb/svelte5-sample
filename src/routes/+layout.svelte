<script>
    /** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
    let { data, children } = $props();
    import "../app.css";
</script>

<nav class="bg-white border-gray-200">
    <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
        <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
        >
            <img src="/svelte.png" alt="" class="w-10" />
            <span
                class="self-center text-2xl font-semibold whitespace-nowrap text-orange-500 font-bold"
                >Svelte</span
            >
        </a>
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
        >
            <span class="sr-only">Open main menu</span>
            <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
                class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
            >
                <li>
                    <a
                        href="/"
                        class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-orange-400 md:p-0"
                        aria-current="page">Home</a
                    >
                </li>
                <li>
                    <a
                        href="/counter"
                        class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0"
                        >Counter</a
                    >
                </li>
                <li>
                    <a
                        href="/Temperature"
                        class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0"
                        >Temperature Converter</a
                    >
                </li>
                <li>
                    <a
                        href="/speech"
                        class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0"
                        >Text to Speech</a
                    >
                </li>
                <li>
                    <a
                        href="/blog"
                        class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0"
                        >Blog</a
                    >
                </li>
                <li>
                    <a
                        href="/cookie"
                        class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0"
                        >Cookie</a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav>
{@render children()}
