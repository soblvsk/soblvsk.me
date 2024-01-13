'use client';

import { TechProps } from '@/types/tech';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

export const TechItem = (props: TechProps) => {
  const { icon, title, color } = props;

  return (
    <div className="flex items-center gap-2 rounded-lg py-2 px-5 w-max bg-neutral-900 text-sm text-neutral-50 shadow-sm border border-neutral-700">
      <Icon className={clsx('w-6 h-6', `text-${color}`)} icon={icon} />
      <span>{title}</span>
    </div>
  );
};
