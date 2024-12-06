export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validatePhoneNumber = (phoneNumber) => {
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return re.test(phoneNumber);
};

export const validateAppointmentData = (data) => {
  const errors = {};

  if (!data.dateTime) {
    errors.dateTime = 'Date and time are required';
  }

  if (!data.type) {
    errors.type = 'Appointment type is required';
  }

  if (!data.patientId) {
    errors.patientId = 'Patient is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};