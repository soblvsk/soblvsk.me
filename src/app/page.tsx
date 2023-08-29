import Image from 'next/image';

export default function Home() {
  return (
    <section className='bg-[#0a0b0b] p-6 rounded-xl'>
      <div className='flex items-center justify-center relative overflow-hidden rounded-xl mb-8'>
        <Image
          className='w-48 h-48 rounded-full object-cover'
          src='/avatar.jpg'
          width={192}
          height={192}
          sizes='33vw'
          alt='avatar'
          priority
        />
      </div>
      <h1 className='font-bold text-2xl mb-8 uppercase'>Frontend Developer</h1>
      <p className='text-neutral-400'>
        Hi, I&apos;m <span className='text-orange-600'>soblvsk</span>. I&apos;m
        from Russia, Krasnoyarsk.
        <br />
        <br />
        My journey in IT started in
        <span className='text-orange-600'> 2021</span> by learning the C++
        programming language. After learning several languages, I found that my
        passion for creativity was fully embodied in
        <span className='text-orange-600'> web development</span>. I always
        strive for continuous development and believe that
        <span className='text-orange-600'> working in a team</span> is a great
        opportunity for personal and professional growth.
      </p>
    </section>
  );
}
