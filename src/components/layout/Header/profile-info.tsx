import { DropdownArrowIcon } from '@/components/helper/icons';
import Image from 'next/image';
import React from 'react';

const ProfileInfo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <Image
        src={'/assets/user-default-profile-img.png'}
        width={40}
        height={40}
        alt="Default Profile Image"
      />
      <div>
        <div className="text-sm text-textColor-clickable pb-0.5">
          Burak Güneş
        </div>
        <div className="text-xs">Pentech Bilişim</div>
      </div>
      <div className="stroke-textColor-clickable">
        <DropdownArrowIcon />
      </div>
    </div>
  );
};

export default ProfileInfo;
