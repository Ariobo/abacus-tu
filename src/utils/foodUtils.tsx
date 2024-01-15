import food from "@/app/assets/food.json";

type Food = {
  [key: string]: string;
};

export const getValueForKey = (key: string) => {
  return (food as Food)[key] || "값을 찾을 수 없습니다";
};
