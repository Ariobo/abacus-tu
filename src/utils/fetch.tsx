export const getData = async ({
  path,
  params,
}: {
  path: string;
  params?: string;
}) => {
  const result = await fetch(path);
  const data = await result.json();
  if (params) {
    return data[params] ? data[params] : "일치하는 항목이 없습니다.";
  } else {
    return data;
  }
};
