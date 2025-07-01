import React from "react";

export default function Contact() {
  return (
    <main className="bg-[#faf4f0] px-6 py-20 text-gray-800">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0C3E83] mb-4">
          Get in Touch
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Have questions, feedback, or partnership inquiries? We’d love to hear
          from you. Drop us a message and we’ll get back to you as soon as
          possible.
        </p>
      </section>

      <section className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#0C3E83] focus:border-[#0C3E83]"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#0C3E83] focus:border-[#0C3E83]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#0C3E83] focus:border-[#0C3E83]"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0C3E83] text-white font-semibold py-3 rounded-md hover:bg-[#032B52] transition-all"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-700">
          Prefer to email directly? Reach us at{" "}
          <a
            href="mailto:admin@ainzone.com"
            className="text-[#0C3E83] font-medium hover:text-[#032B52]"
          >
            admin@ainzone.com
          </a>
        </div>
      </section>
    </main>
  );
}
