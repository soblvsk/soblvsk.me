import clsx from 'clsx';

type SeparatorProps = {
  className?: string;
  [propName: string]: string | undefined;
};

const Separator = ({ className, ...props }: SeparatorProps) => {
  return (
    <div
      className={clsx('border-t border-neutral-700  my-4', className)}
      {...props}
    ></div>
  );
};

export { Separator };
