import clsx from 'clsx';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={clsx(
        'bg-neutral-900 rounded-xl transition-all duration-300 shadow-sm',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };
