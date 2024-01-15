"use client";

interface PaginationProps {
  totalCount: number;
  limit: number;
  currentPage: number;
  onPageChange: (page: number) => void; // 추가
}

export const PagiNation: React.FC<PaginationProps> = ({
  totalCount,
  limit,
  onPageChange,
  currentPage,
}) => {
  const numPages = Math.ceil(totalCount / limit);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= numPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div>
      <p>
        현재 페이지: {currentPage} / 전체 페이지: {numPages}
      </p>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300"
      >
        이전 페이지
      </button>
      {Array.from({ length: numPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className="px-4 py-2 bg-gray-300"
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === numPages}
        className="px-4 py-2 bg-gray-300"
      >
        다음 페이지
      </button>
    </div>
  );
};
