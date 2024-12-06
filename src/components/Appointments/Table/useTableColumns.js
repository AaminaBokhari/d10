import { createColumnHelper } from '@tanstack/react-table';
import { format } from 'date-fns';
import AppointmentActions from '../AppointmentActions';

export const useTableColumns = (onAppointmentUpdate) => {
  const columnHelper = createColumnHelper();

  return [
    columnHelper.accessor('dateTime', {
      header: 'Time',
      cell: info => (
        <span className="font-medium">
          {format(new Date(info.getValue()), 'p')}
        </span>
      ),
    }),
    columnHelper.accessor('patient.name', {
      header: 'Patient Name',
      cell: info => (
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
            {info.getValue().charAt(0)}
          </div>
          <span className="font-medium">{info.getValue()}</span>
        </div>
      ),
    }),
    columnHelper.accessor('type', {
      header: 'Type',
      cell: info => (
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: info => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          info.getValue() === 'Waiting' ? 'bg-yellow-100 text-yellow-800' :
          info.getValue() === 'In Progress' ? 'bg-green-100 text-green-800' :
          info.getValue() === 'Cancelled' ? 'bg-red-100 text-red-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: (info) => (
        <AppointmentActions
          appointment={info.row.original}
          onUpdate={onAppointmentUpdate}
        />
      ),
    }),
  ];
};