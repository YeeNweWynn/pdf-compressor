<template>
    <div :class="['Footer w-[1512px] h-[408px] left-[1px] absolute', getTopPosition()]">
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[186px] top-[57px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Merge PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[393px] top-[57px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Images to PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[590px] top-[57px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Extract PDF pages</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[785px] top-[57px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Add page numbers</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[981px] top-[57px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Create PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[1177px] top-[57px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Crop PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[186px] top-[84px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Split PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[393px] top-[84px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">PDF to Images</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[590px] top-[84px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Sort PDF pages</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[785px] top-[84px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">View as PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[981px] top-[84px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">PDF 24 Creator</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[186px] top-[111px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Compress PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[393px] top-[111px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Extract PDF Images</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[590px] top-[111px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Webpage to PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[785px] top-[111px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">PDF Overlay</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[981px] top-[111px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">PDF Printer</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[186px] top-[138px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Edit PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[393px] top-[138px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Protect PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[590px] top-[138px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Create PDF job application</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[785px] top-[138px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Compare PDFs</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[981px] top-[138px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">PDF Reader</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[186px] top-[165px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Sign PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[393px] top-[165px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Unlock PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[590px] top-[165px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Create PDF with camera</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[785px] top-[165px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Web optimize PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[981px] top-[165px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Create invoice</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[186px] top-[192px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">PDF Converter</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[393px] top-[192px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Rotate PDF pages</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[590px] top-[192px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">PDF OCR</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[785px] top-[192px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Annotate PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[981px] top-[192px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Remove PDF metadata</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[186px] top-[219px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Convert to PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[393px] top-[219px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Remove PDF pages</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[590px] top-[219px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Add watermark</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[785px] top-[219px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Redact PDF</div>
      </div>
      <div class="ButtonsPlain h-8 pr-4 py-2 left-[981px] top-[219px] absolute rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-zinc-600 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">Flatten PDF</div>
      </div>
      <div class="AllTools w-[193px] h-7 left-[186px] top-[22px] absolute text-neutral-800 text-[23.04px] font-bold font-['Arial']">All tools</div>
      <div class="AboutUsHelpContactLegalNoticeTermsOfUsePrivacyPolicyPrivacySettings w-[1057px] h-[47px] left-[228px] top-[301px] absolute text-center text-stone-300 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">About us          Help          Contact<br/>Legal Notice          Terms of use          Privacy Policy          Privacy Settings<br/></div>
      <div class="Line18 w-[178px] h-[0px] left-[377px] top-[68px] absolute origin-top-left rotate-90 border border-stone-300"></div>
      <div class="Line26 w-[178px] h-[0px] left-[574px] top-[68px] absolute origin-top-left rotate-90 border border-stone-300"></div>
      <div class="Line27 w-[178px] h-[0px] left-[769px] top-[68px] absolute origin-top-left rotate-90 border border-stone-300"></div>
      <div class="Line28 w-[178px] h-[0px] left-[965px] top-[68px] absolute origin-top-left rotate-90 border border-stone-300"></div>
      <div class="Line29 w-[178px] h-[0px] left-[1161px] top-[68px] absolute origin-top-left rotate-90 border border-stone-300"></div>
      <div class="Rectangle46 w-[1512px] h-[35px] left-0 top-[373px] absolute bg-blue-50"></div>
      <div class="2022GeekSoftwareGmbhWeLovePdf w-[435px] h-[17px] left-[539px] top-[381px] absolute text-center text-slate-500 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">© 2022 Geek Software GmbH — WE love PDF<br/></div>
      <div class="Line25 w-[1199px] h-[0px] left-[157px] top-0 absolute border border-blue-500"></div>
    </div>
</template>
<script>
    export default {
        name: 'Footer',
        props: {
            step: Number
        },
        methods: {
            getTopPosition() {
                if (this.step === 1) {
                return 'top-[1680px]';
                } else if (this.step === 2) {
                return 'top-[1990px]';
                } else {
                return 'top-[1900px]';
                }
            }
        }
    }
</script>