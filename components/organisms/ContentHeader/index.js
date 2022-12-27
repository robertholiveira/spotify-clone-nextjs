import { useColor } from "@/lib/ColorContext";

import styles from "./styles.module.scss";

function ContentHeader({ image, type, title, subTitle }) {
  const { predominantColor } = useColor();

  return (
    <>
      <div
        style={{ background: predominantColor }}
        className={styles.contentHeader}
      >
        <img src={image} />
        <div>
          <span className={styles.type}>{type}</span>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.subTitle}>{subTitle}</span>
        </div>
      </div>
    </>
  );
}

export default ContentHeader;
