<script lang="ts">
    export let title: string = "Title";
    export let description: string | null | undefined = null;
</script>

<section class="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
    <div class="max-w-6xl mx-auto relative">
        <div class="grid grid-cols-1 text-center mt-10">
            <h3 class="text-3xl leading-normal font-semibold">
                {title}
            </h3>
            {#if description}
                <p>
                    {description}
                </p>
            {/if}
        </div>
    </div>
</section>
<div class="relative">
    <div class="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
        <svg class="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
    </div>
</div>