<template>
  <div
    class="InformationBox bg-white rounded-[5px] border border-blue-400 relative"
  >
    <div class="p-4 flex flex-col">
      <div
        class="text-neutral-800 text-base font-bold font-arial mb-4 md:w-[150px] md:mb-2"
      >
        {{ title }}
      </div>
      <div
        class="text-slate-500 text-xs font-normal font-arial leading-[18.70px] mb-2"
      >
        {{ description }}
      </div>
    </div>
    <div class="absolute top-0 right-0 mt-2 mr-2">
      <img :src="icon" class="w-9 h-9" :alt="`${title} Icon`" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InformationTile',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
