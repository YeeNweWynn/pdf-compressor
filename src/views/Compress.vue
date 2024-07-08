
<template>
  <div class="CompressPdf w-[496px] h-11 left-[164px] top-[173px] absolute text-black text-[33.18px] font-bold font-['Arial']">Compress PDF</div>
  <div class="CompressPdf-txt left-[164px] top-[217px] absolute text-zinc-600 text-base font-normal font-['Arial']">PDF compressor to reduce the size of PDF files quickly and easily</div>
  <img class="w-[78px] h-20 left-[717px] top-[164px] absolute" src="./../assets/logo.png" />
  
  <StepButton 
      buttonText="1. Upload your PDFs" 
      :step="1"
      :currentStep="step"
      positionStyle="left-[172px] top-[275px]"
  />
  <StepButton
      buttonText="2. Choose compression"
      :step="2"
      :currentStep="step"
      positionStyle="left-[656px] top-[275px]"
    />
  <StepButton 
    buttonText="3. Done" 
    :step="3"
    :currentStep="step"
    positionStyle="left-[1140px] top-[275px]"
  />

  <!--step2-->
  <div v-if="step === 2">
    <div class="w-[17px] h-[17px] left-0 top-[4px] absolute"></div>
    <div class="w-[496px] h-11 left-[164px] top-[173px] absolute text-black text-[33.18px] font-bold font-['Arial']">Compress PDF</div>
    <div class="left-[164px] top-[217px] absolute text-zinc-600 text-base font-normal font-['Arial']">PDF compressor to reduce the size of PDF files quickly and easily</div>
    
    <div class="w-[204px] h-[0px] left-[756px] top-[357px] absolute origin-top-left rotate-90 border border-stone-300"></div>

    <div v-for="(fileInfo, index) in uploadedFiles" :key="index" :class="getFileContainerClass(index)" class="w-[177px] h-[218px] left-[559px] top-[351px] absolute">
      <div class="w-[177px] h-[218px] left-0 top-0 absolute">
        <div class="w-[177px] h-[218px] left-0 top-0 absolute">
          <div class="w-[177px] h-[218px] left-0 top-0 absolute bg-blue-50">
            <img class="w-[16px] left-0 top-0 absolute" src="./../assets/Icon/Zoom.svg"/>
            <img class="w-[16px] right-0 top-0 absolute" src="./../assets/Icon/Delete.svg" @click="removeFile(index)" />
          </div>
          <img class="w-[119px] h-[156px] left-[29px] top-[31px] absolute shadow border border-stone-300" src="./../assets/vue.svg"
          alt="Uploaded PDF" />
          <div class="w-[162px] h-5 left-[8px] top-[192px] absolute text-center text-neutral-800 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">
            {{ truncateFilename(fileInfo.name) }} <br> {{ formatBytes(fileInfo.size) }}
          </div>
        </div>
        <div class="w-[28.79px] h-[26px] left-[2px] top-[2px] absolute">
          <div class="w-4 h-4 left-[7px] top-[7px] absolute"></div>
        </div>
        <div class="w-[30px] h-[30px] left-[145px] top-[1px] absolute">
          <div class="w-3.5 h-[15px] left-[8px] top-[8px] absolute"></div>
        </div>
      </div>
    </div>

    <div class="AddMoreBtn left-[1182px] top-[600px] absolute">
      <img class="w-[16px] h-[16px] left-[17px] top-[15px] absolute" src="./../assets/Icon/icon-plus-square.svg" />
      <DefaultButton
        buttonText="Add more"
        bgColor="bg-blue-50"
        textColor="text-blue-500"
        width="w-40"
        height="h-12"
        fontFamily="font-['Arial']" />
    </div>
  
    <Recommended />
    <div class="w-40 h-12 px-4 py-2 left-[676px] top-[867px] absolute bg-orange-300 rounded-[5px] justify-center items-center inline-flex">
      <DefaultButton
        buttonText="Compress"
        bgColor="bg-orange-300"
        textColor="text-neutral-800"
        width="w-40"
        height="h-12"
        fontFamily="font-['Arial']"
        @click="compressFiles"
      />
    </div>

  </div>

  <!--step 2 end-->

  <!--step 3-->
  <div v-if="step === 3">
      <div class="flex justify-center items-center w-full h-full absolute top-[183px]">
        <img class="w-[28px] h-[35px]" src="./../assets/icon/Download.svg"/>
      </div>
      <div class="YourFilesAreReady left-[668px] top-[415px] absolute text-neutral-800 text-xl font-bold font-['Arial']">Your files are ready</div>
      <div class="NewDocument1Pdf left-[698px] top-[444px] absolute text-center text-neutral-800 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">New Document1.pdf</div>
      <div class="NewDocument2Pdf left-[698px] top-[467px] absolute text-center text-neutral-800 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">New Document2.pdf</div>
      <div class="IconDownload w-7 h-[35px] left-[742px] top-[372px] absolute"></div>

      <div class="h-8 left-[678px] top-[589px] absolute">
      <div class="ButtonsPlain w-[79px] h-8 px-4 py-2 left-0 top-0 absolute rounded-[5px] justify-center items-center inline-flex">
        <img src="./../assets/icon/Trash.svg" alt="Delete Icon" />
        <div class="DeleteBtn text-center text-red-400 text-base font-normal font-['Arial']">Delete</div>
      </div>
      <div class="ButtonsPlain w-[84px] h-8 px-4 py-2 left-[95px] top-0 absolute rounded-[5px] justify-center items-center inline-flex">
        <img src="./../assets/icon/Restart.svg" alt="Restart Icon" class="pr-[3px]"/>
        <div class="RestartBtn text-center text-neutral-800 text-base font-normal font-['Arial']">Restart</div>
      </div>
    </div>
    <div class="w-[266px] h-[0px] left-[623px] top-[582px] absolute border border-stone-300"></div>
    <div class="IconTrash w-[30px] h-[30px] px-2 pt-2 pb-[7px] left-[664px] top-[598px] absolute justify-center items-center inline-flex">
      <div class="Frame w-3.5 h-[15px] relative flex-col justify-start items-start flex"></div>
    </div>
    <div class="IconRestart w-[14.08px] h-3.5 left-[768px] top-[607px] absolute justify-center items-center inline-flex">
      <div class="Group w-[14.08px] h-3.5 relative">
      </div>
    </div>
    <div class="Group73 w-[496px] h-12 left-[508px] top-[510px] absolute">
      <div class="ButtonsOption w-40 h-12 px-4 py-2 left-[168px] top-0 absolute rounded-[5px] border border-orange-400 justify-center items-center inline-flex">
        <div class="AllPdfTools text-center text-orange-400 text-base font-normal font-['Arial']">Preview</div>
      </div>
      <div class="ButtonsDefault w-40 h-12 px-4 py-2 left-0 top-0 absolute bg-orange-300 rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-center text-neutral-800 text-base font-normal font-['Arial']">Download</div>
      </div>
      <div class="ButtonsDefault w-40 h-12 px-4 py-2 left-[336px] top-0 absolute bg-orange-300 rounded-[5px] justify-center items-center inline-flex">
        <div class="AllPdfTools text-center text-neutral-800 text-base font-normal font-['Arial']">Continue in <br/>another tool</div>
      </div>
    </div>
  </div>
 
  <!--step 3 ended-->
   
    <PdfActions :step="step" v-if="step === 3"/>
    <Advertisement :step="step"/>
    <Information :step="step"/>

  <!--step 1-->
  <div v-if="step === 1">
    <div class="IconPage w-[47px] h-8 left-[733px] top-[387px] absolute"></div>
    <div class="OrDragAndDropFileIntoThisArea left-[651px] top-[484px] absolute text-center text-zinc-600 text-sm font-normal font-['Arial'] leading-[18.70px]">or drag and drop file into this area</div>
    <div class="Group52 w-[121px] left-[696px] top-[515px] absolute">
        <img class="GoogleDrive w-[65px] h-[18px] left-[56px] top-0 absolute" src="./../assets/icon/Google_drive_logo.png" />
        <img class="DropBox w-[51px] h-2.5 left-0 top-[4px] absolute" src="./../assets/icon/Dropbox_logo.png" />
    </div>
    <UploadButton buttonText="Select files" @file-selected="handleFileSelected"/> 
  </div>
  <!--step 1 ended-->

  <div class="Line26 w-[248px] h-[0px] left-[390px] top-[291px] absolute border border-stone-300"></div>
  <div class="Line34 w-[248px] h-[0px] left-[874px] top-[291px] absolute border border-stone-300"></div>

  <FAQ :step="step"/>
  <Footer :step="step"/>

