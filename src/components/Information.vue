<template>
        <div :class="['w-[1512px] h-[631px] left-0  absolute absolute bg-blue-50', step === 1 ? 'top-[820px]' : step === 2 ? 'top-[1167px]' : 'top-[1116px]']">
        
        <div class="Information left-[673px] top-[48px] absolute text-center text-black text-3xl font-bold font-['Arial'] leading-10">Information</div>
        <div class="AvailableForAllDevices left-[672px] top-[96px] absolute text-center text-zinc-600 text-base font-normal font-['Arial']">Available for all devices</div>
        <div class="InformationBox w-[315px] h-[175px] left-[246px] top-[178px] absolute">
        <div class="Rectangle48 w-[315px] h-[175px] left-0 top-0 absolute rounded-[5px] border border-blue-400">
            <img src="./../assets/icon/Compress_tool.svg" class="absolute right-0 top-0 w-[37px] h-[37px] mt-4 mr-4">
        </div>
        <div class="HowToCompressPdfFiles w-[161.61px] h-[48.21px] left-[16px] top-[15.18px] absolute text-neutral-800 text-base font-bold font-['Arial']">How to compress PDF files</div>
        <div class="SelectYourPdfFilesWhichYouWouldLikeToCompressOrDropThemIntoTheFileBoxAndStartTheCompressionAFewSecondsLaterYouCanDownloadYourCompressedPdfFiles w-[258px] h-[108px] left-[16px] top-[66px] absolute text-slate-500 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.</div>
        <div class="IconCompressTool w-[37px] h-[37px] left-[260px] top-[16px] absolute"></div>
        </div>
        <div class="InformationBox w-[315px] h-[175px] left-[246px] top-[386px] absolute">
        <div class="Rectangle48 w-[315px] h-[175px] left-0 top-0 absolute rounded-[5px] border border-blue-400">
            <img src="./../assets/icon/Computer.svg" class="absolute right-0 top-0 w-[37px] h-[37px] mt-4 mr-4">
        </div>
        <div class="HowToCompressPdfFiles w-[161.61px] h-[48.21px] left-[16px] top-[15.18px] absolute text-neutral-800 text-base font-bold font-['Arial']">Runs on your system</div>
        <div class="SelectYourPdfFilesWhichYouWouldLikeToCompressOrDropThemIntoTheFileBoxAndStartTheCompressionAFewSecondsLaterYouCanDownloadYourCompressedPdfFiles w-[258px] h-[108px] left-[16px] top-[66px] absolute text-slate-500 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">The compression tool does not need any special system in order to compress your PDF files. The app is browser based and works under all operating systems.</div>
        <div class="IconComputer w-[37px] h-[37px] left-[260px] top-[16px] absolute"></div>
        </div>
        <div class="InformationBox w-[315px] h-[175px] left-[600px] top-[178px] absolute">
        <div class="Rectangle48 w-[315px] h-[175px] left-0 top-0 absolute rounded-[5px] border border-blue-400">
            <img src="./../assets/icon/Adjust.svg" class="absolute right-0 top-0 w-[37px] h-[37px] mt-4 mr-4">
        </div>
        <div class="HowToCompressPdfFiles w-[161.61px] h-[48.21px] left-[16px] top-[15.18px] absolute text-neutral-800 text-base font-bold font-['Arial']">Adjustable quality</div>
        <div class="SelectYourPdfFilesWhichYouWouldLikeToCompressOrDropThemIntoTheFileBoxAndStartTheCompressionAFewSecondsLaterYouCanDownloadYourCompressedPdfFiles w-[258px] h-[108px] left-[16px] top-[66px] absolute text-slate-500 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">You can adjust the compression quality so that you can tune the compression algorithm in order to get a perfect result. PDF files with images can be compressed better than PDF files with text only.</div>
        <div class="IconAdjust w-[37px] h-[37px] left-[260px] top-[16px] absolute"></div>
        </div>
        <div class="InformationBox w-[315px] h-[175px] left-[600px] top-[386px] absolute">
        <div class="Rectangle48 w-[315px] h-[175px] left-0 top-0 absolute rounded-[5px] border border-blue-400">
            <img src="./../assets/icon/Cloud.svg" class="absolute right-0 top-0 w-[37px] h-[37px] mt-4 mr-4">
        </div>
        <div class="HowToCompressPdfFiles w-[161.61px] h-[48.21px] left-[16px] top-[15.18px] absolute text-neutral-800 text-base font-bold font-['Arial']">No installation required</div>
        <div class="SelectYourPdfFilesWhichYouWouldLikeToCompressOrDropThemIntoTheFileBoxAndStartTheCompressionAFewSecondsLaterYouCanDownloadYourCompressedPdfFiles w-[258px] h-[108px] left-[16px] top-[66px] absolute text-slate-500 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">You do not need to download and install any software. PDF files are compressed in the cloud on our servers. The app does not consume your system resources.</div>
        <div class="IconCloud w-[37px] h-[37px] left-[260px] top-[16px] absolute"></div>
        </div>
        <div class="InformationBox w-[315px] h-[175px] left-[951px] top-[178px] absolute">
        <div class="Rectangle48 w-[315px] h-[175px] left-0 top-0 absolute rounded-[5px] border border-blue-400">
            <img src="./../assets/icon/Star.svg" class="absolute right-0 top-0 w-[37px] h-[37px] mt-4 mr-4">
        </div>
        <div class="HowToCompressPdfFiles w-[161.61px] h-[48.21px] left-[16px] top-[15.18px] absolute text-neutral-800 text-base font-bold font-['Arial']">Easy to use</div>
        <div class="SelectYourPdfFilesWhichYouWouldLikeToCompressOrDropThemIntoTheFileBoxAndStartTheCompressionAFewSecondsLaterYouCanDownloadYourCompressedPdfFiles w-[258px] h-[108px] left-[16px] top-[66px] absolute text-slate-500 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">PDF24 makes it as easy and fast as possible for you to compress your files. You don't need to install any software, you only have to select your files and start the compression.</div>
        <div class="IconStar w-[37px] h-[37px] left-[260px] top-[16px] absolute"></div>
        </div>
        <div class="InformationBox w-[315px] h-[175px] left-[951px] top-[386px] absolute">
        <div class="Rectangle48 w-[315px] h-[175px] left-0 top-0 absolute rounded-[5px] border border-blue-400">
            <img src="./../assets/icon/Lock.svg" class="absolute right-0 top-0 w-[37px] h-[37px] mt-4 mr-4">
        </div>
        <div class="HowToCompressPdfFiles w-[161.61px] h-[48.21px] left-[16px] top-[15.18px] absolute text-neutral-800 text-base font-bold font-['Arial']">Secure online compression</div>
        <div class="SelectYourPdfFilesWhichYouWouldLikeToCompressOrDropThemIntoTheFileBoxAndStartTheCompressionAFewSecondsLaterYouCanDownloadYourCompressedPdfFiles w-[258px] h-[108px] left-[16px] top-[66px] absolute text-slate-500 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">The compression tool does not keep your files longer than necessary on our server. Your files and results will be deleted from our server after a short period of time.</div>
        <div class="IconLock w-[37px] h-[37px] left-[260px] top-[16px] absolute"></div>
        </div>

  </div>
</template>
<script>
    export default {
        name: 'Information',
        props: {
            step: {
                type: Number,
                required: true
            }
        },
    };
</script>