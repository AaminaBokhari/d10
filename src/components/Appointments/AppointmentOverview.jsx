import React, { useState } from 'react';
import AppointmentTable from './AppointmentTable';
import AppointmentFilters from './AppointmentFilters';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAppointments, updateAppointment } from '../../services/appointmentService';
import LoadingSkeleton from '../common/LoadingSkeleton';

function AppointmentOverview() {
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    status: '',
  });

  const queryClient = useQueryClient();

  const { data: appointments, isLoading } = useQuery(
    'appointments',
    getAppointments
  );

  const updateMutation = useMutation(
    ({ id, data }) => updateAppointment(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('appointments');
      },
    }
  );

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const handleAppointmentUpdate = async (updatedAppointment) => {
    await updateMutation.mutate({
      id: updatedAppointment._id,
      data: updatedAppointment
    });
  };

  if (isLoading) {
    return <LoadingSkeleton count={5} />;
  }

  return (
    <div className="space-y-4">
      <AppointmentFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <div className="bg-white rounded-lg shadow-md">
        <AppointmentTable 
          data={appointments || []}
          filters={filters}
          onAppointmentUpdate={handleAppointmentUpdate}
        />
      </div>
    </div>
  );
}

export default AppointmentOverview;