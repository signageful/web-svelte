<script lang="ts">
	export let title: string;
	export let description: string;
    export let slug: string;
    export let heroImage: string | null | undefined = null;
</script>

<a href={`/blog/${slug}`} class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    {#if heroImage}
        <div class="flex-shrink-0">
			 <img class="h-48 w-full object-cover" src={heroImage} alt="">
        </div>
    {/if}
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
            <p class="text-sm font-medium text-primary-600">
              <span>
                Article
              </span>
            </p>
            <p class="text-xl font-semibold text-gray-900">
                {title}
            </p>
            <p class="mt-3 text-base text-gray-500">
                {description}
            </p>
        </div>
    </div>
</a>
