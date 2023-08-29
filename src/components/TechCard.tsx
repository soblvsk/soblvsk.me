'use client';

import { Icon } from '@iconify/react';

interface Tech {
  img: string;
  title: string;
}

export const TechCard = ({ img, title }: Tech) => {
  return (
    <div className='flex items-center gap-2 p-3 rounded-lg overflow-hidden bg-neutral-900'>
      <div className='flex items-center justify-center rounded-lg'>
        <div className='w-6 h-6'>
          <Icon className='w-6 h-6' icon={img} />
        </div>
      </div>
      <span className='text-sm text-neutral-400'>{title}</span>
    </div>
  );
};
