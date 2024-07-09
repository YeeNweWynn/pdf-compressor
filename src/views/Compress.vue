
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
    <div class="w-[17px] h-[17px] left-0 top-[4px] absolute"></div>
    <div class="w-[496px] h-11 left-[164px] top-[173px] absolute text-black text-[33.18px] font-bold font-['Arial']">Compress PDF</div>
    <div class="left-[164px] top-[217px] absolute text-zinc-600 text-base font-normal font-['Arial']">PDF compressor to reduce the size of PDF files quickly and easily</div>


   <!--step2-->
    <div class="CompressForm w-[1176px] h-[298px] left-[168px] top-[331px] absolute bg-blue-50 rounded-[7px] border border-blue-500">
      <LoadingIndicator :isLoading="loading" />
      <div v-if="step === 2">
        <div class="uploaded-files-container flex flex-wrap justify-center items-start gap-4 mt-4">
          <div v-for="(fileInfo, index) in uploadedFiles" :key="index" class="Preview w-[177px] h-[218px] flex flex-col justify-center items-center relative">
            <div class="w-[177px] h-[218px] left-0 top-0 absolute">
              <div class="w-[177px] h-[218px] left-0 top-0 absolute bg-blue-50"></div>
              <img class="w-[119px] h-[156px] left-[29px] top-[31px] absolute shadow border border-stone-300" src="./../assets/icon/sample_pdf.png" alt="Uploaded PDF" />
              <div class="w-[162px] h-5 left-[8px] top-[192px] absolute text-center text-neutral-800 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]">
                {{ truncateFilename(fileInfo.name) }} <br> {{ formatBytes(fileInfo.size) }}
              </div>
            </div>
            <div class="IconLoupe w-[28.79px] h-[26px] pl-[7px] pr-[5.79px] pt-[7px] pb-[3px] left-[2px] top-[2px] absolute justify-center items-center inline-flex">
              <div class="Frame10 w-4 h-4 relative flex-col justify-start items-start flex">
                <img class="w-[16px] left-0 top-0 absolute" src="./../assets/Icon/Zoom.svg"/>
            </div>
            <div class="IconTrash w-[30px] h-[30px] px-2 pt-2 pb-[7px] left-[145px] top-[1px] absolute justify-center items-center inline-flex">
              <div class="Frame11 w-3.5 h-[15px] relative flex-col justify-start items-start flex">
                <img class="w-[16px] right-0 top-0 absolute" src="./../assets/Icon/Delete.svg" @click="removeFile(index)" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="uploadedFiles.length > 0 && step == 2">
      <div class="AddMoreBtn left-[1268px] top-[577px] absolute">
        <img class="h-[30px] left-[32px] top-[15px] max-w-none absolute" src="./../assets/Icon/icon-plus-square.svg" @click="triggerFileInput"/>
        <UploadButton ref="uploadButton" @file-selected="handleFileSelected"/> 
      </div>
      <Recommended @option-selected="handleOptionSelected"/>
      <div class="w-40 h-12 px-4 py-2 left-[676px] top-[867px] absolute bg-orange-300 rounded-[5px] justify-center items-center inline-flex">
        <DefaultButton
          :buttonText="loading? 'Compressing...' : 'Compress'"
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

  <!--step 1-->
  <div v-if="step === 1">
      <DropZone @file-dropped="handleFileSelected"/>
      <div class="IconPage w-[47px] h-8 left-[733px] top-[387px] absolute"></div>
      <div class="OrDragAndDropFileIntoThisArea left-[651px] top-[484px] absolute text-center text-zinc-600 text-sm font-normal font-['Arial'] leading-[18.70px]">or drag and drop file into this area</div>
      <div class="Group52 w-[121px] left-[696px] top-[515px] absolute">
          <img class="GoogleDrive w-[65px] h-[18px] left-[56px] top-0 absolute" src="./../assets/icon/Google_drive_logo.png" />
          <img class="DropBox w-[51px] h-2.5 left-0 top-[4px] absolute" src="./../assets/icon/Dropbox_logo.png" />
      </div>
      <UploadButton buttonText="Select files" @file-selected="handleFileSelected"/> 
    </div>
  <!--step 1 ended-->

  <!--step 3-->
  <div v-if="step === 3" class="relativeoverflow-hidden">
    <div class="left-[668px] top-[378px] absolute text-neutral-800 text-xl font-bold font-['Arial'] flex flex-col items-center">
      <img class="w-[28px] h-[35px] mr-2" src="./../assets/icon/Download.svg"/>
        Your files are ready
      </div>
      <div> 
        <div class="DocTitle left-[698px] top-[444px] absolute text-center text-neutral-800 text-[12.80px] font-normal font-['Arial'] leading-[18.70px]" v-for="(fileInfo, index) in uploadedFiles">
          {{ fileInfo.name }}
        </div>
      </div>
      <div class="w-7 h-[35px] left-[742px] top-[372px] absolute"></div>
      <div class="h-8 left-[678px] top-[589px] absolute">
      <div class="DeleteBtn w-[79px] h-8 px-4 py-2 left-0 top-0 absolute rounded-[5px] justify-center items-center inline-flex">
        <img src="./../assets/icon/Trash.svg" alt="Delete Icon" />
        <div class="DeleteBtn text-center text-red-400 text-base font-normal font-['Arial']">Delete</div>
      </div>

      <div class="RestartBtn w-[84px] h-8 px-4 py-2 left-[95px] top-0 absolute rounded-[5px] justify-center items-center inline-flex">
        <img src="./../assets/icon/Restart.svg" alt="Restart Icon" class="pr-[3px]"/>
        <div class="RestartBtn text-center text-neutral-800 text-base font-normal font-['Arial']" @click="restart">Restart</div>
      </div>
    </div>
    <div class="w-[266px] h-[0px] left-[623px] top-[582px] absolute border border-stone-300"></div>
    
    <div class="w-[496px] h-12 left-[508px] top-[510px] absolute">
      <div class="ButtonsOption w-40 h-12 px-4 py-2 left-[168px] top-0 absolute rounded-[5px] border border-orange-400 justify-center items-center inline-flex">
        <DefaultButton
            buttonText="Preview"
            bgColor=""
            textColor="text-neutral-800"
            width="w-40"
            height="h-12"
            fontFamily="font-['Arial']"
          />
      </div>
      <div class="ButtonsDefault w-40 h-12 px-4 py-2 left-0 top-0 absolute bg-orange-300 rounded-[5px] justify-center items-center inline-flex">
        <DefaultButton
            buttonText="Download"
            bgColor="bg-orange-300"
            textColor="text-neutral-800"
            width="w-40"
            height="h-12"
            fontFamily="font-['Arial']"
            @click="downloadCompressedFile"
          />
      </div>
      <div class="ButtonsDefault w-40 h-12 px-4 py-2 left-[336px] top-0 absolute bg-orange-300 rounded-[5px] justify-center items-center inline-flex">
        <DefaultButton
            buttonText="Continue in another tool"
            bgColor=""
            textColor="text-neutral-800"
            width="w-40"
            height="h-12"
            fontFamily="font-['Arial']"
          />
      </div>
    </div>
  </div>
 
  <!--step 3 ended-->
   
  <PdfActions :step="step" v-if="step === 3"/>
  <Advertisement :step="step"/>
  <Information :step="step"/>

  <div class="Line26 w-[248px] h-[0px] left-[390px] top-[291px] absolute border border-stone-300"></div>
  <div class="Line34 w-[248px] h-[0px] left-[874px] top-[291px] absolute border border-stone-300"></div>

  <FAQ :step="step"/>
  <Footer :step="step"/>
