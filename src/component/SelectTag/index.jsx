import React from "react";

import styles from "./styles.css";
import "../../assets/arrow-down.svg";

export const SelectTagSimple = ({
  visibleData,
  handleChange,
  classNameForSelectTag,
  handleSelectClick,
  data
}) => (
  <div className={`${styles.customSelect} ${classNameForSelectTag}`}>
    <select
      value={visibleData}
      onChange={handleChange}
      onClick={() => handleSelectClick()}
    >
      {data &&
        data.map((item, index) => (
          <option value={item.value}>{item.displayName}</option>
        ))}
    </select>
  </div>
);

export const SelectTag = ({
  classNameForSelectTag,
  showOptions,
  heading,
  visibleData,
  setItemSelect,
  handleChange,
  handleSelectClick,
  data
}) => (
  <div
    className={`${styles.selectBox} ${classNameForSelectTag}`}
    onClick={() => handleSelectClick()}
  >
    {showOptions && (
      <div className={styles.optionsContainer} id="optionContainer">
        {data &&
          data.map((item, index) => (
            <div
              className={styles.option}
              onClick={() => setItemSelect(item.value)}
            >
              <input
                type="radio"
                className={styles.radio}
                id={item.value}
                name={item.value}
              />
              <label for={item.value}>{item.displayName}</label>
            </div>
          ))}
      </div>
    )}
    <div className={styles.selectedBox}>
      {visibleData ? visibleData : heading}
    </div>
  </div>
);
