import Image from 'next/image';

export default function Home() {
  return (
    <section className="mx-auto max-w-lg">
      <div className="flex items-center relative overflow-hidden rounded-xl mb-8">
        <Image
          className="w-32 h-32 rounded-full object-cover"
          src="/avatar.jpg"
          width={192}
          height={192}
          sizes="33vw"
          alt="avatar"
          priority
        />
      </div>

      <h1 className="font-bold text-2xl lg:text-3xl mb-8 uppercase">
        Frontend Developer
      </h1>

      <p className="text-neutral-300">
        Hi, I&apos;m <span className="text-green-400">soblvsk</span>. I&apos;m
        from Russia, Krasnoyarsk.
        <br />
        <br />
        My journey in IT started in
        <span className="text-green-400"> 2021</span> by learning the C++
        programming language. After learning several languages, I found that my
        passion for creativity was fully embodied in
        <span className="text-green-400"> web development</span>. I always
        strive for continuous development and believe that
        <span className="text-green-400"> working in a team</span> is a great
        opportunity for personal and professional growth.
      </p>
    </section>
  );
}
