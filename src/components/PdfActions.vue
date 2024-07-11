<template>
  <div
    class="flex flex-wrap justify-center md:justify-between items-center bg-blue-500 p-4 rounded mt-8"
  >
    <div
      class="border border-blue-400 rounded pt-4 pb-4 flex items-center justify-start mb-4 md:mb-0 md:w-[219px] w-full relative"
    >
      <img class="w-16 h-16 mr-4" :src="PdfLogo" alt="Logo" />
      <div
        class="text-white text-base font-normal font-['Arial'] text-center inline-block max-w-xs"
      >
        Merge PDF
      </div>
      <div
        class="absolute top-0 right-0 w-4 h-4 rounded-full flex items-center justify-center"
      >
        <img class="w-4 h-4" :src="StarLogo" alt="Star Icon" />
      </div>
    </div>
    <div
      class="border border-blue-400 rounded pt-4 pb-4 flex items-center justify-start mb-4 md:mb-0 md:w-[219px] w-full relative"
    >
      <img class="w-16 h-16 mr-4" :src="PdfLogo" alt="Logo" />
      <div
        class="text-white text-base font-normal font-['Arial'] text-center inline-block max-w-xs"
      >
        Split PDF
      </div>
      <div
        class="absolute top-0 right-0 w-4 h-4 rounded-full flex items-center justify-center"
      >
        <img class="w-4 h-4" :src="StarLogo" alt="Star Icon" />
      </div>
    </div>
    <div
      class="border border-blue-400 rounded pt-4 pb-4 flex items-center justify-start mb-4 md:mb-0 md:w-[219px] w-full relative"
    >
      <img class="w-16 h-16 mr-4" :src="PdfLogo" alt="Logo" />
      <div
        class="text-white text-base font-normal font-['Arial'] text-center inline-block max-w-xs"
      >
        Compress PDF
      </div>
      <div
        class="absolute top-0 right-0 w-4 h-4 rounded-full flex items-center justify-center"
      >
        <img class="w-4 h-4" :src="StarLogo" alt="Star Icon" />
      </div>
    </div>
    <div
      class="border border-blue-400 rounded pt-4 pb-4 flex items-center justify-start mb-4 md:mb-0 md:w-[219px] w-full relative"
    >
      <img class="w-16 h-16 mr-4" :src="PdfLogo" alt="Logo" />
      <div
        class="text-white text-base font-normal font-['Arial'] text-center inline-block max-w-xs"
      >
        Edit PDF
      </div>
      <div
        class="absolute top-0 right-0 w-4 h-4 rounded-full flex items-center justify-center"
      >
        <img class="w-4 h-4" ;src="StarLogo" alt="Star Icon" />
      </div>
    </div>
    <div
      class="border border-blue-400 rounded pt-4 pb-4 flex items-center justify-start mb-4 md:mb-0 md:w-[219px] w-full relative"
    >
      <img class="w-16 h-16 mr-4" :src="PdfLogo" alt="Logo" />
      <div
        class="text-white text-base font-normal font-['Arial'] text-center inline-block max-w-xs"
      >
        Add watermark
      </div>
      <div
        class="absolute top-0 right-0 w-4 h-4 rounded-full flex items-center justify-center"
      >
        <img class="w-4 h-4" :src="StarLogo" alt="Star Icon" />
      </div>
    </div>

    <div class="w-full flex justify-center md:justify-center items-center mt-4">
      <div class="text-white text-base font-normal font-['Arial']">
        See all tools
      </div>
      <img class="w-4 h-4 ml-1" :src="ArrowIcon" alt="Arrow icon" />
    </div>
  </div>
</template>

<script>
import PdfLogo from '@/assets/Icon/compress-pdf.png'
import StarLogo from '@/assets/Icon/Star.svg'
import ArrowIcon from '@/assets/Icon/Arrow_right.svg'
export default {
  name: 'PdfActions',
  data() {
    return {
      PdfLogo,
      StarLogo,
      ArrowIcon,
    }
  },
}
</script>
