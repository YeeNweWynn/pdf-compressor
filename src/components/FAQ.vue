<template>
    <div :class="['Faq w-[1180px] h-16 left-[167px] absolute bg-white border border-blue-500', getTopPosition()]" @click="toggleDropdown">
        <div class="w-[9px] h-[63px] left-0 top-[-1px] absolute bg-blue-500"></div>
            <div class="Faq w-[123px] h-[54px] left-[39px] top-[4px] absolute text-blue-500 text-[33.18px] font-normal font-['Arial']"
            >FAQ</div>
            <div class="dropdown-icon w-[27px] h-[29px] left-[1151px] top-[19px] absolute origin-top-left rotate-90 cursor-pointer">
            </div>
            <div class="dropdown-icon w-[27px] h-[29px] left-[1133px] top-[19px] absolute origin-top-left cursor-pointer " >
                <img src="./../assets/icon/Arrow_right_blue.svg" alt="Dropdown Arrow" class="h-6 w-6 transform" 
                :class="{ 'rotate-0': !dropdownOpen, 'rotate-90': dropdownOpen }">
            </div>
        
            <!-- Dropdown content -->
            <div v-if="dropdownOpen" class="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md z-10">
            <!-- FAQ answers -->
             
            <!-- Answer 1 -->
            <div class="p-4 border-t border-gray-200">
                <div class="cursor-pointer flex items-center" @click="toggleAnswer1($event)">
                <p><strong class="text-lg">How to compress a PDF to reduce its size?</strong></p>
                <img 
                    src="./../assets/icon/Arrow_right_black.svg" 
                    alt="Answer Arrow" 
                    class="h-4 w-4 absolute right-5 transform transition-transform duration-200" 
                    :class="{ 'rotate-0': !showAnswer1, 'rotate-90': showAnswer1 }">
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
                <div class="cursor-pointer flex items-center" @click="toggleAnswer2($event)">
                <p><strong class="text-lg">What does compressing a PDF do?</strong></p>
                <img 
                    src="./../assets/icon/Arrow_right_black.svg" 
                    alt="Answer Arrow" 
                    class="h-4 w-4 ml-2 absolute right-5 transform transition-transform duration-200" 
                    :class="{ 'rotate-0': !showAnswer2, 'rotate-90': showAnswer2 }">
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
        props: {
            step: Number
        },
        methods: {
            getTopPosition() {
                if (this.step === 1) {
                    return 'top-[1515px]';
                } else if (this.step === 2) {
                    return 'top-[1872px]';
                } else {
                    return 'top-[1800px]';
                }
            },
            toggleDropdown() {
                this.dropdownOpen = !this.dropdownOpen;
            },
            toggleAnswer1() {
                event.stopPropagation(); 
                this.showAnswer1 = !this.showAnswer1;
            },
            toggleAnswer2() {
                event.stopPropagation(); 
                this.showAnswer2 = !this.showAnswer2;
            }
        }
    };
</script>