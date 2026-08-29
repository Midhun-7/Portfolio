import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-600">Contact</p>
      </div>

      <h2 className="mb-8 text-[2.6rem] font-black leading-none tracking-[-0.05em] text-slate-900 sm:text-[3.3rem]">
        Contact Me
      </h2>

      <p className="mb-8 max-w-3xl text-[1.15rem] leading-8 text-slate-700">
        Let&apos;s build something great.
      </p>

      <div className="mb-8 text-lg leading-8 text-slate-700">
        <div className="mb-2 font-semibold text-slate-900">Email</div>
        <div className="text-[#3b82f6]">hello@midhun.dev</div>

        <div className="mt-6 mb-2 font-semibold text-slate-900">Location</div>
        <div>India</div>
      </div>

      <ContactForm />
    </section>
  );
}

export default Contact;