</template>

<script>
import Footer from '../components/Footer.vue';
import Information from '../components/Information.vue';
import FAQ from '../components/FAQ.vue';  
import Review from '../components/Review.vue';
import StepButton from '../components/StepButton.vue';
import UploadButton from '../components/UploadButton.vue';
import PdfActions from '../components/PdfActions.vue';
import Advertisement from '../components/Advertisement.vue';
import Recommended from '../components/Recommended.vue';
import DefaultButton from '../components/DefaultButton.vue';

export default {
    name: 'Compress',
    components: {
        Footer,
        Information,
        FAQ,
        Review,
        StepButton,
        DefaultButton,
        UploadButton,
        PdfActions,
        Advertisement,
        Recommended,
        
    },
    data() {
        return {
          step: 1,
          loading: false,
          compressing: false,
          compressionJobId: null,
          uploadedFiles: []
        };
    },
    mounted() {
    },
    methods: {
      handleFileSelected(file) {
        this.loading = true;
        this.uploadFile(file)
          .then(response => {
            this.uploadedFiles.push(...response);
            this.step = 2;
            console.log('uploaded Files', this.uploadedFiles);
          })
          .catch(error => {
            console.error('Error uploading file:', error);
          });
      },
      uploadFile(file) {
        const apiUrl = 'https://filetools13.pdf24.org/client.php?action=upload';
        const formData = new FormData();
        formData.append('file', file);

        return fetch(apiUrl, {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          return Array.isArray(data) ? data : [data];
        });
      },
      removeFile(index) {
        this.uploadedFiles.splice(index, 1);
      },
      async compressFiles() {
        try {
            this.compressing = true;
            const apiUrl = 'https://filetools13.pdf24.org/client.php?action=compressPdf';
            const payload = {
              files: this.uploadedFiles.map((file) => ({
                file: file.file,
                size: file.size,
                name: file.name,
                ctime: file.ctime,
                host: file.host,
              })),
              dpi: 144,
              imageQuality: 75,
              mode: 'normal',
              colorModel: '',
            };

            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json; charset=UTF-8',
              },
              body: JSON.stringify(payload),
            });

            const data = await response.json();
            console.log('Compression JobID:', data.jobId);
            this.compressionJobId = data.jobId;

            await this.pollJobStatus();
          } catch (error) {
            console.error('Error compressing files:', error);
          } finally {
            this.compressing = false;
          }
        },
        async pollJobStatus() {
          try {
            console.log('Polling job status...');
            if (!this.compressionJobId) return;

            const apiUrl = `https://filetools13.pdf24.org/client.php?action=getStatus&jobId=${this.compressionJobId}`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            console.log('pollJobStatus', data);
            
            this.step = 3;

            // if (data.status === 'done') {
            //   console.log('Compression complete:', data);
            // }

          } catch (error) {
            console.error('Error checking job status:', error);
          }
      },
      formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
      },
      getFileContainerClass(index) {
        const baseClass = "w-[177px] h-[218px] absolute";
        const leftPosition = 559 + (index * 212);
        return `${baseClass} left-[${leftPosition}px] top-[351px]`;
      },
      truncateFilename(filename) {
        const maxLength = 20;
        if (filename.length > maxLength) {
          return `${filename.substr(0, maxLength)}...`;
        } else {
          return filename;
        }
      }
  } 
}
</script>