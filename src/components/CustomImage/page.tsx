import Image from 'next/image';

interface PropsType {
  title?: string;
  filename_disk?: string;
}

// todo: handle iframe
export default function CustomImage(props: PropsType) {
  return <Image src={getPhotoURL(props.filename_disk)} alt={props.title || 'Picture text'} width={200} height={200} priority={true} />;
}

function getPhotoURL(givenUrl?: string) {
  return givenUrl || '/aljazara-black.svg';
}
