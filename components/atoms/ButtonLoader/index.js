import styles from "./styles.module.scss";

function ButtonLoader({ onClick, isLoading }) {
  return (
    <div className={styles.buttonLoader}>
      <button onClick={onClick}>
        {isLoading ? (
          <div className={styles.iconAnimation}>
            <i />
          </div>
        ) : (
          "Carregar mais"
        )}
      </button>
    </div>
  );
}

export default ButtonLoader;
