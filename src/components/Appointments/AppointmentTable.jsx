import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import TableHeader from './Table/TableHeader';
import TableRow from './Table/TableRow';
import { useTableColumns } from './Table/useTableColumns';

function AppointmentTable({ data, filters, onAppointmentUpdate }) {
  const columns = useTableColumns(onAppointmentUpdate);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: filters.search,
      columnFilters: [
        {
          id: 'status',
          value: filters.status,
        },
        {
          id: 'type',
          value: filters.type,
        },
      ],
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableHeader key={headerGroup.id} headerGroup={headerGroup} />
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentTable;