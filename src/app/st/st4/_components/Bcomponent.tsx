"use client";

import React, { useState, useEffect } from "react";
import eventBus from "../EventBus";

const BComponent = () => {
  const [receivedValue, setReceivedValue] = useState("");

  useEffect(() => {
    const handleValueChange = (value: any) => {
      setReceivedValue(value);
    };

    eventBus.on("valueChanged", handleValueChange);

    return () => {
      eventBus.off("valueChanged", handleValueChange);
    };
  }, []);

  return (
    <div>
      <h2>B 컴포넌트</h2>
      <p>받은 값: {receivedValue}</p>
    </div>
  );
};

export default BComponent;
