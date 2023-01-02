<script lang="ts">
    export let title: string = "Title";
    export let description: string | null | undefined = null;
</script>

<section class="relative table w-full py-32 lg:py-40 bg-primary-600 text-white">
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
