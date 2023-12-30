import { LeftIcon } from '@/components/helper/icons';
import React from 'react';

type UndoType = {
  onClick: () => void;
};

const Undo = ({ onClick }: UndoType) => {
  return (
    <div
      className="cursor-pointer text-main flex items-center gap-3 hover:opacity-65 active:opacity-85 transition-opacity"
      onClick={onClick}
    >
      <span className="stroke-main">
        <LeftIcon />
      </span>
      Geri Al
    </div>
  );
};

export default Undo;
