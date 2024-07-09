<template>
  <div class="ButtonsExtra h-[49px] px-[15px] py-6 left-[666px] top-[423px] absolute bg-orange-300 rounded-[5px] justify-center items-center gap-5 inline-flex">
    <div class="UploadFiles text-center text-neutral-800 text-xl font-normal font-['Arial']">Select files</div>
    <div class="Line7 w-[27px] h-[0px] origin-top-left rotate-90 border border-neutral-800"></div>
    <div class="IconArrowDown w-[16.64px] h-[18px] relative origin-top-left rotate-90"></div>
  </div> 
  
  <div class="UploadBtn h-[49px] px-[15px] py-6 left-[666px] top-[423px] absolute bg-orange-300 rounded-[5px] justify-center items-center gap-5 inline-flex">
    <div class="UploadFiles text-center text-neutral-800 text-xl font-normal font-['Arial']" @click="handleButtonClick">{{ buttonText }}</div>
    <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange" multiple>

    <div class="flex items-center ">
      <div class="h-6 w-px bg-neutral-800 mr-2"></div>
      <img src="./../assets/icon/Arrow_down.svg" class="h-4 w-4" alt="Dropdown Arrow" />
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'UploadButton',
    props: {
      buttonText: {
        type: String,
        default: ''
      },
    },
    emits: ['file-selected'],
    data() {
      return {
        uploadedFiles: []
      }
    },
    methods: {
      handleButtonClick() {
        this.$refs.fileInput.click();
      },
      handleFileChange(event) {
        const files = event.target.files;
        if (files.length > 0) {
          for (let i = 0; i < files.length; i++) {
            this.$emit('file-selected', files[i]);
          }
        }
      }
    }
  }
  </script>

