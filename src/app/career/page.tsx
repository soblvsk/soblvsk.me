import { EducationCard } from '@/components/EducationCard';
import { TechCard } from '@/components/TechCard';
import education from '../data/education.json';
import skills from '../data/skills.json';

export default function Career() {
  return (
    <section className='bg-[#0a0b0b] p-6 rounded-xl'>
      <h1 className='font-bold text-2xl uppercase'>Career</h1>
      <div className='my-8 w-full h-px bg-zinc-800'></div>
      <div className='flex flex-col gap-6'>
        <h2 className='font-bold text-xl text-neutral-600 uppercase'>
          Education
        </h2>
        <div className='flex flex-col gap-4'>
          {education.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </div>
        <h2 className='font-bold text-xl text-neutral-600 uppercase'>
          Tech stack
        </h2>
        <div className='grid gap-3 grid-cols-2 md:grid-cols-4'>
          {skills.map((item, index) => (
            <TechCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
