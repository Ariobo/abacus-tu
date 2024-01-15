"use client";

export function BodyGrid({ data }: any) {
  return (
    <tbody>
      {data.data.map((rowData: any, index: number) => (
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
