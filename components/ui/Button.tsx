'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-navy-700 text-white hover:bg-navy-900 hover:scale-[1.02] shadow-md hover:shadow-xl focus:ring-navy-700',
        secondary:
          'bg-forest-500 text-white hover:bg-forest-700 hover:scale-[1.02] shadow-md hover:shadow-xl focus:ring-forest-500',
        outline:
          'border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white hover:scale-[1.02] focus:ring-navy-700',
        'outline-white':
          'border-2 border-white text-white hover:bg-white hover:text-navy-900 hover:scale-[1.02] focus:ring-white',
        ghost:
          'text-navy-700 hover:bg-navy-50 hover:scale-[1.02] focus:ring-navy-700',
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
