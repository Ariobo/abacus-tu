"use client";

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
