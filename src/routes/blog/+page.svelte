<script lang="ts">
	import PostCard from './post-card.svelte';
	import type { BlogPost, CollectionResponse } from './post.types';

    export let data: CollectionResponse<BlogPost>
</script>

<div class="max-w-7xl mx-auto relative py-16">
	<div class="grid gap-4 grid-cols-1 md:grid-cols-3">
		{#each data.items as item}
			<PostCard slug={item.slug} title={item.title} description={item.description} heroImage={item.heroImage.url} />
		{/each}
	</div>
</div>
