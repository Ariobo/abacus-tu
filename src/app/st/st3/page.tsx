import React from "react";

const ChildComponent = (props: any) => {
  try {
    props.value = 100;
  } catch (error) {
    console.error("props를 수정할 수 없습니다:", error);
  }

  return <div>{props.value}</div>;
};

const ParentComponent = () => {
  return <ChildComponent value={50} />;
};

// export function ParentComponent2() {
//   return <ChildComponent value="400" />;
// }

export default ParentComponent;

/* 
React 컴포넌트의 중요한 개념: 컴포넌트는 자신의 상태만 관리해야 하지만, 자신의 props를 관리해서는 안 됩니다.

실제로 컴포넌트의 props는 구체적으로 "다른 컴포넌트(상위 컴포넌트)의 상태"입니다 . 따라서 props는 해당 구성 요소 소유자가 관리해야 합니다. 

ex) 물건을 다른이 에게 빌려줬는데 마구잡이로 바꾸고 돌려주는게 가능?...흠 난 모르겠어

2.

데이터는 아래로 흐릅니다
부모 컴포넌트나 자식 컴포넌트 모두 특정 컴포넌트가 유상태인지 또는 무상태인지 알 수 없고, 그들이 함수나 클래스로 정의되었는지에 대해서 관심을 가질 필요가 없습니다.

이 때문에 state는 종종 로컬 또는 캡슐화라고 불립니다. state가 소유하고 설정한 컴포넌트 이외에는 어떠한 컴포넌트에도 접근할 수 없습니다.

컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있습니다.

3. 

일반적으로 이를 “하향식(top-down)” 또는 “단방향식” 데이터 흐름이라고 합니다. 모든 state는 항상 특정한 컴포넌트가 소유하고 있으며 그 state로부터 파생된 UI 또는 데이터는 오직 트리구조에서 자신의 “아래”에 있는 컴포넌트에만 영향을 미칩니다.

트리구조가 props들의 폭포라고 상상하면 각 컴포넌트의 state는 임의의 점에서 만나지만 동시에 아래로 흐르는 부가적인 수원(water source)이라고 할 수 있습니다.


*/
