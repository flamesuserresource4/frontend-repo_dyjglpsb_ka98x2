import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 800);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-indigo-500" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Get in touch</h2>
        </div>
        <p className="mt-2 text-gray-600">Have a project in mind or just want to say hi? Drop a message.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input required className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900" placeholder="Your name" />
            <input required type="email" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900" placeholder="Email address" />
          </div>
          <textarea required rows={5} className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900" placeholder="Tell me about your project..." />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800">
            <Send className="h-4 w-4" /> Send Message
          </button>
          {status && <p className="text-sm text-emerald-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
