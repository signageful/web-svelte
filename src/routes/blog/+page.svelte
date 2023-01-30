<script lang="ts">
	import PostCard from './post-card.svelte';
	import type { BlogPost, CollectionResponse } from './post.types';

    export let data: CollectionResponse<BlogPost>
</script>
<section class="max-w-7xl mx-auto py-16 px-4">
    <div class="flex box-border flex-row flex-wrap">
        <div class="block w-full max-w-full ml-[8.3333%]">
            <h2 class="font-light leading-tight text-left text-black mb-8 text-5xl">
                Stay up to date with changes in Signageful and
                <strong class="block font-semibold">trends of modern digital signage</strong>
            </h2>
        </div>
    </div>
</section>
<section class="max-w-6xl mx-auto relative py-16 px-4">
    <div class="flex flex-row flex-wrap box-border">
        <div class="block w-full max-w-full ml-[8.3333%]">
            {#each data.items as item}
			    <PostCard slug={item.slug} title={item.title} description={item.description} heroImage={item.heroImage.url} />
		    {/each}
        </div>
    </div>
</section>