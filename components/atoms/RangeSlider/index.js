import styles from "./styles.module.scss";

function RangeSlider({ min, max, value, onChange, onMouseUp, className }) {
  return (
    <div className={`${styles.rangeSlider} ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step="any"
        value={value}
        onChange={onChange}
        onMouseUp={onMouseUp}
      />
    </div>
  );
}

export default RangeSlider;
