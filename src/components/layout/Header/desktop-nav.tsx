import {
  DropdownArrowIcon,
  FinanceIcon,
  HomeIcon,
  OffersIcon,
  OrdersIcon,
  StocksIcon,
  TicketIcon,
} from '@/components/helper/icons';
import classNames from 'classnames';
import Link from 'next/link';

type NavItemProps = {
  href: string;
  className?: string;
  icon?: JSX.Element;
  label: string;
  active?: boolean;
  dropdown?: boolean; // for the demo
};

const NavItem = ({
  href,
  className,
  label,
  icon,
  active,
  dropdown,
}: NavItemProps) => {
  return (
    <Link
      href={href}
      className={classNames(
        'relative flex gap-3 items-center  group  hover:text-main h-full',
        className,
      )}
    >
      <span
        className={classNames(' transition-colors group-hover:stroke-main', {
          'stroke-main': active,
          'stroke-textColor-clickable': !active,
        })}
      >
        {icon}
      </span>
      <span
        className={classNames(
          'text-sm text-textColor-clickable transition-colors font-medium group-hover:text-main',
        )}
      >
        {label}
      </span>

      {dropdown && (
        <span className="stroke-textColor-clickable">
          <DropdownArrowIcon />
        </span>
      )}
      {active && (
        <div
          className="absolute w-full h-[3px] -bottom-[1.5px] bg-main rounded-md"
          style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));' }}
        ></div>
      )}
    </Link>
  );
};

const DesktopNav = () => {
  return (
    <div className="flex justify-center gap-6 h-full">
      <NavItem href="/" label="Ana Sayfa" icon={<HomeIcon />} />
      <NavItem href="/" label="Stoklar" icon={<StocksIcon />} />
      <NavItem href="/" label="Siparişler" icon={<OrdersIcon />} active />
      <NavItem href="/" label="Teklifler" icon={<OffersIcon />} />
      <NavItem href="/" label="Ticket" icon={<TicketIcon />} />
      <NavItem href="/" label="Finans" icon={<FinanceIcon />} dropdown />
    </div>
  );
};

export default DesktopNav;
