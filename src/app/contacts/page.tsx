import { ContactCard } from '@/components/ContactCard';
import conctacts from '@/data/contact.json';

export default function Contact() {
  return (
    <section className='bg-[#0a0b0b] p-6 rounded-xl'>
      <h1 className='font-bold text-2xl mb-8 uppercase'>Contacts</h1>
      <p className='text-neutral-400'>
        On this page are all my contacts to get in touch with me.
      </p>
      <div className='my-8 w-full h-px bg-zinc-800'></div>
      <div className='my-4 grid md:grid-cols-2 gap-4'>
        {conctacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </section>
  );
}
