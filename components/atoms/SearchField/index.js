import React from "react";

import styles from "./styles.module.scss";

function SearchField({ searchHandler, placeholder, isLoading }, ref) {
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") searchHandler();
  };

  return (
    <div className={styles.searchField}>
      <input
        ref={ref}
        type="text"
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={styles.input}
      />
      <div className={`${styles.icon} ${isLoading ? styles.active : ""}`}>
        <i />
      </div>
    </div>
  );
}

export default React.forwardRef(SearchField);
