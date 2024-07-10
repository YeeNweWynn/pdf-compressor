
<template>
    <div class="bg-white">
      <div class="w-full">
        <Header/>
            <router-view/>
        </div>
        <Footer/>
       
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
  