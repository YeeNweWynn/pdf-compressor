import CompressIcon from '@/assets/Icon/Compress_Tool.svg'
import AdjustIcon from '@/assets/Icon/Adjust.svg'
import StarIcon from '@/assets/Icon/StarI.svg'
import ComputerIcon from '@/assets/Icon/Computer.svg'
import CloudIcon from '@/assets/Icon/Cloud.svg'
import LockIcon from '@/assets/Icon/Lock.svg'

export const informationList = [
  {
    title: 'How to compress PDF files',
    description:
      'Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.',
    icon: CompressIcon,
  },
  {
    title: 'Adjustable quality',
    description:
      'You can adjust the compression quality so that you can tune the compression algorithm in order to get a perfect result. PDF files with images can be compressed better than PDF files with text only.',
    icon: AdjustIcon,
  },
  {
    title: 'Easy to use',
    description:
      "PDF24 makes it as easy and fast as possible for you to compress your files. You don't need to install any software, you only have to select your files and start the compression.",
    icon: StarIcon,
  },
  {
    title: 'Runs on your system',
    description:
      'The compression tool does not need any special system in order to compress your PDF files. The app is browser based and works under all operating systems.',
    icon: ComputerIcon,
  },
  {
    title: 'No installation required',
    description:
      'Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.',
    icon: CloudIcon,
  },
  {
    title: 'Secure online compression',
    description:
      'The compression tool does not keep your files longer than necessary on our server. Your files and results will be deleted from our server after a short period of time.',
    icon: LockIcon,
  },
]
