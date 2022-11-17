import { Col } from "react-simple-flex-grid";
import { RiPlayMiniFill } from "react-icons/ri";

import styles from "./styles.module.scss";

import Link from "next/link";

function ListItem({ image, link, title, subTitle, circleImage }) {
  return (
    <Col span={2} className={styles.listItem}>
      <div className={styles.listItemWrapper}>
        <Link href={link}>
          <div className={styles.imageContainer}>
            <img src={image} className={circleImage && styles.circle} />
            <RiPlayMiniFill />
          </div>

          <span className={styles.title}>{title}</span>
          <span className={styles.subTitle}>{subTitle}</span>
        </Link>
      </div>
    </Col>
  );
}

export default ListItem;
