import { createColumnHelper } from '@tanstack/react-table';
import { format } from 'date-fns';
import AppointmentActions from '../AppointmentActions';
import { DATE_FORMATS } from '../../../utils/constants';
import StatusBadge from '../../common/StatusBadge';
import PatientAvatar from '../../common/PatientAvatar';

export const useTableColumns = (onAppointmentUpdate) => {
  const columnHelper = createColumnHelper();

  return [
    columnHelper.accessor('dateTime', {
      header: 'Time',
      cell: info => (
        <span className="font-medium">
          {format(new Date(info.getValue()), DATE_FORMATS.TIME)}
        </span>
      ),
    }),
    columnHelper.accessor('patient.name', {
      header: 'Patient Name',
      cell: info => (
        <div className="flex items-center">
          <PatientAvatar name={info.getValue()} />
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
        <StatusBadge status={info.getValue()} />
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