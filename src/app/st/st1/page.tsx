"use client";

import { FormEventHandler, useState } from "react";
import ButtonComponent from "@/app/components/form/button";
import InputComponent, { ChangeName } from "@/app/components/form/input";
import { getValueForKey } from "@/utils/foodUtils";
import UseEffectComponent1, {
  UseEffectComponent2,
} from "@/app/components/useEffect";

export default function Page() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [master, setMaster] = useState("");

  const keys = ["apple", "banana", "carrot"];

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const handleButtonClick = () => {
    console.log("버튼이 클릭되었습니다!");
  };

  const handleClick = (action: "increment" | "decrement") => {
    if (action === "increment") {
      setCount(count + 1);
    } else if (action === "decrement" && count > 0) {
      setCount(count - 1);
    }
  };

  const handleNumberChange = (value: number) => {
    setNumber(value);
  };

  const handleMessageChange = (newMessage: string) => {
    if (newMessage === "자비스") {
      setMaster("네 주인님");
    } else {
      setMaster("누구냐 !!!!");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p className="m-5 text-3xl">숫자 증가</p>
        <ButtonComponent handleClick={handleClick}>증가</ButtonComponent>
        <p>카운트: {count}</p>
      </form>
      <div>
        <p className="m-5 text-3xl"> 부모 자식 값변환</p>
        <span>{master}</span>
        <ChangeName onInputChange={handleMessageChange} />
      </div>
      <div>
        <p className="m-5 text-3xl">, 추가</p>
        <InputComponent onInputChange={handleNumberChange} />
        <p>입력된 숫자: {number.toLocaleString("ko-KR")}</p>
      </div>
      <div>
        <p className="m-5 text-3xl">리스트 출력</p>
        {keys.map((key, index) => (
          <p key={index}>{`${key}: ${getValueForKey(key)}`}</p>
        ))}
      </div>
      <div>
        <p className="m-5 text-3xl">UseEffect</p>
        <UseEffectComponent1 />
        <UseEffectComponent2 />
      </div>
    </div>
  );
}
