import React from 'react';

function LoadingSkeleton({ count = 3 }) {
  return (
    <div className="animate-pulse space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-start space-x-4">
          <div className="bg-gray-200 h-10 w-10 rounded-lg"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;