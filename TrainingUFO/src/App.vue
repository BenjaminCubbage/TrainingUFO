<template>
  <div ref="page" class="page">
    <div ref="navbar" class="navbar">
      <NavigationBar />
    </div>

    <main>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { useDOMReactiveCSSVar } from './composables/useDOMReactiveCSSVar';

  import NavigationBar from './components/Navigation/NavigationBar.vue';
  import Footer from './components/Navigation/Footer.vue';
  import { NEC } from "./models/NEC/_NEC.js";
  
  import FSegmentedButton from './components/Form/FSegmentedButton.vue';
  import FDropdown from './components/Form/FDropdown.vue';

  import './assets/font-faces.css';
  import './assets/font-faces-fallbacks.css';
  import './assets/vars.css';
  import './assets/base.css';

  export default {
    components: {
      NavigationBar,
      Footer,
      FSegmentedButton,
      FDropdown
    },
    data: () => ({
      NEC,
      _ro: null
    }),
    setup() {
      const page = ref(null);
      const navbar = ref(null);

      useDOMReactiveCSSVar(navbar, page, "--navbar-sticky-offset-height", el => {
        const pos = getComputedStyle(el).position;
        const isSticky = pos === "sticky" || pos === "fixed";
        const height = el.getBoundingClientRect().height;
        return isSticky ? `${height}px` : "0px";
      });

      return { navbar, page };
    }
  };
</script>

<style scoped>
  .page {
    --navbar-sticky-offset-height: 0px;
  }

  @media only screen and (min-width: 500px) and (min-height: 500px) {
    .navbar {
      position: sticky;
      top: 0;
      z-index: var(--z-index-navbar);
    }
  }
</style>
