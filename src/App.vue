
<template>
  <div class="CompressPdfUploadPdf w-[1512px] h-[2408px]">
    <Header/>
    <router-view/>
    <!-- <router-view :step="step"/>
    <Footer :step="step"/> -->
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