</template>

<script>
import axios from 'axios';
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
import DropZone from '../components/DropZone.vue';
import LoadingIndicator from '../components/LoadingIndicator.vue';
import { triggerFileInput, formatBytes, getLeftClass, truncateFilename } from '../utils/utils.js';

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
        DropZone,
        PdfActions,
        Advertisement,
        Recommended,
        LoadingIndicator
    },
    data() {
        return {
          step: 1,
          loading: false,
          compressionJobId: null,
          selectedOption: null,
          dpi: 144,
          imageQuality: 75,
          uploadedFiles: []
        };
    },
    mounted() {
    },
    methods: {
      handleFileSelected(file) {
        console.log('File selected:', file);
        this.step = 2;
        this.loading = true;
        this.uploadFile(file)
          .then(response => {
            this.uploadedFiles.push(...response);
          })
          .catch(error => {
            console.error('Error uploading file:', error);
          })
          .finally(() => {
            this.loading = false;
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
      handleOptionSelected({ option, dpi, imageQuality }) {
          this.selectedOption = option;
          this.dpi = dpi;
          this.imageQuality = imageQuality;
          console.log('Selected option:', option);
          console.log('dpi:', dpi);
          console.log('imgqty:', imageQuality);
      },
      async compressFiles() {
        try {
            this.loading = true;
            const apiUrl = 'https://filetools13.pdf24.org/client.php?action=compressPdf';
            const payload = {
              files: this.uploadedFiles.map((file) => ({
                file: file.file,
                size: file.size,
                name: file.name,
                ctime: file.ctime,
                host: file.host,
              })),
              dpi: this.dpi,
              imageQuality: this.imageQuality,
              mode: 'normal',
              colorModel: '',
            };
            const response = await axios.post(apiUrl, payload, {
              headers: {
                'Content-Type': 'application/json; charset=UTF-8',
              },
              withCredentials: true,
            });
            console.log('Compression JobID:', response.data.jobId);
            this.compressionJobId = response.data.jobId;

            await this.pollJobStatus();
          } catch (error) {
            console.error('Error compressing files:', error);
          } finally {
            this.loading = false;
          }
        },
        async pollJobStatus() {
          try {
            console.log('Polling job status...');

            if (!this.compressionJobId) return;
            let status = '';
            while (status !== 'done') { 
              const apiUrl = `https://filetools13.pdf24.org/client.php?action=getStatus&jobId=${this.compressionJobId}`;
              const response = await axios.get(apiUrl, {
                headers: {
                  'Content-Type': 'application/json; charset=UTF-8',
                },
                withCredentials: true,
              });

              console.log('pollJobStatus:', response.data.status)
              status = response.data.status;
              
              console.log('Current Status:', status);

              await new Promise(resolve => setTimeout(resolve, 5000));
            }

            console.log('Compression complete!');
            this.step = 3;

          } catch (error) {
            console.error('Error checking job status:', error);
          }
      },
      async downloadCompressedFile() {
        try {
          console.log('Downloading compressed file...', this.compressionJobId);

          if (!this.compressionJobId) return;

          const downloadUrl = `https://filetools13.pdf24.org/client.php?mode=download&action=downloadJobResult&jobId=${this.compressionJobId}`;

          const link = document.createElement('a');
          link.href = downloadUrl;
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          console.log('Download initiated!');

        } catch (error) {
          console.error('Error downloading file:', error);
        }
      },
      restart() {
        this.step = 1;
        window.location.reload();
      },
      triggerFileInput() {
        triggerFileInput(this.$refs.uploadButton);
      },
      formatBytes(bytes) {
        return formatBytes(bytes);
      },
      getLeftClass(index) {
        return getLeftClass(index);
      },
      truncateFilename(filename) {
        return truncateFilename(filename);
      },
  } 
}
</script>
<style scoped>
</style>