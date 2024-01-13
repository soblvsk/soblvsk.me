import { EducationList } from '@/components/About/EducationList';
import { TechList } from '@/components/About/TechList';

import { Separator } from '@/ui/Separator';

export default function About() {
  return (
    <section className="mx-auto max-w-lg">
      <h1 className="font-bold text-2xl lg:text-3xl uppercase">About</h1>
      <p className="mb-6 pt-2 pb-6 text-neutral-300 border-b border-dashed border-neutral-600">
        On this page contains brief information about me.
      </p>

      <EducationList />
      <Separator className="my-8" />
      <TechList />
    </section>
  );
}
