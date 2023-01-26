<section class="relative flex w-full md:py-24 py-16 bg-primary-600 h-[820px] overflow-hidden">
    <div class="max-w-7xl mx-auto flex items-center">
        <div class="grid grid-cols-1 mt-10 text-center">
            <h1 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl text-white  mb-5">
                <slot name="title" />
            </h1>
            <p class="text-white text-lg max-w-xl mx-auto">
                <slot name="description" />
            </p>
        </div>
    </div>
</section>