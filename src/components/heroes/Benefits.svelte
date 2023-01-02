<script lang="ts">
    import bgImage from "../../assets/bus-station-by-seri-sakharovskiy.jpg";
    import type { Benefit } from "./benefits.types";

    export let benefits: Benefit[] = []
    export let title: string;
     export let description: string;
</script>

<section 
    class="relative md:py-24 py-16 bg-center bg-no-repeat"
    style="background-image: url({bgImage})"
>
    <div class="absolute inset-0 bg-slate-900/80 " />
    <div class="max-w-6xl mx-auto relative">
        <div class="grid grid-cols-1 pb-8 text-center justify-center items-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-white">{title}</h3>
            <p class="text-white/70 max-w-xl mx-auto">{description}</p>
        </div>
        {#if benefits && benefits.length > 0}
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {#each benefits as benefit}
                    <div class="border border-dashed border-white/30 rounded-md p-6 text-center">
                        <h3 class="text-lg font-medium text-white">
                            {benefit.title}
                        </h3>
                        <p class="text-white/70 mt-3">
                            {benefit.description}
                        </p>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</section>