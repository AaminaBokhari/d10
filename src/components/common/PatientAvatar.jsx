import React from 'react';

function PatientAvatar({ name, size = 'md' }) {
  const sizes = {
    sm: 'h-6 w-6 text-sm',
    md: 'h-8 w-8 text-base',
    lg: 'h-10 w-10 text-lg'
  };

  return (
    <div className={`${sizes[size]} rounded-full bg-gray-200 flex items-center justify-center mr-3`}>
      {name.charAt(0)}
    </div>
  );
}

export default PatientAvatar;