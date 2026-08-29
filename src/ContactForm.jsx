import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-300 bg-white p-4 sm:p-6">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-base font-medium text-slate-700">
            Name
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-3 text-base text-slate-900 outline-none transition focus:border-[#3b82f6]"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-base font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-3 text-base text-slate-900 outline-none transition focus:border-[#3b82f6]"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-base font-medium text-slate-700">
            Message
          </label>
          <textarea
            className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-3 text-base text-slate-900 outline-none transition focus:border-[#3b82f6]"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="inline-flex rounded-md border border-slate-300 bg-slate-200 px-5 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
