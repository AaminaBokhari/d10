import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

function TableHeader({ headerGroup }) {
  return (
    <tr>
      {headerGroup.headers.map(header => (
        <th
          key={header.id}
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50"
          onClick={header.column.getToggleSortingHandler()}
        >
          <div className="flex items-center space-x-1">
            <span>{flexRender(
              header.column.columnDef.header,
              header.getContext()
            )}</span>
            {header.column.getCanSort() && (
              <span className="text-gray-400">
                {header.column.getIsSorted() === 'asc' ? (
                  <FaSortUp />
                ) : header.column.getIsSorted() === 'desc' ? (
                  <FaSortDown />
                ) : (
                  <FaSort />
                )}
              </span>
            )}
          </div>
        </th>
      ))}
    </tr>
  );
}

export default TableHeader;