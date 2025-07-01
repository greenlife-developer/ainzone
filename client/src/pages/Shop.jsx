import React from "react";

export default function Shop() {
  return (
    <main className="bg-[#faf4f0] px-6 py-20 text-gray-800">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0C3E83] mb-4">
          SHOP – COMING SOON
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-12">
          Empowering Tools Are On the Way
        </p>

        <div className="bg-white p-6 rounded-xl shadow-md text-left space-y-5">
          <p className="text-sm text-gray-700 border-l-4 border-[#0C3E83] pl-4">
            🔹 Empowerment ebooks & journals
          </p>
          <p className="text-sm text-gray-700 border-l-4 border-[#0C3E83] pl-4">
            🔹 Solo travel tools & checklists
          </p>
          <p className="text-sm text-gray-700 border-l-4 border-[#0C3E83] pl-4">
            🔹 Resources for single parents
          </p>
          <p className="text-sm text-gray-700 border-l-4 border-[#0C3E83] pl-4">
            🔹 Digital products to help you grow, heal & thrive
          </p>
          <p className="text-sm text-gray-700 border-l-4 border-[#0C3E83] pl-4">
            🔹 Our favorite creator tools like Fiverr, Canva & more
          </p>
        </div>

        <p className="text-base text-gray-700 mt-10">
          Whether you’re reclaiming your power, raising your family solo, or
          building your side hustle — we’ve got you covered.
        </p>

        <div className="bg-white mt-8 p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold text-[#0C3E83] mb-2">
            Want first access + launch discounts?
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Join our email list and be the first to know when the shop goes
            live.
          </p>
          <a
            href="mailto:admin@ainzone.com"
            className="inline-block bg-[#0C3E83] text-white px-6 py-3 rounded-full hover:bg-[#032B52] transition-all"
          >
            Contact: admin@ainzone.com
          </a>
        </div>
      </section>
    </main>
  );
}
