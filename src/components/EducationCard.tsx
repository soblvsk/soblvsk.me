'use client';

interface Education {
  title: string;
  url: string;
  position: string;
  date: string;
}

export const EducationCard = ({ title, url, position, date }: Education) => {
  return (
    <div className='overflow-hidden rounded-xl px-8 py-4 bg-neutral-900'>
      <a
        className='underline transition-all duration-300 hover:text-orange-600'
        href={url || '#'}
        target='_blank'
      >
        {title}
      </a>
      <div className='mt-2 text-sm text-neutral-400 space-y-2'>
        <div>{position}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};
