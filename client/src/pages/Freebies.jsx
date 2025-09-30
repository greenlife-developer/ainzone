import React from "react";

export default function Freebies() {
  return (
    <main className="bg-[#faf4f0] px-6 py-16 text-gray-800">
      {/* Intro Section */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0C3E83] mb-4">
          🎁 Freebies
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          Here’s a library of free resources to help you start and grow in
          affiliate marketing. Explore, learn, and take action today!
        </p>
      </section>

      {/* Freebies Content */}
      <section className="max-w-5xl mx-auto space-y-12">
        {/* Starter Guide */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-[#0C3E83] mb-2">
            📘 Starter Guide – How Affiliate Marketing Works
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Affiliate marketing is simply recommending a product or service and
            earning a commission when someone buys through your link. To get
            started:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>
              🎯 Pick a niche you’re interested in (e.g., travel, fitness,
              finance).
            </li>
            <li>
              🔗 Join an affiliate program (Impact, Amazon Associates, CJ
              Affiliate, etc.).
            </li>
            <li>
              ✍ Create content (blogs, YouTube, or social media) where you
              share your affiliate links.
            </li>
            <li>
              💡 Focus on solving problems for your audience, not just selling.
            </li>
          </ul>
        </div>

        {/* Toolkit Checklist */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-[#0C3E83] mb-2">
            🛠 Toolkit Checklist – Must-Have Tools for Affiliates
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Here are the essentials you’ll need to make your journey smooth:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>🌐 A website or blog (WordPress, Wix, or Squarespace).</li>
            <li>
              📧 An email marketing tool (Mailchimp, ConvertKit, or Brevo).
            </li>
            <li>🔗 Link management (Bitly or Pretty Links).</li>
            <li>
              🎨 Content creation tools (Canva for graphics, ChatGPT for ideas).
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-3">
            ✅ Use this list as a quick reminder whenever you’re setting up new
            campaigns.
          </p>
        </div>

        {/* Affiliate Programs */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-[#0C3E83] mb-2">
            🌍 10 Affiliate Programs You Can Join Today
          </h3>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1 mb-3">
            <li>Impact</li>
            <li>Amazon Associates</li>
            <li>CJ Affiliate</li>
            <li>ShareASale</li>
            <li>Rakuten Advertising</li>
            <li>ClickBank</li>
            <li>Awin</li>
            <li>FlexOffers</li>
            <li>PartnerStack</li>
            <li>Travelpayouts</li>
          </ol>
          <p className="text-sm text-gray-600">
            👉 Pick one or two programs that match your niche, and focus on
            promoting those first.
          </p>
        </div>

        {/* Content Ideas */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-[#0C3E83] mb-2">
            💡 Content Ideas Cheat Sheet – What to Post
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>📝 Write a “Top 5 Products” list in your niche.</li>
            <li>
              🎥 Record a quick review video of a product you actually use.
            </li>
            <li>🔄 Share “before and after” results with a tool or service.</li>
            <li>🖥 Create a tutorial that shows people how to use a product.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-3">
            ✨ Consistent content builds trust, and trust makes people click
            your links.
          </p>
        </div>

        {/* Income Tracker */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-[#0C3E83] mb-2">
            📊 Affiliate Income Tracker – Stay Organized
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Tracking your earnings and expenses is key to knowing what’s
            working. Here’s a simple system:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>
              📋 Use a spreadsheet (Google Sheets/Excel) to record every program
              you join.
            </li>
            <li>📈 Track clicks, sales, and commissions for each link.</li>
            <li>
              🔍 Review monthly to see which products bring the most income.
            </li>
            <li>🚀 Cut out what isn’t working, and double down on winners.</li>
          </ul>
        </div>
      </section>

      {/* Closing Note */}
      <section className="max-w-3xl mx-auto text-center mt-16">
        <p className="text-base font-medium text-[#0C3E83]">
          💰 Remember: every big income starts with one small action. Stay
          consistent, stay motivated, and your affiliate journey will reward
          you.
        </p>
      </section>
    </main>
  );
}
