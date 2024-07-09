export function triggerFileInput(uploadButtonRef) {
    uploadButtonRef.handleButtonClick();
  }
  
  export function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  
  export function getLeftClass(index) {
    const leftPosition = 559 + index * 200;
    return `left-[${leftPosition}px]`;
  }
  
  export function truncateFilename(filename) {
    const maxLength = 20;
    if (filename.length > maxLength) {
      return `${filename.substr(0, maxLength)}...`;
    } else {
      return filename;
    }
  }