import { TrashIcon } from '@/components/helper/icons';
import React from 'react';

type CancelType = {
  onClick: () => void;
};

const Cancel = ({ onClick }: CancelType) => {
  return (
    <div
      className="cursor-pointer flex items-center gap-3 hover:opacity-65 active:opacity-85 transition-opacity"
      onClick={onClick}
    >
      <span className="stroke-textColor-clickable">
        <TrashIcon />
      </span>
      <span>İptal Et</span>
    </div>
  );
};

export default Cancel;
