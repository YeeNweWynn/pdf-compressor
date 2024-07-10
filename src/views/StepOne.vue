<template>
      <DropZone @file-dropped="handleFileSelected"/>
  </template>
  
  <script>
  import DropZone from '../components/DropZone.vue';
  import UploadButton from '../components/UploadButton.vue';
  
  export default {
    name: 'StepOne',
    components: {
      DropZone,
      UploadButton
    },
    props: {
      handleFileSelected: {
        type: Function,
        required: true
      }
  }
    
  }
  </script>