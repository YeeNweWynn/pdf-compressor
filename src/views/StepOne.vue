<template>
    <div class="CompressionForm bg-blue-50 rounded-lg border border-blue-500 p-4 mt-6 min-h-[259px]">
        <div class="Step1 flex flex-col items-center justify-center">
        <DropZone @file-dropped="handleFileSelected"/>
        <div class="absolute">
            <UploadButton buttonText="Select files" @file-selected="handleFileSelected" />
        </div>
        </div>
    </div>
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