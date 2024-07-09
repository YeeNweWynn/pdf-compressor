<template>
    <div :class="['Recommended w-[368px] h-[143px] left-[172px] top-[684px] absolute bg-white rounded-[10px] border', selected === 'High'? 'border-blue-500': 'border-zinc-20' ]"></div>
     <div class="w-[139px] h-6 left-[393px] top-[692px] absolute bg-yellow-400 rounded-md"></div>
     <div class="MostRecommended left-[409px] top-[697px] absolute text-center text-black text-xs font-normal font-['Arial']">Most recommended</div>
     
     <div @click="selectOption('High', 114, 75)">
         <div class="Standard left-[196px] top-[720px] absolute text-black text-xl font-bold font-['Arial']">High</div>
         <div class="EstimatedSize left-[196px] top-[779px] absolute text-blue-500 text-sm font-normal font-['Arial']">Estimated 1007.8KB</div>
         <div class="SmallestSize left-[196px] top-[747px] absolute text-zinc-600 text-sm font-normal font-['Arial']">Smallest size, standard quality</div>
         <div v-if="selected === 'High'">
            <div class="w-5 h-5 left-[504px] top-[791px] absolute bg-white rounded-full border border-blue-500"></div>
            <div class="w-3 h-3 left-[508px] top-[795px] absolute bg-blue-500 rounded-full borderborder-zinc-100"></div>
         </div>
         <div v-else class="w-5 h-5 left-[508px] top-[791px] absolute bg-white rounded-full border border-zinc-100'"></div>

         <div :class="['w-[368px] h-[143px] left-[572px] top-[684px] absolute bg-white rounded-[10px]  border', selected === 'Medium'? 'border-blue-500': 'border-zinc-20'] "></div>
 
     </div>
     <div @click="selectOption('Medium', 150, 85)">
         <div class="Medium left-[596px] top-[720px] absolute text-black text-xl font-bold font-['Arial']">Medium</div>
         <div class="EstimatedSize left-[596px] top-[779px] absolute text-blue-500 text-sm font-normal font-['Arial']">Estimated 1.9MB</div>
         <div class="MediumSize left-[596px] top-[747px] absolute text-zinc-600 text-sm font-normal font-['Arial']">Medium size, better quality</div>
         <div v-if="selected === 'Medium'">
            <div class="w-5 h-5 left-[900px] top-[791px] absolute bg-white rounded-full border border-blue-500"></div>
            <div class="w-3 h-3 left-[904px] top-[795px] absolute bg-blue-500 rounded-full borderborder-zinc-100"></div>
         </div>
         <div v-else class="w-5 h-5 left-[904px] top-[791px] absolute bg-white rounded-full border border-zinc-100'"></div>
         <div :class="['w-[368px] h-[143px] left-[972px] top-[684px] absolute bg-white rounded-[10px] border', selected === 'Low'? 'border-blue-500': 'border-zinc-20']"></div>
     </div>
 
     <div @click="selectOption('Low', 200, 90)">
         <div class="HighestQuality left-[996px] top-[720px] absolute text-black text-xl font-bold font-['Arial']">Low</div>
         <div class="EstimatedSize left-[996px] top-[779px] absolute text-blue-500 text-sm font-normal font-['Arial']">Estimated 2.3MB</div>
         <div  class="LargestSize left-[996px] top-[747px] absolute text-zinc-600 text-sm font-normal font-['Arial']">Largest size, highest quality</div>
         <div v-if="selected === 'Low'">
            <div class="w-5 h-5 left-[1300px] top-[791px] absolute bg-white rounded-full border border-blue-500"></div>
            <div class="w-3 h-3 left-[1304px] top-[795px] absolute bg-blue-500 rounded-full borderborder-zinc-100"></div>
         </div>
         <div v-else class="w-5 h-5 left-[1304px] top-[791px] absolute bg-white rounded-full border border-zinc-100"></div>

         <div class="SelectOneComparisonLevel left-[168px] top-[637px] absolute text-black text-2xl font-normal font-['Arial'] leading-10">Select one comparison level:</div>
     </div>
 </template>
 <script>
     export default {
         name: 'Recommended',
         data() {
             return {
                 selected: 'High'
             };
         },
         mounted() {
            this.selected = 'High';
         },
         emits: ['option-selected'],
         methods: {
             selectOption(option, dpi, imageQuality) {
                this.selected = option;
                 this.$emit('option-selected', { option, dpi, imageQuality });
             }
         }
     };
 </script>