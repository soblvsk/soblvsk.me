'use client';

import { ContactProps } from '@/types/contact';
import { Icon } from '@iconify/react';

export const ContactCard = (props: ContactProps) => {
  const { icon, href, title } = props;

  const handleAction = (link: string) => window.open(link, '_blank');
  return (
    <button
      className="rounded-xl transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap gap-2 py-2 px-5 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800"
      onClick={() => handleAction(href)}
    >
      <Icon className="w-6 h-6" icon={icon} />
      <span>{title}</span>
    </button>
  );
};
