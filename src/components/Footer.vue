<template>
  <div class="Footer py-4 mb-8">
    <div class="container mx-auto px-4">
      <div class="border-t border-blue-500 mt-4 mb-8"></div>
      <div class="font-bold text-lg mb-4">All tools</div>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
      >
        <div class="mb-8">
          <div class="space-y-2">
            <p class="text-zinc-600 text-sm">Merge PDF</p>
            <p class="text-zinc-600 text-sm">Split PDF</p>
            <p class="text-zinc-600 text-sm">Compress PDF</p>
          </div>
        </div>
        <div class="mb-8">
          <div class="border-l-2 border-gray-300 pl-4 space-y-2">
            <p class="text-zinc-600 text-sm">Edit PDF</p>
            <p class="text-zinc-600 text-sm">Sign PDF</p>
            <p class="text-zinc-600 text-sm">PDF Converter</p>
          </div>
        </div>
        <div class="mb-8">
          <div class="border-l-2 border-gray-300 pl-4 space-y-2">
            <p class="text-zinc-600 text-sm">Protect PDF</p>
            <p class="text-zinc-600 text-sm">Unlock PDF</p>
            <p class="text-zinc-600 text-sm">Rotate PDF</p>
            <p class="text-zinc-600 text-sm">Remove PDF pages</p>
          </div>
        </div>
        <div class="mb-8">
          <div class="border-l-2 border-gray-300 pl-4 space-y-2">
            <p class="text-zinc-600 text-sm">PDF OCR</p>
            <p class="text-zinc-600 text-sm">Webpage to PDF</p>
            <p class="text-zinc-600 text-sm">Create PDF with camera</p>
            <p class="text-zinc-600 text-sm">Sort PDF pages</p>
          </div>
        </div>
        <div class="mb-8">
          <div class="border-l-2 border-gray-300 pl-4 space-y-2">
            <p class="text-zinc-600 text-sm">Extract PDF pages</p>
            <p class="text-zinc-600 text-sm">Sort PDF pages</p>
            <p class="text-zinc-600 text-sm">Webpage to PDF</p>
            <p class="text-zinc-600 text-sm">Create PDF job application</p>
          </div>
        </div>
        <div class="mb-8">
          <div class="border-l-2 border-gray-300 pl-4 space-y-2">
            <p class="text-zinc-600 text-sm">Create PDF with camera</p>
            <p class="text-zinc-600 text-sm">PDF OCR</p>
            <p class="text-zinc-600 text-sm">Remove PDF pages</p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center mt-8 text-stone-300 text-sm">
        <p class="mx-2 mb-2 lg:mb-0">About us</p>
        <p class="mx-2 mb-2 lg:mb-0">Help</p>
        <p class="mx-2 mb-2 lg:mb-0">Contact</p>
      </div>
      <div class="flex flex-wrap justify-center mt-8 text-stone-300 text-sm">
        <p class="mx-2 mb-2 lg:mb-0">Legal Notice</p>
        <p class="mx-2 mb-2 lg:mb-0">Terms of use</p>
        <p class="mx-2 mb-2 lg:mb-0">Privacy Policy</p>
        <p class="mx-2 mb-2 lg:mb-0">Privacy Settings</p>
      </div>
    </div>
    <div class="lg:mb-40">
      <p class="text-center text-xs bg-blue-50 py-2 mt-4">
        © 2022 Geek Software GmbH — WE love PDF
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
