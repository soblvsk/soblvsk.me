'use client';

import { Icon } from '@iconify/react';
import { TECH } from '@/constant/tech';
import { TechItem } from './TechItem';

export const TechList = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center font-bold text-xl text-neutral-600 uppercase">
        <Icon
          className="w-5 h-5 mr-2 text-green-400"
          icon="codicon:terminal-bash"
        />
        <h2 className="text-green-400">Tech stack</h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {TECH?.map((item, index) => <TechItem key={index} {...item} />)}
      </div>
    </section>
  );
};
