<template>
    
    <div class="Upload relative inline-flex flex-col items-center justify-center mb-4">
        <div class="IconArrowDown transform mb-2">
            <img src="../assets/Icon/Page.svg" alt="Arrow Down">
        </div>
        
        <label for="fileInput" class="flex items-center">
            <div class="flex items-center bg-orange-300 rounded-md px-4 py-3">
            <div class="flex items-center space-x-2">
                <div class="UploadFiles text-center text-neutral-800 text-base font-normal font-arial">
                {{ buttonText }}
                </div>
                <div class="h-6 w-px bg-neutral-800 ml-4 md:ml-20"></div>
                <img src="./../assets/icon/Arrow_down.svg" class="h-4 w-4" alt="Dropdown Arrow" />
            </div>
            </div>
        </label>
        <input id="fileInput" type="file" ref="fileInput" class="hidden" @change="handleFileChange" multiple>

        <div class="DropZone text-center text-zinc-600 text-sm font-normal font-arial mt-4">
            or drag and drop file into this area
        </div>
            
        <div class="flex items-center mb-4">
            <img class="GoogleDrive w-16 h-4 mr-2" src="./../assets/icon/Google_drive_logo.png" alt="Google Drive Logo">
            <img class="DropBox w-13 h-3" src="./../assets/icon/Dropbox_logo.png" alt="Dropbox Logo">
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
  
  