<script>
    import { Obfuscate } from "svelte-obfuscate"
	import Pager from "../../components/heroes/Pager.svelte";

</script>
<Pager title="Impressum" />

<div class="relative md:py-24 py-16">
    <div class="max-w-2xl mx-auto relative w-full">
        <div class="md:flex">
            <div class="p-6 bg-white dark:bg-slate-900 dark:text-white shadow dark:shadow-gray-800 rounded-md prose dark:prose-invert w-full">
                <h3 class="dark:text-white">teamspiel Gmbh</h3>
                <p>
                    Unterjörn 19a<br />
                    24536 Neumünster
                </p>
                <h3>Kontakt</h3>
                <p>
                    Telefon: 04321 123456<br />
                    E-Mail: <Obfuscate email="hello@teamspiel.io" /> 
                </p>
                <h3>Vertreten durch</h3>
                <p>Julian Köhn</p>
                <h3>Registereintrag</h3>
                <p>
                    <span>
                        Registergericht: Amtsgericht Kiel 
                    </span>
                    <br />
                    <span>Registernummer: HRB 158855 B</span>
                    <br>
                    <span>Umsatzsteuer-ID: DE 354852154</span>
                    <br>
                    <span>Steuernummer: 20/298/56313</span>
                </p>
                <h4>Legal Note</h4>
                <p>
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                        Here is the link
                    </a> to the platform of the European Commission according to Regulation on consumer Online Dispute Resolution. Contentful does currently not use the Online Dispute Resolution platform for any complaints.
                </p>
            </div>
        </div>
    </div>
</div>