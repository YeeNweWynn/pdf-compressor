<template>
  <div
    class="CompressionForm bg-blue-50 rounded-lg border border-blue-500 p-4 mt-6 min-h-[259px]"
  >
    <div class="relative overflow-hidden">
      <div
        class="text-neutral-800 text-xl font-bold font-sans flex flex-col items-center"
      >
        <img class="w-7 h-9 mr-2" :src="DownloadIcon" alt="Download Icon" />
        Your files are ready
      </div>
      <div class="mt-4">
        <div
          class="text-center text-neutral-800 text-sm font-normal font-sans leading-[18.70px]"
          v-for="(fileInfo, index) in uploadedFiles"
          :key="index"
        >
          {{ fileInfo.name }}
        </div>
      </div>
      <div class="flex justify-center space-x-4 mt-4">
        <DefaultButton
          buttonText="Download"
          bgColor="bg-orange-300"
          borderColor="border-blue-500"
          textColor="text-neutral-800"
          width="w-40"
          height="h-12"
          fontFamily="font-sans"
          @click="$emit('dowonload-compressed-file')"
        />
        <DefaultButton
          buttonText="Preview"
          bgColor="bg-zinc-300"
          borderColor="border-blue-500"
          textColor="text-neutral-800"
          width="w-40"
          height="h-12"
          fontFamily="font-sans"
        />
        <DefaultButton
          buttonText="Continue in another tool"
          bgColor="bg-orange-300"
          borderColor="border-orange-400"
          textColor="text-neutral-800"
          width="w-40"
          height="h-12"
          fontFamily="font-sans"
          @click="$emit('restart')"
        />
      </div>

      <div class="w-50 mx-auto border-t border-blue-100 my-4"></div>
      <div class="flex justify-center space-x-4">
        <div class="DeleteBtn flex items-center space-x-1">
          <img :src="DeleteIcon" alt="Delete Icon" class="w-4 h-4" />
          <div
            class="text-red-400 text-base font-normal font-sans cursor-pointer text-red-400"
            @click="$emit('restart')"
          >
            Delete
          </div>
        </div>
        <div class="RestartBtn flex items-center space-x-1">
          <img :src="RestartIcon" alt="Restart Icon" class="w-4 h-4" />
          <div
            class="text-neutral-800 text-base font-normal font-sans cursor-pointer"
            @click="$emit('restart')"
          >
            Restart
          </div>
        </div>
      </div>
    </div>
  </div>
  <PdfActions />
</template>

<script>
import DeleteIcon from '@/assets/Icon/DeleteIcon.svg'
import RestartIcon from '@/assets/Icon/Restart.svg'
import DownloadIcon from '@/assets/Icon/Download.svg'
import DefaultButton from '@/components/DefaultButton.vue'
import PdfActions from '@/components/PdfActions.vue'
export default {
  props: {
    step: Number,
    uploadedFiles: Array,
  },
  data() {
    return {
      DeleteIcon,
      RestartIcon,
      DownloadIcon,
    }
  },
  components: {
    DefaultButton,
    PdfActions,
  },
}
</script>
