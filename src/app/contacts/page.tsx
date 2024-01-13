import { ContactCard } from '@/components/ContactCard';
import { CONTACTS } from '@/constant/contact';

export default function Contact() {
  return (
    <section className="mx-auto max-w-lg">
      <h1 className="font-bold text-2xl lg:text-3xl uppercase">Contacts</h1>
      <p className="mb-6 pt-2 pb-6 text-neutral-300 border-b border-dashed border-neutral-600">
        On this page are all my contacts to get in touch with me.
      </p>
      <div className="my-4 grid md:grid-cols-2 gap-4">
        {CONTACTS.map((item, index) => (
          <ContactCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
