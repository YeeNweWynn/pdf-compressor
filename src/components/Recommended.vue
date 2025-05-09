<template>
  <div
    class="text-black text-2xl font-normal font-['Arial'] leading-10 mt-8 text-center md:text-left"
  >
    Select one comparison level:
  </div>
  <div
    class="flex flex-col items-center space-y-8 md:flex-row md:space-x-4 md:space-y-0"
  >
    <div
      v-for="option in options"
      :key="option.label"
      :class="[
        'w-full md:w-1/3 bg-white rounded-[10px] border p-4 relative',
        selected === option.label ? 'border-blue-500' : 'border-zinc-200',
      ]"
    >
      <div @click="selectOption(option.label, option.dpi, option.imageQuality)">
        <div
          v-if="option.label === 'High'"
          class="absolute top-0 right-0 mt-2 mr-2 bg-yellow-400 rounded-md px-2 py-1"
        >
          <div
            class="text-center text-black text-xs font-normal font-['Arial']"
          >
            Most recommended
          </div>
        </div>
        <div class="text-black text-xl font-bold font-['Arial']">
          {{ option.title }}
        </div>
        <div class="text-blue-500 text-sm font-normal font-['Arial']">
          {{ option.size }}
        </div>
        <div class="text-zinc-600 text-sm font-normal font-['Arial']">
          {{ option.description }}
        </div>
        <div v-if="selected === option.label" class="flex justify-end mt-4">
          <div
            class="w-5 h-5 bg-white rounded-full border border-blue-500 flex items-center justify-center"
          >
            <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <div v-else class="flex justify-end mt-4">
          <div
            class="w-5 h-5 bg-white rounded-full border border-zinc-100"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Recommended',
  emits: ['option-selected'],
  setup(props, { emit }) {
    const selected = ref('High')
    const options = ref([
      {
        label: 'High',
        title: 'Standard',
        size: 'Estimated 80% - 90% compression',
        description: 'Smallest size',
        dpi: 114,
        imageQuality: 75,
      },
      {
        label: 'Medium',
        title: 'Medium',
        size: 'Estimated 70% - 80% compression',
        description: 'Medium size',
        dpi: 150,
        imageQuality: 85,
      },
      {
        label: 'Low',
        title: 'Highest Quality',
        size: 'Estimated 50% - 60% compression',
        description: 'Largest size',
        dpi: 200,
        imageQuality: 90,
      },
    ])

    const selectOption = (option, dpi, imageQuality) => {
      selected.value = option
      emit('option-selected', { option, dpi, imageQuality })
    }

    onMounted(() => {
      selected.value = 'High'
    })

    return {
      selected,
      options,
      selectOption,
    }
  },
}
</script>
