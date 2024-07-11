<template>
  <div :class="buttonClasses">
    <div class="text-center" :class="textClasses">{{ buttonText }}</div>
  </div>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: 'bg-blue-500',
    },
    textColor: {
      type: String,
      default: 'text-white',
    },
    width: {
      type: String,
      default: 'w-32',
    },
    height: {
      type: String,
      default: 'h-8',
    },
    paddingX: {
      type: String,
      default: 'px-4',
    },
    paddingY: {
      type: String,
      default: 'py-2',
    },
    borderRadius: {
      type: String,
      default: 'rounded-[5px]',
    },
    fontFamily: {
      type: String,
      default: 'font-sans',
    },
    fontSize: {
      type: String,
      default: 'text-base',
    },
    fontWeight: {
      type: String,
      default: 'font-normal',
    },
    isCompressing: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    buttonClasses() {
      return `${this.width} ${this.height} ${this.paddingX} ${this.paddingY} ${this.bgColor} ${this.borderRadius} flex justify-center items-center`;
    },
    textClasses() {
      return `${this.textColor} ${this.fontSize} ${this.fontWeight} ${this.fontFamily}`;
    },
  },
};
</script>
