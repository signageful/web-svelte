<script lang="ts">
	import type { QA } from './questionaire.types';


    export let questions: QA[] = []
</script>

<section class="relative md:py-24 py-16 bg-white">
    <div class="max-w-7xl mx-auto relative">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
            {#each questions as  question}
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-600 mr-3"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    <div class="flex-1">
                        <h5 class="mb-2 text-xl font-semibold text-black">
                            {question.question}
                        </h5>
                        <p class="text-slate-600">
                            {question.answer}
                        </p>
                    </div>
                    
                </div>
            
            {/each}
        </div>
    </div>
</section>