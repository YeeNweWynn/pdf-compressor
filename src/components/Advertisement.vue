<template>
  <div
    class="relative w-full max-w-[742px] mx-auto mt-8 md:mt-10 mb-8 md:mb-10"
  >
    <img
      class="w-full h-auto"
      :src="AdvertisementImg"
      alt="Placeholder Image"
    />
  </div>
</template>
<script>
import AdvertisementImg from '@/assets/Advertisement.png'
export default {
  name: 'Advertisement',
  data() {
    return {
      AdvertisementImg,
    }
  },
}
</script>
