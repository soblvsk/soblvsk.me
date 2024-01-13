'use client';

import { Icon } from '@iconify/react';
import { EDUCATION } from '@/constant/education';
import { EducationItem } from './EducationItem';

export const EducationList = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center font-bold text-xl text-neutral-600 uppercase">
        <Icon className="w-5 h-5 mr-2 text-green-400" icon="cil:education" />
        <h2 className="text-green-400">Education</h2>
      </div>

      <div className="grid md:grid-cols-1 gap-4">
        {EDUCATION?.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
