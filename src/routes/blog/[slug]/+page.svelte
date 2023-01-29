<script lang="ts">
    type BlogPost = {
        title: string;
        description: string;
        body: string;
        content: string;
    }

    export let data: BlogPost;
</script>
<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.description} />
</svelte:head>

<section class="relative py-16">
    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1>
                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {data.title}
                </span>
            </h1>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            {@html data.body}
        </div>
    </div>
</section>