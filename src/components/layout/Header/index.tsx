import Image from 'next/image';
import Link from 'next/link';
import SectionContainer from '../common/section-container';
import DesktopNav from './desktop-nav';
import ProfileInfo from './profile-info';

const Header = () => {
  return (
    <div className="bg-white border-b border-b-grayStrokeColor">
      <SectionContainer className="flex items-center justify-between mx-auto h-[70px]">
        <Link href={'/'}>
          <Image
            src={'/assets/pendc-logo.png'}
            width={134}
            height={21}
            alt="PenDC Logo"
          />
        </Link>
        <DesktopNav />
        <ProfileInfo />
      </SectionContainer>
    </div>
  );
};

export default Header;
