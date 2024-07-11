<template>
  <div
    class="InformationSection relative mx-auto mt-8 md:mt-10 mb-8 md:mb-10 max-w-[1512px]"
  >
    <div class="bg-blue-50 border">
      <div
        class="Information text-center text-black text-3xl font-bold font-arial leading-10 pt-6 md:pt-12"
      >
        Information
      </div>
      <div
        class="AvailableForAllDevices text-center text-zinc-600 text-base font-normal font-arial pt-2 md:pt-4"
      >
        Available for all devices
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12 mx-auto md:ml-40 md:mr-40 md:mb-8"
      >
        <InformationBox
          v-for="(info, index) in informationList"
          :key="index"
          :title="info.title"
          :description="info.description"
          :icon="info.icon"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import InformationBox from './InformationBox.vue'
import { informationList as infoList } from '../utils/informationList.js'
export default {
  name: 'Information',
  components: {
    InformationBox,
  },
  setup() {
    const informationList = ref(infoList)
    return {
      informationList,
    }
  },
}
</script>
