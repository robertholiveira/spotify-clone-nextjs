import useTranslation from "next-translate/useTranslation";

import styles from "./styles.module.scss";

function ButtonLoader({ onClick, isLoading }) {
  const { t } = useTranslation("common");

  return (
    <div className={styles.buttonLoader}>
      <button onClick={onClick}>
        {isLoading ? (
          <div className={styles.iconAnimation}>
            <i />
          </div>
        ) : (
          t("loadMoreButton.text")
        )}
      </button>
    </div>
  );
}

export default ButtonLoader;
