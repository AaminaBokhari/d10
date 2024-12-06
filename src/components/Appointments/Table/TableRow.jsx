import React from 'react';
import { flexRender } from '@tanstack/react-table';

function TableRow({ row }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      {row.getVisibleCells().map(cell => (
        <td
          key={cell.id}
          className="px-6 py-4 whitespace-nowrap"
        >
          {flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          )}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;