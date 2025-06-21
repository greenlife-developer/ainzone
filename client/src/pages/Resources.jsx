import React from "react";
import canvalogo from "../assets/images/canva.png";
import capcutlogo from "../assets/images/capcut.png";
import magiclightlogo from "../assets/images/sealight.png";
import fiverrlogo from "../assets/images/fiverr.png";

export default function Resources() {
  return (
    <main className="bg-[#faf4f0] px-6 py-16 text-gray-800">
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5bb3a3] mb-4">
          Affiliate Marketing Resources for Beginners & Hustlers
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Ready to grow your online income? These are the exact tools, platforms, and guides I use (and recommend) to build a smart affiliate business — even with zero experience.
        </p>
      </section>

      {/* Tools Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h3 className="text-2xl font-semibold text-[#5bb3a3] mb-4 text-center">Tools to Launch & Grow</h3>
        <p className="text-sm text-center text-gray-500 mb-8">(These are affiliate links — no extra cost to you, but they help support the site!)</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {[
            {
              title: "MagicLight AI",
              desc: "Make high-quality videos fast using AI",
              img: magiclightlogo,
              link: "#",
            },
            {
              title: "CapCut",
              desc: "Simple video editor for short-form or faceless content",
              img: capcutlogo,
              link: "#",
            },
            {
              title: "Canva Pro",
              desc: "Design affiliate pins, ebooks, and social media graphics",
              img: canvalogo,
              link: "#",
            },
            {
              title: "Fiverr",
              desc: "Hire freelancers for voiceovers, blog writing, and ad copy",
              img: fiverrlogo,
              link: "#",
              cta: "👉 Explore Fiverr Tools",
            },
          ].map(({ title, desc, img, link, cta }) => (
            <a
              href={link}
              key={title}
              className="flex gap-4 items-center bg-white rounded-lg shadow hover:shadow-md transition-all p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img} alt={title} className="w-20 h-14 object-contain rounded-md" />
              <div>
                <h4 className="font-semibold text-[#5bb3a3]">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
                {cta && <p className="text-sm text-[#5bb3a3] font-medium mt-1">{cta}</p>}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Affiliate Kits Section */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h3 className="text-2xl font-semibold text-[#5bb3a3] mb-6">Affiliate Starter Kits</h3>
        <p className="text-sm text-gray-500 mb-8">(Free guides — coming soon!)</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            "Affiliate 101: How to Make Your First $100 Online",
            "Traffic Boosting Toolkit: Grow clicks from blogs and social media",
            "Zero-Experience Blueprint: Launch your affiliate side hustle step-by-step",
          ].map((kit, idx) => (
            <div
              key={idx}
              className="bg-white border border-dashed border-[#5bb3a3] p-6 rounded-xl text-sm text-gray-700 shadow hover:shadow-md transition-all"
            >
              {kit}
            </div>
          ))}
        </div>
      </section>

      {/* Learn and Earn Section */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h3 className="text-2xl font-semibold text-[#5bb3a3] mb-6">Learn & Earn</h3>
        <ul className="text-left text-gray-700 text-sm space-y-4 list-inside list-disc md:px-10">
          <li className="pl-2">Blog posts on niches, SEO, AI content creation, and affiliate strategy</li>
          <li className="pl-2">Downloadable guides & ebooks</li>
          <li className="pl-2">Coming Soon: Digital Resource Shop</li>
        </ul>
      </section>

      {/* Subscribe CTA */}
      <section className="max-w-2xl mx-auto bg-white shadow-md p-8 rounded-xl text-center">
        <h3 className="text-xl font-bold text-[#5bb3a3] mb-2">Join the Affiliate Growth List</h3>
        <p className="text-sm text-gray-600 mb-4">Get exclusive affiliate marketing tips, free tools, and fresh content straight to your inbox.</p>
        <a href="mailto:admin@ainzone.com" className="inline-block bg-[#5bb3a3] text-white px-6 py-3 rounded-full hover:bg-[#49a393] transition-all">
          Contact or Subscribe: admin@ainzone.com
        </a>
      </section>
    </main>
  );
}
