import React, { FormEventHandler, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { getData } from "@/utils/fetch";

export function HeaderGrid({ col }: any) {
  const columnWidths = ["w-32", "w-12", "", "", "w-4", "w-30"];

  return (
    <thead className="bg-gray-200">
      <tr>
        {col.map((column: string, index: number) => (
          <th key={index} className={`px-4 py-2 ${columnWidths[index]}`}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function BodyGrid({ value, data }: any) {
  console.log(value, "asdasd");
  console.log(data, "123");

  return (
    <tbody>
      {data.map((rowData: any, index: number) => (
        <tr
          key={rowData.id}
          className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
        >
          <td className="px-4 py-2">{rowData.id}</td>
          <td className="px-4 py-2">{rowData.name}</td>
          <td className="px-4 py-2">{rowData.age}</td>
          <td className="px-4 py-2">{rowData.email}</td>
          <td className="px-4 py-2">{rowData.date || "-"}</td>
          <td className="px-4 py-2">{rowData.num || "-"}</td>
        </tr>
      ))}
    </tbody>
  );
}

export function ClickButton() {
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log("Button clicked!");
  };

  return (
    <form onSubmit={onSubmit}>
      <Button type="submit">체크박스 활성</Button>
    </form>
  );
}

//util 파일 이라 치고
export function isEmpty(value: unknown) {
  const result = false;
  if (value === undefined) return true;

  if (typeof value === "number") {
    if (value === 0) return true;
  } else if (typeof value === "string") {
    if (value === "" || value.length === 0) return true;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      if (value.length === 0) return true;
    } else if (!value) {
      return true;
    } else {
      if (Object.keys(value).length === 0) return true;
    }
  }
  return result;
}

export function prettyNumber(number: number) {
  if (isEmpty(number)) return "0";
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 위까지 유틸 파일

export function TotalPage({ totalCount }: any) {
  return <p>{prettyNumber(totalCount)} 건</p>;
}

export function PageNation({ limit, setPage, page, total }: any) {
  // console.log(page, "page");
  // console.log(setPage, "setPage");
  // console.log(limit, "limit");
  const numPages = Math.ceil(total / limit);
  // console.log(numPages, "numPages");
  return (
    <nav>
      {/* <div>{limit}</div>
      <nav>
        <button onClick={() => setPage(page - 1)}>&lt;</button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : undefined}
            >
              {i + 1}
            </Button>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </nav> */}
    </nav>
  );
}

export default function GridComponent() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [res, setRes] = useState(null);

  const getMockData = async () => {
    try {
      const result = await getData({ path: "/mockData.json" });
      console.log(result);
      setRes(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMockData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-3">
        <TotalPage totalCount={res} />
        <ClickButton />
      </div>
      <table className="w-full border">
        <HeaderGrid
          col={["아이디", "이름", "나이", "이메일", "생성 시간", "순서"]}
        />
        <BodyGrid
          data={res}
          value={["id", "name", "age", "email", "date", "num"]}
        />
      </table>
      <footer className="flex justify-center mt-7">
        <label>
          목록 수:&nbsp;
          <select>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </label>
        <PageNation limit={limit} page={page} setPage={setPage} total={res} />
      </footer>
    </div>
  );
}
