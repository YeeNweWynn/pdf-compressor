<template>

    <div
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drop.prevent="handleDrop"  
      :class="{ 'active-dropzone': active }"
      v-bind="getRootProps()"
      class="w-[1176px] h-[298px] left-[168px] top-[331px] absolute bg-blue-50 rounded-[7px] border border-blue-500"
    >
      <label for="dropzoneFile"></label>
      <input v-bind="getInputProps()" />
    </div>
 
</template>

<script>
import { useDropzone } from "vue3-dropzone";
import { ref } from "vue";

export default {
  name: "DropZone",
  setup(_, { emit }) {
    const { getRootProps, getInputProps, ...rest } = useDropzone({
      onDrop: (acceptedFiles) => {
        acceptedFiles.forEach(file => emit('file-dropped', file));
      }
    });

    return {
      getRootProps,
      getInputProps,
      ...rest,
      toggleActive() {
        this.active = !this.active;
      },
      handleDrop(event) {
        this.toggleActive();
        const files = Array.from(event.dataTransfer.files);
        files.forEach(file => {
          this.$emit('file-dropped', file);
        });
      },
    };
  }
};
</script>
