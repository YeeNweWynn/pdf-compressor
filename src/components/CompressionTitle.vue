<template>
  <div class="CompressionTitle bg-white">
    <div
      class="flex flex-col items-center justify-center md:flex-row md:justify-center"
    >
      <div class="text-center md:text-left md:mr-[90px]">
        <div class="text-black text-xl font-bold font-arial">Compress PDF</div>
        <div class="text-zinc-600 text-base font-normal font-arial mt-2">
          PDF compressor to reduce the size of PDF files quickly and easily
        </div>
      </div>
      <img
        src="./../assets/logo.png"
        alt="Logo"
        class="mt-4 md:mt-0 md:mr-auto"
      />
    </div>
    <div
      class="StepBtn flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-y-0 mt-10"
    >
      <div
        :class="[
          'flex items-center justify-center border rounded-full px-4 py-2 w-full max-w-xs',
          step === 1 ? 'bg-blue-50 border-blue-500' : 'border-stone-300',
        ]"
      >
        <div
          :class="step === 1 ? 'text-blue-500' : 'text-stone-300'"
          class="text-sm font-bold font-arial"
        >
          1. Upload your PDFs
        </div>
      </div>
      <div class="border-t border-stone-300 w-full md:flex-grow md:mx-4"></div>
      <div
        :class="[
          'flex items-center justify-center border rounded-full px-4 py-2 w-full max-w-xs',
          step === 2 ? 'bg-blue-50 border-blue-500' : 'border-stone-300',
        ]"
      >
        <div
          :class="step === 2 ? 'text-blue-500' : 'text-stone-300'"
          class="text-sm font-bold font-arial"
        >
          2. Choose compression
        </div>
      </div>
      <div class="border-t border-stone-300 w-full md:flex-grow md:mx-4"></div>
      <div
        :class="[
          'flex items-center justify-center border rounded-full px-4 py-2 w-full max-w-xs',
          step === 3 ? 'bg-blue-50 border-blue-500' : 'border-stone-300',
        ]"
      >
        <div
          :class="step === 3 ? 'text-blue-500' : 'text-stone-300'"
          class="text-sm font-bold font-arial"
        >
          3. Done
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CompressionTitle',
  props: {
    step: Number,
  },
}
</script>
