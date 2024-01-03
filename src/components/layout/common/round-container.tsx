import classNames from 'classnames';
import React from 'react';

const RoundContainer = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className={classNames('bg-white rounded-2xl', className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default RoundContainer;
