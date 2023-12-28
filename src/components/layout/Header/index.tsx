import Image from 'next/image';
import Link from 'next/link';
import SectionContainer from '../../helper/section-container';
import DesktopNav from './desktop-nav';

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
        <div></div>
      </SectionContainer>
    </div>
  );
};

export default Header;
