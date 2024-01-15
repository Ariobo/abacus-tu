"use client";

import React, { useState, useEffect } from "react";
import eventBus from "../EventBus";

const CComponent = () => {
  const [showTextarea, setShowTextarea] = useState(false);

  useEffect(() => {
    const handleValueChange = (value: any) => {
      setShowTextarea(value === "A");
      console.log(value, "TESt");
    };

    eventBus.on("radioValue", handleValueChange);

    return () => {
      eventBus.off("radioValue", handleValueChange);
    };
  }, []);

  return (
    <div>
      {showTextarea && (
        <div>
          <h3>기타를 선택했습니다.</h3>
          <textarea rows={3} placeholder="기타 내용을 입력하세요" />
        </div>
      )}
    </div>
  );
};

export default CComponent;
