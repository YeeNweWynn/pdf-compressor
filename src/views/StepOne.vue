<template>
  <DropZone @file-dropped="handleFileSelected" />
</template>

<script>
import DropZone from '../components/DropZone.vue';

export default {
  name: 'StepOne',
  components: {
    DropZone,
  },
  props: {
    handleFileSelected: {
      type: Function,
      required: true,
    },
  },
};
</script>
