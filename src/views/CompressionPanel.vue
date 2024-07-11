<template>
  <div class="relative p-6 ml-40 mr-40">
    <Compression />
    <Advertisement />
  </div>
  <Information />
  <div class="relative p-6 ml-40 mr-40">
    <FQA />
  </div>
</template>
<script>
import Advertisement from '@/components/Advertisement.vue'
import FQA from '@/components/FAQ.vue'
import CompressionTitle from '@/components/CompressionTitle.vue'
import Information from '@/components/Information.vue'
import Compression from './Compression.vue'
export default {
  name: 'CompressionPanel',
  components: {
    CompressionTitle,
    Compression,
    Advertisement,
    Information,
    FQA,
  },
}
</script>
