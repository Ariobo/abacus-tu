import { FormEventHandler, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { getData } from "@/utils/fetch";
import { TotalPage } from "./form/number";
import { HeaderGrid } from "./form/headGrid";
import { BodyGrid } from "./form/bodyGrid";
import { PagiNation } from "./form/pagiNation";

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

export default function GridComponent() {
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [res, setRes] = useState(null);

  const getMockData = async () => {
    try {
      const result = await getData({ path: "/mockData.json" });
      setRes(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value, "value 입니다.");
    setLimit(parseInt(e.target.value));
    setCurrentPage(1);
  };

  useEffect(() => {
    getMockData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-3">
        <TotalPage totalCount={res ? (res.totalCount as any) : 0} />
        <ClickButton />
      </div>
      <table className="w-full border">
        <HeaderGrid
          col={["아이디", "이름", "나이", "이메일", "생성 시간", "순서"]}
        />
        {/* <BodyGrid data={res} />*/}
        {res ? <BodyGrid data={res} /> : null}
      </table>
      <footer className="flex justify-center mt-7">
        <label>
          목록 수:&nbsp;
          <select onChange={handleChangeLimit}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </label>
        <PagiNation
          limit={limit}
          totalCount={res ? (res.totalCount as any) : 0}
          currentPage={currentPage}
          onPageChange={(newPage: number) => setCurrentPage(newPage)}
        />
      </footer>
    </div>
  );
}
