<script>
	import Questionaire from '../components/heroes/Questionaire.svelte';
	import billboardImg from '../assets/billboard.jpg';

    const benefits = [
        {
			title: 'Einfache Aktualisierung',
			description:
				'Nutzen Sie die volle Kontrolle über Ihre Inhalte und aktualisieren Sie sie jederzeit einfach und schnell.'
		},
		{
			title: 'Vielfältige Einsatzmöglichkeiten',
			description:
				'Nutzen Sie Digital Signage im Einzelhandel, um Ihre Kunden zu informieren und zu unterhalten.'
		},
		{
			title: 'Professionelle Unterstützung',
			description:
				'Wir unterstützen Sie bei der Konzeption und Gestaltung Ihrer Inhalte für Digital Signage.'
		},
		{
			title: 'Einfache Bedienung des CMS',
			description:
				'Unser Digital Signage CMS bietet eine intuitive Nutzeroberfläche für eine einfache Bedienung.'
		},
		{
			title: 'Flexible SaaS-Lösung',
			description:
				'Unser Digital Signage CMS ist als Software as a Service Lösung konzipiert und bietet daher flexible Nutzungsmöglichkeiten.'
		},
		{
			title: 'Sichere Cloud-Technologie',
			description:
				'Durch die Nutzung moderner Cloud-Technologie gewährleisten wir eine sichere Nutzung unseres Digital Signage CMS.'
		},
		{
			title: 'Konzeption und Gestaltung',
			description:
				'Unser Team unterstützt Sie bei der Konzeption und Gestaltung Ihrer Digital Signage Inhalte für das CMS.'
		}
    ]
</script>

<svelte:head>
	<title>Signageful Kiosk Screens</title>
	<meta
		name="description"
		content="Ihr Screen und unsere Software. Wir bieten Ihnen die passende Lösung für Ihre Kiosk Screens."
	/>
</svelte:head>
<section class="flex relative w-full md:py-20 py-16 bg-white min-h-screen overflow-hidden">
	<div class="max-w-7xl w-full mx-auto flex items-center px-4">
		<div class="grid w-full md:grid-cols-2 text-left">
			<div class="flex flex-col order-2 md:order-1">
				<h1 class="max-w-md font-semibold text-4xl lg:text-6xl text-black  mb-5">
					<span class="block text-white">Signageful</span>
					The Platform for Digital Signage
				</h1>
				<div class="max-w-md mb-7 text-slate-600 font-medium">
					Signageful ist ein benutzerfreundliches Content Management System (CMS) für Digital
					Signage Monitore. Mit unserer Lösung können Sie einfach und flexibel Inhalte auf Ihren
					Monitoren verwalten und anzeigen lassen. Erstellen Sie Kampagnen, planen Sie die
					Anzeigezeiten und steuern Sie mehrere Monitore aus einer zentralen Plattform heraus.
				</div>
			</div>
			<div class="flex items-center justify-center my-4 md:my-0 md:order-2">
				<img
					class="rounded-lg overflow-hidden w-full h-auto max-w-full object-cover"
					alt="Billboard in City"
					src={billboardImg}
				/>
			</div>
		</div>
	</div>
</section>
<section class="flex flex-col relative w-full md:py-20 py-16 bg-primary-600 overflow-hidden">
    <div class="max-w-7xl w-full mx-auto flex items-center px-4">
        <div>
            <h2 class="max-w-md font-semibold text-4xl lg:text-6xl text-white mb-5">
                Nutzen Sie das volle Potential Ihres Digital Signage
            </h2>
            <p class="max-w-md mb-7 font-semibold text-white">
			    Mit unserem Digital Signage CMS können Sie das volle Potential
                Ihres Digital Signage ausschöpfen und Ihre Inhalte effektiv
                präsentieren. Unsere Lösung bietet eine einfache Bedienung,
                sichere Nutzung und flexible Nutzungsmöglichkeiten.
			</p>
        </div>
    </div>
    
</section>
<section class="flex flex-col relative w-full md:py-20 py-16 bg-slate-100 overflow-hidden">
    <div class="max-w-7xl w-full mx-auto flex items-center px-4">
        <!-- benefits-->
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2 w-full max-w-[78%]">
            {#each benefits as benefit }
                <div
                    class="col-span-1"
                >
                    <h2 class="font-semibold text-3xl text-black mb-5">{benefit.title}</h2>
                    <p>
                        {benefit.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
<Questionaire
	questions={[
		{
			question: 'Was ist Digital Signage?',
			answer:
				'Digital Signage ist eine Form der elektronischen Informationsverbreitung, bei der digitale Inhalte wie Bilder, Videos und Grafiken auf Bildschirmen präsentiert werden. Unser CMS Signageful bietet eine einfache und flexible Lösung für Digital Signage.'
		},
		{
			question: 'Wie funktioniert Digital Signage?',
			answer:
				'Digital Signage funktioniert, indem digitale Inhalte auf Bildschirmen dargestellt werden. Die Inhalte werden entweder von einem Computer oder von einer Cloud-Plattform aus auf die Bildschirme übertragen. Mit unserem CMS Signageful können Sie Ihre Inhalte einfach und schnell verwalten und auf Ihre Bildschirme übertragen.'
		},
		{
			question: 'Was sind die Vorteile von Digital Signage?',
			answer:
				'Digital Signage bietet viele Vorteile wie zum Beispiel die Möglichkeit, Inhalte schnell und flexibel anzupassen, eine höhere Aufmerksamkeit von Betrachtern durch visuelle Inhalte und die Möglichkeit, Inhalte zielgerichtet an bestimmte Zielgruppen zu senden. Mit unserem CMS Signageful können Sie von all diesen Vorteilen profitieren und Ihre Digital Signage Lösung individuell anpassen.'
		},
		{
			question: 'Welche Branchen nutzen Digital Signage?',
			answer:
				'Digital Signage wird in vielen Branchen eingesetzt, beispielsweise im Einzelhandel, im Gesundheitswesen, im öffentlichen Raum, im Transportwesen und im Bildungswesen. Auch viele Unternehmen setzen Digital Signage in ihren Büros und anderen Geschäftsräumen ein, um beispielsweise Mitarbeiter über Unternehmensnachrichten zu informieren oder Kunden und Besuchern wichtige Informationen zur Verfügung zu stellen. Mit unserem CMS Signageful können Sie Digital Signage in all diesen Branchen und Kontexten einsetzen.'
		},
		{
			question: 'Welche Hardware wird für Digital Signage benötigt?',
			answer:
				'Für Digital Signage werden in der Regel spezielle Bildschirme oder Displays benötigt, die digitalen Inhalten gerecht werden. Diese können beispielsweise LCD- oder LED-Displays sein. Zusätzlich benötigen Sie einen Computer wie zum Beispiel einen Raspberry Pi 4 mit einem eigenen Betriebssystem, um die Inhalte auf die Bildschirme zu übertragen. Mit unserem CMS Signageful können Sie auf diese Hardware zurückgreifen und Ihre Inhalte einfach verwalten und auf Ihre Bildschirme übertragen.'
		},
		{
			question: 'Welche Rolle spielt die Cloud bei Digital Signage?',
			answer:
				'Mit einer Cloud-basierten Plattform wie unserem CMS Signageful können Sie von vielen Vorteilen profitieren, zum Beispiel von der Möglichkeit, die Software-Wartung und Infrastruktur durch uns bereitgestellt zu bekommen. Die Cloud bietet auch Vorteile wie Skalierbarkeit und Zugriffssicherheit, die für eine erfolgreiche Digital Signage Lösung wichtig sind.'
		}
	]}
/>
