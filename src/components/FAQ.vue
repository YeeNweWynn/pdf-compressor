<template>
  <div
    class="Faq bg-white border border-blue-500 relative md:w-[1180px] mx-auto"
  >
    <div
      class="flex items-center justify-start px-4 py-2 cursor-pointer"
      @click="toggleDropdown"
    >
      <div class="bg-blue-500 w-2 h-10"></div>
      <div
        class="text-blue-500 text-[33.18px] font-normal font-['Arial'] font-normal font-arial ml-2"
      >
        FAQ
      </div>
      <img
        :src="ArrowRightBlue"
        alt="Dropdown Arrow"
        class="h-6 w-6 ml-auto transform transition-transform duration-200"
        :class="{ 'rotate-90': dropdownOpen }"
      />
    </div>
    <div
      v-if="dropdownOpen"
      class="bg-white border border-gray-200 shadow-lg rounded-md mt-2"
    >
      <div class="p-4 border-t border-gray-200">
        <div class="cursor-pointer flex items-center" @click="toggleAnswer1">
          <p>
            <strong class="text-lg"
              >How to compress a PDF to reduce its size?</strong
            >
          </p>
          <img
            :src="ArrowBlack"
            alt="Answer Arrow"
            class="h-4 w-4 ml-auto transform transition-transform duration-200"
            :class="{ 'rotate-90': showAnswer1 }"
          />
        </div>
        <div v-if="showAnswer1" class="ml-6 mt-2">
          <ul class="list-disc text-zinc-600 text-base font-normal font-arial">
            <li>
              Click the file selection box at the top of the page and select the
              files to compress.
            </li>
            <li>Adjust the compression parameters if needed.</li>
            <li>Start the compression by clicking the corresponding button.</li>
            <li>Finally, save the compressed files.</li>
          </ul>
        </div>
      </div>
      <div class="p-4 border-t border-gray-200">
        <div class="cursor-pointer flex items-center" @click="toggleAnswer2">
          <p>
            <strong class="text-lg">What does compressing a PDF do?</strong>
          </p>
          <img
            :src="ArrowBlack"
            alt="Answer Arrow"
            class="h-4 w-4 ml-auto transform transition-transform duration-200"
            :class="{ 'rotate-90': showAnswer2 }"
          />
        </div>
        <div v-if="showAnswer2" class="ml-6 mt-2">
          <ul class="list-disc text-zinc-600 text-base font-normal font-arial">
            <li>Removal of unnecessary font information.</li>
            <li>Reduction of image size based on DPI settings.</li>
            <li>Adjustment of image quality.</li>
            <li>Structural compression of PDF data.</li>
          </ul>
        </div>
      </div>
      <div class="p-4 border-t border-gray-200">
        <div class="cursor-pointer flex items-center" @click="toggleAnswer3">
          <p>
            <strong class="text-lg">Is it secure to use PDF24 Tools?</strong>
          </p>
          <img
            :src="ArrowBlack"
            alt="Answer Arrow"
            class="h-4 w-4 ml-auto transform transition-transform duration-200"
            :class="{ 'rotate-90': showAnswer3 }"
          />
        </div>
        <div v-if="showAnswer2" class="ml-6 mt-2">
          <ul class="list-disc text-zinc-600 text-base font-normal font-arial">
            <li>All file transfers are encrypted.</li>
            <li>
              All files are automatically deleted from the processing server
              within one hour after processing. .
            </li>
            <li>
              We do not store files and do not evaluate them. Files will only be
              used for the intended purpose. .
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ArrowRightBlue from '@/assets/Icon/Arrow_right_blue.svg'
import ArrowBlack from '@/assets/Icon/Arrow_right_black.svg'
export default {
  name: 'FAQ',
  setup() {
    const dropdownOpen = ref(false)
    const showAnswer1 = ref(false)
    const showAnswer2 = ref(false)
    const showAnswer3 = ref(false)

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value
    }

    const toggleAnswer1 = () => {
      showAnswer1.value = !showAnswer1.value
    }

    const toggleAnswer2 = () => {
      showAnswer2.value = !showAnswer2.value
    }

    const toggleAnswer3 = () => {
      showAnswer3.value = !showAnswer3.value
    }

    return {
      ArrowRightBlue,
      ArrowBlack,
      dropdownOpen,
      showAnswer1,
      showAnswer2,
      showAnswer3,
      toggleDropdown,
      toggleAnswer1,
      toggleAnswer2,
      toggleAnswer3,
    }
  },
}
</script>

<style scoped>
@media (min-width: 640px) {
  .Faq {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
