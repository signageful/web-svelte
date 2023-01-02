<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Menu from "../components/Menu.svelte";
  import Winter from "../components/winter/Winter.svelte";


  export let isWinter = false;

  // should render <Winter /> in Winter months
    const month = new Date().getMonth();
    if (month === 11 || month === 0 || month === 1) {
      isWinter = true;
    }
</script>

<Menu />
<slot />
<Footer />

{#if isWinter}
  <Winter />
{/if}