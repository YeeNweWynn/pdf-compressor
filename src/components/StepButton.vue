<template>
    <div :class="buttonClasses" :style="positionStyle">
      <div class="ButtonsRounded h-8 px-4 py-2 rounded-[30px] border justify-center items-center inline-flex">
        <div class="AllPdfTools text-center font-bold font-['Arial']" :class="textColorClass">{{ buttonText }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StepButton',
    props: {
      buttonText: {
        type: String,
        required: true
      },
      step: {
        type: Number,
        required: true
      },
      currentStep: {
        type: Number,
        required: true
      },
      positionStyle: {
        type: String,
        required: true
      }
    },
    computed: {
      buttonClasses() {
        return {
          'bg-blue-50': this.step === this.currentStep,
          'bg-white': this.step !== this.currentStep,
          'border border-blue-500 rounded-[30px]': this.step === this.currentStep,
          'border border-stone-300 rounded-[30px]': this.step !== this.currentStep,
          'left-[172px] top-[275px] absolute': this.step === 1,
          'left-[656px] top-[275px] absolute': this.step === 2,
          'left-[1140px] top-[275px] absolute': this.step === 3,
        };
      },
      textColorClass() {
        return {
          'text-blue-500': this.step === this.currentStep,
          'text-stone-300': this.step !== this.currentStep,
        };
      }
    }
  };
  </script>
  