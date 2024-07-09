
<template>
  <div class="CompressPdf w-[1512px] h-[2408px]">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'; 

  export default {
    components: {
      Header,
      Footer
    },
    props: {
      step: Number
    }
  }
</script>
