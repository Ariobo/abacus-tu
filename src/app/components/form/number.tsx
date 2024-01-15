"use client";

import { prettyNumber } from "@/utils/prettyNumber";

export function TotalPage({ totalCount }: any) {
  return <p>{prettyNumber(totalCount)} 건</p>;
}
