"use client";

import React, { useState } from "react";
import eventBus from "../EventBus";
import CComponent from "./Ccomponent";

const AComponent = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    eventBus.emit("valueChanged", value);
  };

  const handleRadioClick = (e: any) => {
    const selectedValue = e.target.value;
    console.log(selectedValue, "bbb");
    if (selectedValue === "A") {
      console.log(selectedValue, "asdasd");
      eventBus.emit("radioValue", selectedValue);
    }
  };

  return (
    <div>
      <div>
        <h2>A 컴포넌트</h2>
        <input type="text" value={value} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>값 전송</button>
      </div>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="gender"
              value="M"
              onClick={handleRadioClick}
              defaultChecked
            />
            남성
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="gender"
              value="F"
              onClick={handleRadioClick}
            />
            여성
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="gender"
              value="A"
              onClick={handleRadioClick}
            />
            기타
          </label>
        </li>
      </ul>
      <CComponent />
    </div>
  );
};

export default AComponent;
