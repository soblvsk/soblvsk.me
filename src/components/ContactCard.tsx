'use client';

import { Icon } from '@iconify/react';

interface Contact {
  img: string;
  title: string;
  description: string;
  href: string;
}

export const ContactCard = ({ img, title, description, href }: Contact) => {
  return (
    <a
      href={href}
      className='rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md flex items-center gap-5 py-4 px-4 bg-neutral-900 hover:bg-zinc-800'
    >
      <div className='overflow-hidden'>
        <Icon className='w-8 h-8' icon={img} />
      </div>
      <div className='space-y-1'>
        <h6>{title}</h6>
        <p className='text-neutral-400 text-sm'>{description}</p>
      </div>
    </a>
  );
};
