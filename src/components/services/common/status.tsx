import classNames from 'classnames';
import React from 'react';

export type StatusProps = {
  color: 'green' | 'red' | 'orange';
  label: string;
};

const Status = ({ label, color }: StatusProps) => {
  const statusWrapper = classNames(
    'w-min h-6 p-2 px-2.5 flex items-center rounded-xl font-medium',
    {
      'bg-theme-red-100 text-theme-red-700': color === 'red',
      'bg-theme-green-100 text-theme-green-800': color === 'green',
      'bg-orange-100 text-orange-700': color === 'orange',
    },
  );

  const statusDot = classNames('w-1.5 h-1.5 rounded-full mr-1.5 ', {
    'bg-theme-red-700': color === 'red',
    'bg-theme-green-800': color === 'green',
    'bg-orange-700': color === 'orange',
  });

  return (
    <div className={statusWrapper}>
      <div className={statusDot}></div>
      {label}
    </div>
  );
};

export default Status;
