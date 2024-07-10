<template>
    <div class="bg-blue-50">
        <div class="text-white p-4 flex justify-between items-center">
        <div class="flex items-center ml-40">
          <span class="text-black text-[35px] font-bold font-['Istok Web'] leading-tight">PDF24</span>
          <span class="text-blue-500 text-[35px] font-normal font-['Istok Web'] leading-tight"> Tools</span>
        </div>
        <div class="flex space-x-4 mr-40">
            <span class="py-2 px-4 text-black text-center text-base font-normal font-['Arial']">Contact</span>
            <span class="py-2 px-4 text-black text-center text-base font-normal font-['Arial']">Desktop Version</span>
            <div class="MoonIcon mt-[8px]">
                <img src="./../assets/icon/Moon.svg" alt="Moon Icon">
            </div>
            <div class="ButtonDefault w-auto h-8 bg-blue-500 rounded justify-center items-center inline-flex">
                <button class="py-2 px-4 text-center text-slate-100 text-base font-normal font-['Arial']">All PDF Tools</button>
            </div>
        </div>
    </div>
    </div>
   
    <div class="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div class="flex items-center ml-40">
            <div class="IconStars">
                <img src="./../assets/icon/Stars.svg" alt="Star Icon">
            </div>
            <div class="text-white text-base font-normal font-arial">
                <span>4.9</span>
                <span class="text-xs font-medium font-roboto leading-tight"> </span>
                <span>(8,381 votes)</span>
            </div>
        </div>
        <div class="flex space-x-4 mr-40">
            <div class="HeaderIcon flex items-center space-x-2">
                <div class="IconCheck">
                    <img src="./../assets/icon/Check.svg" alt="Check Icon">
                </div>
                <div class="text-white">Free</div>
            </div>
            <div class="HeaderIcon flex items-center space-x-2">
                <div class="IconCheck">
                    <img src="./../assets/icon/Check.svg" alt="Check Icon">
                </div>
                <div class="text-white">Online</div>
            </div>
            <div class="HeaderIcon flex items-center space-x-2">
                <div class="IconCheck">
                    <img src="./../assets/icon/Check.svg" alt="Check Icon">
                </div>
                <div class="text-white">No Limits</div>
            </div>
        </div>
    </div>
    </template> 
    <script>
        export default {
            name: 'Header'
        };
  </script>
  