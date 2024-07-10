<template>
      <CompressionTitle :step="step" />
      <LoadingIndicator :isLoading="loading" />
      <StepOne v-if="step === 1" :handleFileSelected="handleFileSelected" />
      <StepTwo v-if="step === 2" 
             :loading="loading" 
             :uploadedFiles="uploadedFiles"
             @option-selected="handleOptionSelected"
             @compress-files="compressFiles"
      />

      <StepThree v-if="step === 3" 
             :uploadedFiles="uploadedFiles"
             @restart="restart"
             @dowonload-compressed-file="downloadCompressedFile"
      />
</template>
<script>
import axios from 'axios';
import CompressionTitle from '../components/CompressionTitle.vue';
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import StepThree from './StepThree.vue';
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
      CompressionTitle,
        StepOne,
        StepTwo,
        StepThree,
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
        LoadingIndicator,
        
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
        console.log('Compressing files... ');
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