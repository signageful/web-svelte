<script lang="ts">
    import { Button } from 'flowbite-svelte'
    import { Obfuscate } from "svelte-obfuscate"
</script>
<svelte:head>
    <title>Kontakt - Signageful</title>
</svelte:head>

<section class="flex w-full md:py-20 py-16 bg-primary-50 min-h-screen overflow-hidden">
    <div class="max-w-7xl w-full mx-auto grid gap-4 items-center md:grid-cols-2 px-4">
        <div class="">
            <h1 class="text-3xl md:text-7xl font-bold text-black mb-8">Let&apos;s Talk</h1>
            <p class="max-w-md">
               Schnell wachsende Marken benötigen eine Kunden-zentrierte Erfahrung, die
               über die Vorlagen-Lösungen hinausgeht. Signagefuls API-first Ansatz ermöglicht
               ultra-schnelle, dynamische und personalisierte Erlebnisse, die auf allen Geräten
               wunderschön sind. Wenn dies zu Ihrer Vision für Digital Signage passt, beginnen
               Sie ein Gespräch mit unseren Vertriebs- und technischen Teams, um Ihr Projekt zu
               besprechen. 
            </p>
        </div>
        <div>
            <div class="sticky top-[2rem] mt-8">
                <div class="bg-white shadow py-8 px-6 md:p-12 flex items-center flex-col">
                    <p class="text-center text-4xl mb-4">
                        Contact us at <span class="block mt-2 text-primary-600"><Obfuscate email="hello@signageful.com"/></span>
                        
                        <span class="mt-4 block">or</span>
                    </p>
                    <Button size="xl" color="dark" target="_blank" href="https://a6bnzivz50w.typeform.com/to/LpLu6joG">
                        Request a demo
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Button>
                </div>
            </div>
        </div>
    </div>
</section>
