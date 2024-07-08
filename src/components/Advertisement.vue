<template>
      <!-- <div class="left-[392px] absolute">
        <img class="w-[742px] h-[124px]" src="./../assets/Advertisement.png" alt="Advertisement"/>
      </div> -->
      <div :class="['left-[392px] absolute', step === 1 ? 'top-[638px]' : step === 2 ? 'top-[959px]' : 'top-[908px]']">
        <img class="w-[742px] h-[124px]" src="./../assets/Advertisement.png" alt="Advertisement"/>
      </div>

</template>

<script>
    export default {
        name: 'Advertisement',
        props: {
            step: {
                type: Number,
                default: true
            }
        }
        
    };
</script>