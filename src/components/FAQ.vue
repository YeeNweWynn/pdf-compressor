<template>
    <div class="Faq bg-white border border-blue-500 relative md:w-[1180px] mx-auto">
        <div class="flex items-center justify-start px-4 py-2 cursor-pointer" @click="toggleDropdown">
            <div class="bg-blue-500 w-2 h-10"></div>
            <div class="text-blue-500 text-[33.18px] font-normal font-['Arial'] font-normal font-arial ml-2">FAQ</div>
            <img src="./../assets/icon/Arrow_right_blue.svg" alt="Dropdown Arrow"
                class="h-6 w-6 ml-auto transform transition-transform duration-200" :class="{ 'rotate-90': dropdownOpen }">
        </div>

        <!-- Dropdown content -->
        <div v-if="dropdownOpen" class="bg-white border border-gray-200 shadow-lg rounded-md mt-2">
            <!-- FAQ answers -->
             
            <!-- Answer 1 -->
            <div class="p-4 border-t border-gray-200">
                <div class="cursor-pointer flex items-center" @click="toggleAnswer1">
                    <p><strong class="text-lg">How to compress a PDF to reduce its size?</strong></p>
                    <img src="./../assets/icon/Arrow_right_black.svg" alt="Answer Arrow"
                        class="h-4 w-4 ml-auto transform transition-transform duration-200" :class="{ 'rotate-90': showAnswer1 }">
                </div>
                <div v-if="showAnswer1" class="ml-6 mt-2">
                    <ul class="list-disc">
                        <li>Click the file selection box at the top of the page and select the files to compress.</li>
                        <li>Adjust the compression parameters if needed.</li>
                        <li>Start the compression by clicking the corresponding button.</li>
                        <li>Finally, save the compressed files.</li>
                    </ul>
                </div>
            </div>

            <!-- Answer 2 -->
            <div class="p-4 border-t border-gray-200">
                <div class="cursor-pointer flex items-center" @click="toggleAnswer2">
                    <p><strong class="text-lg">What does compressing a PDF do?</strong></p>
                    <img src="./../assets/icon/Arrow_right_black.svg" alt="Answer Arrow"
                        class="h-4 w-4 ml-auto transform transition-transform duration-200" :class="{ 'rotate-90': showAnswer2 }">
                </div>
                <div v-if="showAnswer2" class="ml-6 mt-2">
                    <ul class="list-disc">
                        <li>Removal of unnecessary font information.</li>
                        <li>Reduction of image size based on DPI settings.</li>
                        <li>Adjustment of image quality.</li>
                        <li>Structural compression of PDF data.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FAQ',
    data() {
        return {
            dropdownOpen: false,
            showAnswer1: false,
            showAnswer2: false
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        toggleAnswer1() {
            this.showAnswer1 = !this.showAnswer1;
        },
        toggleAnswer2() {
            this.showAnswer2 = !this.showAnswer2;
        }
    }
};
</script>

<style scoped>
@media (min-width: 640px) {
    .Faq {
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>
