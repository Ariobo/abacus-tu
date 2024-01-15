import { EventEmitter } from "events";

const eventBus = new EventEmitter();

export default eventBus;

/*
이벤트 버스는 구성 요소가 느슨하게 결합된 상태를 유지하면서 구성 요소 간의 PubSub 스타일 통신을 허용하는 디자인 패턴입니다.
*/
