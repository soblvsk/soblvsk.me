'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const items = {
  '/': {
    name: 'Home',
  },
  '/career': {
    name: 'Career',
  },
  '/contacts': {
    name: 'Contacts',
  },
};

export default function Sidebar() {
  let pathname = usePathname() || '/';

  return (
    <div className='my-16'>
      <nav className='flex flex-row items-center justify-center relative md:overflow-auto scroll-pr-6 md:relative'>
        <div className='flex flex-row space-x-0'>
          {Object.entries(items).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all hover:text-neutral-200 flex align-middle',
                  {
                    'text-neutral-500': !isActive,
                  },
                )}
              >
                <span className='p-2'>{name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
