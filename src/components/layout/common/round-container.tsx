import classNames from 'classnames';
import React from 'react';

const RoundContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames('bg-white rounded-2xl', className)}>
      {children}
    </div>
  );
};

export default RoundContainer;
