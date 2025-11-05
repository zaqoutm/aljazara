import { getPhotoURL } from '@/serviecs/MainService';
import Image from 'next/image';

interface PropsType {
  title?: string;
  filename_disk?: string;
}

export default function CustomImage(props: PropsType) {
  return <Image src={getPhotoURL(props.filename_disk)} alt={props.title || 'Picture text'} width={200} height={200} priority={true} />;
}
