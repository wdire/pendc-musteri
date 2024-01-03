import * as React from 'react';
import classNames from 'classnames';

type ButtonVariantsType = {
  variant?: 'default' | 'white' | 'red' | 'custom';
  size?: 'default' | 'sm' | 'lg' | 'custom';
  className?: string;
};

const buttonVariants = ({ variant, size, className }: ButtonVariantsType) => {
  const base = 'rounded-lg transition-opacity font-medium text-base ';

  const variants = {
    variant: {
      default: base + 'bg-main text-white hover:opacity-85 active:opacity-75 ',
      white:
        base +
        'text-theme-gray-700 bg-white border border-theme-gray-300 hover:bg-gray-100 active:bg-gray-200',
      red:
        base + 'bg-theme-red-600 text-white hover:opacity-85 active:opacity-75',

      custom: '',
      //secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      //ghost: 'hover:bg-accent hover:text-accent-foreground',
      //link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-11 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-12 rounded-md px-8',
      custom: '',
    },
  };

  const variantClasses = classNames(
    (variant && variants.variant[variant]) || variants.variant.default,
    (size && variants.size[size]) || variants.size.default,
    className,
  );

  return variantClasses;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantsType;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
