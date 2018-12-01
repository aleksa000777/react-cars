import React from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./styles.sass";

const rangeValues = [1, 50];

const SliderRange = ({ onSliderChange, sliderValue }) => (
  <div>
    <p>Mileage</p>
    <div className={styles.values}>
      <span>{sliderValue[0] || rangeValues[0]}</span>
      <span>{sliderValue[1] || rangeValues[1]}</span>
    </div>
    <Range
      min={rangeValues[0]}
      max={rangeValues[1]}
      defaultValue={rangeValues}
      onAfterChange={onSliderChange}
      pushable
      className={styles.rangeSlider}
    />
  </div>
);

export default SliderRange;
