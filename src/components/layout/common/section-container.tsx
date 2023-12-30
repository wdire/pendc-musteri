import classNames from 'classnames';

const SectionContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    // 1247 = 1215px + 32px
    <div
      className={classNames('max-w-full mx-auto w-[1247px] px-4', className)}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
