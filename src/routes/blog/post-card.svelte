<script lang="ts">
	export let title: string;
	export let description: string;
    export let slug: string;
    export let heroImage: string | null | undefined = null;
</script>

<article class="pt-12 mb-12 md:pt-0 md:mb-0">
    {#if heroImage}
        <div class="w-full pb-[44%] min-h-[17rem] overflow-hidden rounded-sm"
            style="background-image: url({heroImage}); background-size: cover; background-position: center center;"
        />
    {/if}
    <div class="box-border flex flex-row flex-wrap">
        <div class="block w-full max-w-full md:max-w-[83.3333%] mx-auto">
            <div class="relative bg-white shadow rounded transform translate-y-[-10rem]">
                <a
                    href={`/blog/${slug}`}
                    class="no-underline text-current"
                >
                    <div class="block text-xl leading-relaxed md:pt-16 pt-4 px-8 md:px-24">
                        <h6 class="text-sm font-medium text-primary-600">
                            Article
                        </h6>
                        <h2 class="text-xl font-semibold text-gray-900">
                            {title}
                        </h2>
                        <div>
                            <p class="my-12 text-base text-gray-500">
                                {description}
                            </p>
                        </div>
                        <span class="text-xl font-medium text-black flex py-8 items-center">
                            <span class="relative">
                                <span class="absolute block w-[calc(100%-2.5rem)] h-px left-0 bottom-0 bg-black">&nbsp;</span>
                                Mehr ...
                            </span>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</article>
