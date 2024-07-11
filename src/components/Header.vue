<template>
  <div class="bg-blue-50">
    <div
      class="text-white p-4 flex flex-col md:flex-row justify-between items-center"
    >
      <div class="flex items-center ml-4 md:ml-40 mb-4 md:mb-0">
        <span
          class="text-black text-2xl md:text-[35px] font-bold font-['Istok Web'] leading-tight"
          >PDF24</span
        >
        <span
          class="text-blue-500 text-2xl md:text-[35px] font-normal font-['Istok Web'] leading-tight ml-2 md:ml-0"
          >Tools</span
        >
      </div>
      <div
        class="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4 mr-4 md:mr-40"
      >
        <span
          class="py-2 px-4 text-black text-center text-base font-normal font-['Arial']"
          >Contact</span
        >
        <span
          class="py-2 px-4 text-black text-center text-base font-normal font-['Arial']"
          >Desktop Version</span
        >
        <div class="mt-2 md:mt-0 flex justify-center">
          <img :src="MoonIcon" alt="Moon Icon" class="w-6 h-6" />
        </div>
        <div
          class="w-auto h-8 bg-blue-500 rounded justify-center items-center inline-flex"
        >
          <button
            class="py-2 px-4 text-center text-slate-100 text-base font-normal font-['Arial']"
          >
            All PDF Tools
          </button>
        </div>
      </div>
    </div>
    <div
      class="bg-blue-500 text-white p-4 flex flex-col md:flex-row justify-between items-center"
    >
      <div class="flex items-center ml-4 md:ml-40 mb-4 md:mb-0">
        <img :src="StarsIcon" alt="Star Icon" />
        <div class="text-white text-base font-normal font-['Arial'] ml-2">
          <span>4.9</span>
          <span class="text-xs font-medium font-['Roboto'] leading-tight">
          </span>
          <span>(8,381 votes)</span>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4 mr-4 md:mr-40"
      >
        <div class="flex items-center space-x-2">
          <img :src="CheckIcon" alt="Check Icon" />
          <div class="text-white">Free</div>
        </div>
        <div class="flex items-center space-x-2">
          <img :src="CheckIcon" alt="Check Icon" />
          <div class="text-white">Online</div>
        </div>
        <div class="flex items-center space-x-2">
          <img :src="CheckIcon" alt="Check Icon" />
          <div class="text-white">No Limits</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoonIcon from '@/assets/Icon/Moon.svg'
import StarsIcon from '@/assets/Icon/Stars.svg'
import CheckIcon from '@/assets/Icon/Check.svg'

export default {
  name: 'Header',
  data() {
    return {
      MoonIcon,
      StarsIcon,
      CheckIcon,
    }
  },
}
</script>
