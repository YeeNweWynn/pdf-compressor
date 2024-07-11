<template>
  <CompressionTitle :step="step" />
  <LoadingIndicator :isLoading="loading" />
  <StepOne v-if="step === 1" :handleFileSelected="handleFileSelected" />
  <StepTwo
    v-if="step === 2"
    :loading="loading"
    :isCompressing="isCompressing"
    :uploadedFiles="uploadedFiles"
    @option-selected="handleOptionSelected"
    @compress-files="compressFiles"
    @file-selected="handleFileSelected"
  />
  <StepThree
    v-if="step === 3"
    :uploadedFiles="uploadedFiles"
    @restart="restart"
    @dowonload-compressed-file="downloadCompressedFile"
  />
</template>
<script>
import { ref } from 'vue';
import axios from 'axios';
import CompressionTitle from '../components/CompressionTitle.vue';
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import StepThree from './StepThree.vue';
import Information from '../components/Information.vue';
import FAQ from '../components/FAQ.vue';
import StepButton from '../components/StepButton.vue';
import PdfActions from '../components/PdfActions.vue';
import Advertisement from '../components/Advertisement.vue';
import Recommended from '../components/Recommended.vue';
import DefaultButton from '../components/DefaultButton.vue';
import DropZone from '../components/DropZone.vue';
import LoadingIndicator from '../components/LoadingIndicator.vue';

export default {
  name: 'Compression',
  components: {
    CompressionTitle,
    StepOne,
    StepTwo,
    StepThree,
    Information,
    FAQ,
    StepButton,
    DefaultButton,
    DropZone,
    PdfActions,
    Advertisement,
    Recommended,
    LoadingIndicator,
  },
  setup() {
    const step = ref(1);
    const loading = ref(false);
    const isCompressing = ref(false);
    const compressionJobId = ref(null);
    const selectedOption = ref(null);
    const dpi = ref(144);
    const imageQuality = ref(75);
    const uploadedFiles = ref([]);

    const handleFileSelected = (file) => {
      console.log('File selected:', file);
      step.value = 2;
      loading.value = true;
      uploadFile(file)
        .then((response) => {
          uploadedFiles.value.push(...response);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        })
        .finally(() => {
          loading.value = false;
        });
    };

    const handleOptionSelected = (option) => {
      selectedOption.value = option.option;
      dpi.value = option.dpi;
      imageQuality.value = option.imageQuality;
    };

    const uploadFile = (file) => {
      const apiUrl = 'https://filetools13.pdf24.org/client.php?action=upload';
      const formData = new FormData();
      formData.append('file', file);
      return fetch(apiUrl, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          return Array.isArray(data) ? data : [data];
        });
    };

    const compressFiles = async () => {
      console.log('Compressing files... ');
      try {
        isCompressing.value = loading.value = true;
        const apiUrl =
          'https://filetools13.pdf24.org/client.php?action=compressPdf';
        const payload = {
          files: uploadedFiles.value.map((file) => ({
            file: file.file,
            size: file.size,
            name: file.name,
            ctime: file.ctime,
            host: file.host,
          })),
          dpi: dpi.value,
          imageQuality: imageQuality.value,
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
        compressionJobId.value = response.data.jobId;
        await pollJobStatus();
      } catch (error) {
        console.error('Error compressing files:', error);
      } finally {
        isCompressing.value = loading.value = false;
      }
    };

    const pollJobStatus = async () => {
      try {
        console.log('Polling job status...');
        if (!compressionJobId.value) return;
        let status = '';
        while (status !== 'done') {
          const apiUrl = `https://filetools13.pdf24.org/client.php?action=getStatus&jobId=${compressionJobId.value}`;
          const response = await axios.get(apiUrl, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            withCredentials: true,
          });
          console.log('pollJobStatus:', response.data.status);
          status = response.data.status;
          console.log('Current Status:', status);
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
        console.log('Compression complete!');
        step.value = 3;
      } catch (error) {
        console.error('Error checking job status:', error);
      }
    };

    const downloadCompressedFile = async () => {
      try {
        console.log('Downloading compressed file...', compressionJobId.value);
        if (!compressionJobId.value) return;
        const downloadUrl = `https://filetools13.pdf24.org/client.php?mode=download&action=downloadJobResult&jobId=${compressionJobId.value}`;
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
    };

    const restart = () => {
      step.value = 1;
      window.location.reload();
    };

    return {
      step,
      loading,
      isCompressing,
      compressionJobId,
      selectedOption,
      dpi,
      imageQuality,
      uploadedFiles,
      handleFileSelected,
      uploadFile,
      handleOptionSelected,
      compressFiles,
      pollJobStatus,
      downloadCompressedFile,
      restart,
    };
  },
};
</script>
