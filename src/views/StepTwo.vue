<template>
    <div class="CompressionForm bg-blue-50 rounded-lg border border-blue-500 p-4 mt-6 min-h-[259px]">
        <div class="uploaded-files-container flex flex-wrap justify-center items-start gap-4 mt-4">
          <div v-for="(fileInfo, index) in uploadedFiles" :key="index" class="Preview relative flex flex-col items-center mb-4">
            <div class="ActionBution flex justify-between w-full">
              <button class="IconZoom flex justify-center items-center">
                <img class="w-4" src="./../assets/Icon/Zoom.svg"/>
              </button>
              <button class="IconDelete flex justify-center items-center" @click="removeFile(index)">
                <img class="w-4" src="./../assets/Icon/Delete.svg" />
              </button>
            </div>
            <div class="PreviewImageWrapper relative w-48 h-50 flex justify-center items-center pb-[40px]">
              <div class="PreviewOverlay inset-0 bg-blue-50"></div>
              <img class="w-32 h-40 shadow border border-stone-300" src="./../assets/icon/sample_pdf.png" alt="Uploaded PDF" />
              <div class="FileInfo absolute left-0 bottom-0 w-full text-center text-neutral-800 text-xs font-normal bg-blue-50">
                {{ truncateFilename(fileInfo.name) }} <br> {{ formatBytes(fileInfo.size) }}
              </div>
            </div>
          </div>
        </div>
        <div v-if="uploadedFiles.length > 0" class="flex justify-end">
            <img class="h-8" src="./../assets/Icon/icon-plus-square.svg" @click="triggerFileInput"/>
            <UploadButton ref="uploadButton" @file-selected="handleFileSelected"/> 
        </div>
    </div>
    <Recommended @option-selected="$emit('option-selected', $event)" />
    <div class="flex justify-center mt-[30px]">
        <DefaultButton
            :buttonText="loading? 'Compressing...' : 'Compress'"
            bgColor="bg-orange-300"
            textColor="text-neutral-800"
            width="w-40"
            height="h-12"
            fontFamily="font-['Arial']"
            @click="$emit('compress-files')"
        />
    </div>
   
      
  </template>
  
  <script>
    import { formatBytes, truncateFilename } from '../utils/utils.js';
    import Recommended from '../components/Recommended.vue';
    import DefaultButton from '../components/DefaultButton.vue';
    import UploadButton from '../components/UploadButton.vue';
    import { triggerFileInput } from '../utils/utils.js';

  
    export default {
    name: 'StepTwo',
    props: {
      loading: Boolean,
      uploadedFiles: Array
    },
    components: {
        Recommended,
        DefaultButton
    },
    methods: {
        removeFile(index) {
            this.uploadedFiles.splice(index, 1);
        },
        triggerFileInput() {
          triggerFileInput(this.$refs.uploadButton);
        },
        formatBytes(bytes) {
            return formatBytes(bytes);
        },
        truncateFilename(filename) {
            return truncateFilename(filename);
        },
    }
  }
  </script>
  