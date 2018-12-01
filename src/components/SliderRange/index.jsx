import React from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./styles.sass";

// range on min/max mileage values in K (n = n * 1000 miles)
const rangeValues = [1, 50];

const SliderRange = ({ onSliderChange, sliderValue }) => {
  const defaultValue = sliderValue.length > 0 ? sliderValue : rangeValues;

  return (
    <div>
      <p>Mileage</p>
      <div className={styles.values}>
        <span>{defaultValue[0]}K</span>
        <span>
          {defaultValue[1]}
          K+
        </span>
      </div>
      <Range
        min={rangeValues[0]}
        max={rangeValues[1]}
        defaultValue={defaultValue}
        onAfterChange={onSliderChange}
        pushable
        className={styles.rangeSlider}
      />
    </div>
  );
};

export default SliderRange;
