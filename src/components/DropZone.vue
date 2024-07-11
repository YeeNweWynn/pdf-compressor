<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'active-dropzone': active }"
    v-bind="getRootProps()"
    class="DropZone bg-blue-50 rounded-lg border border-blue-500 p-4 mt-6 min-h-[259px] flex flex-col justify-center items-center"
  >
    <label for="dropzoneFile"></label>
    <input v-bind="getInputProps()" />
    <div class="relative inline-flex flex-col items-center justify-center mb-4">
      <div class="IconArrowDown transform mb-2">
        <img src="../assets/Icon/Page.svg" alt="Arrow Down" />
      </div>

      <label for="fileInput" class="flex items-center">
        <div
          class="flex items-center bg-orange-300 rounded-md px-4 py-3 pl-[30px]"
        >
          <div class="flex items-center space-x-2">
            <div
              class="UploadFile text-center text-neutral-800 text-base font-normal font-arial"
            >
              Select files
            </div>
            <div class="h-6 w-px bg-neutral-800 ml-4 md:ml-20"></div>
            <img
              src="./../assets/icon/Arrow_down.svg"
              class="h-4 w-4"
              alt="Dropdown Arrow"
            />
          </div>
        </div>
      </label>
      <div
        class="text-center text-zinc-600 text-sm font-normal font-arial mt-4"
      >
        or drag and drop file into this area
      </div>

      <div class="flex items-center mb-4">
        <img
          class="GoogleDrive w-16 h-4 mr-2"
          src="./../assets/icon/Google_drive_logo.png"
          alt="Google Drive Logo"
        />
        <img
          class="DropBox w-13 h-3"
          src="./../assets/icon/Dropbox_logo.png"
          alt="Dropbox Logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useDropzone } from 'vue3-dropzone'
import { ref } from 'vue'

export default {
  name: 'DropZone',
  setup(_, { emit }) {
    const active = ref(false)

    function toggleActive() {
      active.value = !active.value
    }

    function onDrop(acceptedFiles) {
      acceptedFiles.forEach((file) => emit('file-dropped', file))
    }
    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop })
    return {
      active,
      getRootProps,
      getInputProps,
      ...rest,
    }
  },
}
</script>
