<template>
  <div
    class="CompressionForm bg-blue-50 rounded-lg border border-blue-500 p-4 mt-6 min-h-[259px]"
  >
    <div
      class="uploaded-files-container flex flex-wrap justify-center items-start gap-4 mt-4"
    >
      <div
        v-for="(fileInfo, index) in uploadedFiles"
        :key="index"
        class="Preview relative flex flex-col items-center mb-4"
      >
        <div class="ActionBution flex justify-between w-full">
          <button class="IconZoom flex justify-center items-center">
            <img class="w-4" src="./../assets/Icon/Zoom.svg" />
          </button>
          <button
            class="IconDelete flex justify-center items-center"
            @click="removeFile(index)"
          >
            <img class="w-4" src="./../assets/Icon/Delete.svg" />
          </button>
        </div>
        <div
          class="PreviewImageWrapper relative w-48 h-50 flex justify-center items-center pb-[40px]"
        >
          <div class="PreviewOverlay inset-0 bg-blue-50"></div>
          <img
            class="w-32 h-40 shadow border border-stone-300"
            src="./../assets/icon/sample_pdf.png"
            alt="Uploaded PDF"
          />
          <div
            class="FileInfo absolute left-0 bottom-0 w-full text-center text-neutral-800 text-xs font-normal bg-blue-50"
          >
            {{ truncateFilename(fileInfo.name) }} <br />
            {{ formatBytes(fileInfo.size) }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="uploadedFiles.length > 0"
      class="flex justify-end"
      @click="addMoreFiles"
    >
      <img class="h-8" src="./../assets/Icon/icon-plus-square.svg" />
      <input
        id="fileInput"
        type="file"
        ref="fileInput"
        class="hidden"
        multiple
        @change="handleFileChange"
      />
    </div>
  </div>
  <Recommended @option-selected="$emit('option-selected', $event)" />
  <div class="flex justify-center mt-[30px]">
    <DefaultButton
      :buttonText="isCompressing ? 'Compressing...' : 'Compress'"
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
import { formatBytes, truncateFilename } from '../utils/utils.js'
import Recommended from '../components/Recommended.vue'
import DefaultButton from '../components/DefaultButton.vue'

export default {
  name: 'StepTwo',
  props: {
    loading: Boolean,
    isCompressing: Boolean,
    uploadedFiles: Array,
  },
  components: {
    Recommended,
    DefaultButton,
  },
  emits: ['option-selected', 'compress-files', 'file-selected'],
  methods: {
    removeFile(index) {
      this.uploadedFiles.splice(index, 1)
      if (this.uploadedFiles.length === 0) {
        window.location.reload()
      }
    },
    handleFileChange(event) {
      const files = event.target.files
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          this.$emit('file-selected', files[i])
        }
      }
    },
    addMoreFiles() {
      this.$refs.fileInput.click()
    },
    formatBytes(bytes) {
      return formatBytes(bytes)
    },
    truncateFilename(filename) {
      return truncateFilename(filename)
    },
  },
}
</script>
