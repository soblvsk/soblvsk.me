'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MENU_ITEMS } from '@/constant/menu';

export const Header = () => {
  let pathname = usePathname() || '/';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b border-neutral-700">
      <div className="flex justify-center items-center h-16">
        <div className="flex flex-row space-x-0">
          {MENU_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={clsx(
                ' flex align-middle transition-all',
                pathname !== item.href &&
                  'text-neutral-400 hover:text-neutral-300',
              )}
            >
              <span className="p-2">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
