'use client';

import { EducationProps } from '@/types/education';
import { Card } from '@/ui/Card';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export const EducationItem = (props: EducationProps) => {
  const { title, url, logo, degree, major, date } = props;

  return (
    <Card className="flex items-center gap-5 py-4 px-6 border border-neutral-700">
      {logo ? (
        <Image
          className="w-[72px] h-[72px]"
          src={logo}
          width="72"
          height="72"
          alt={title}
          priority
        />
      ) : (
        <Icon icon="heroicons:building-office-2" />
      )}
      <div className="space-y-1">
        <a href={url || '#'} target="_blank">
          <h6 className="hover:text-green-400 duration-300 transition-colors">
            {title}
          </h6>
        </a>
        <div className="text-sm text-neutral-400 space-y-2">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <span>{degree}</span>
            <span className="hidden md:flex text-neutral-700">•</span>
            <span>{major}</span>
          </div>
          <div className="flex md:text-[12px]">
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
