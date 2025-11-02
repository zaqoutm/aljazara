import styles from './styles.module.css';

interface SizeProp {
  size: '300_600' | '250_600' | '250_250';
}
const SIZE_CLASSES = {
  '300_600': styles.ad_300_600,
  '250_600': styles.ad_250_600,
  '250_250': styles.ad_250_250,
} as const;

export default function AdContainer(props: SizeProp) {
  return (
    <div className={styles.adContainer}>
      <p>إعلان</p>
      <div className={SIZE_CLASSES[props.size]}>
        <img src={'/aljazara-black.svg'} />
        <p>Lorem ipsum dolor sit amipsum dolor sit amipsum dolor sit amet</p>
      </div>
    </div>
  );
}
