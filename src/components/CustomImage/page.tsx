import Image from 'next/image';

interface PropsType {
  title?: string;
  filename_disk?: string;
}

export default function CustomImage(props: PropsType) {
  return (
    <Image
      // src={process.env.NEXT_PUBLIC_IMAGE_PATH + '' + props.filename_disk || '/aljazara-black.svg'}
      src={props.filename_disk || '/aljazara-black.svg'}
      alt={props.title || 'Picture text'}
      width={200}
      height={200}
      priority={true}
    />
  );
}
