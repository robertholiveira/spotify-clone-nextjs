import { RiPlayMiniFill } from "react-icons/ri";
import Link from "next/link";

import styles from "./styles.module.scss";

function ListItem({ image, link, title, subTitle, circleImage, onClickPlay }) {
  return (
    <div className={styles.listItemWrapper}>
      <Link href={link}>
        <div className={styles.imageContainer}>
          <img src={image} className={circleImage && styles.circle} />
          <RiPlayMiniFill onClick={(e) => onClickPlay(e)} />
        </div>
        <span className={styles.title}>{title}</span>
        {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
      </Link>
    </div>
  );
}

export default ListItem;
