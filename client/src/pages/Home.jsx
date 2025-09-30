import { Link } from "react-router-dom";
import icon1 from "../assets/home/lightbulb.png";
import icon2 from "../assets/home/review.png";
import icon3 from "../assets/home/resource-allocation.png";

export default function Home() {
  return (
    <main className="bg-[#faf4f0] text-gray-800">
      {/* Hero Section */}
      <section className="text-center px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0C3E83] mb-4">
          Welcome to AIN ZONE
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Your personal brand hub for affiliate marketing success. We help
          aspiring marketers, content creators, and online entrepreneurs build
          trust, provide value, and grow their income streams.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/blog"
            className="px-6 py-3 bg-[#0C3E83] text-white rounded-full hover:bg-[#032B52]"
          >
            Read Blog
          </Link>
          <Link
            to="/freebies"
            className="px-6 py-3 border border-[#0C3E83] text-[#0C3E83] rounded-full hover:bg-[#e7f8f4]"
          >
            Get Freebies
          </Link>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="px-6 py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0C3E83]">
            Why AIN ZONE?
          </h3>
          <p className="mb-8 text-base md:text-lg text-gray-600">
            We break down complex strategies into actionable steps, backed by
            data and real-world experience. Here's what you get:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f5] p-6 rounded-lg shadow">
              <img
                src={icon1}
                width={"30px"}
                alt="Tips Icon"
                className="mx-auto mb-4"
              />
              <h4 className="font-semibold text-lg mb-2 text-[#0C3E83]">
                Expert Tips
              </h4>
              <p>Proven affiliate strategies that work in 2025.</p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg shadow">
              <img
                src={icon2}
                width={"30px"}
                alt="Reviews Icon"
                className="mx-auto mb-4"
              />
              <h4 className="font-semibold text-lg mb-2 text-[#0C3E83]">
                Product Reviews
              </h4>
              <p>Honest reviews to help you promote top-converting products.</p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg shadow">
              <img
                src={icon3}
                width={"30px"}
                alt="Resources Icon"
                className="mx-auto mb-4"
              />
              <h4 className="font-semibold text-lg mb-2 text-[#0C3E83]">
                Freebies & Tools
              </h4>
              <p>
                Downloadable templates, checklists, and guides to save time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content 1: Comparing Impact */}
      <section className="px-6 py-16 bg-[#e7f8f4]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0C3E83] text-center">
            Comparing Impact With Other Affiliate Programs
          </h3>
          <div className="space-y-6 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-bold text-[#0C3E83] mb-2">
                🔹 Impact Affiliate Program
              </h4>
              <p>
                Impact is known for its advanced tracking and analytics. Unlike
                many traditional networks, Impact offers real-time reporting,
                cross-device tracking, and multi-touch attribution. It also
                gives brands and affiliates flexible commission structures,
                strong fraud protection, and global reach.
              </p>
              <p className="mt-1 font-medium">
                Best for: Affiliates and brands looking for precision, control,
                and scalability.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#0C3E83] mb-2">
                🔹 CJ Affiliate (Commission Junction)
              </h4>
              <p>
                One of the oldest and most trusted networks, CJ connects
                affiliates with a huge variety of big-name brands. While not as
                modern or flexible as Impact, it shines in size and reliability.
              </p>
              <p className="mt-1 font-medium">
                Best for: Affiliates who want established brands and proven
                stability.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#0C3E83] mb-2">
                🔹 ShareASale / PartnerStack
              </h4>
              <p>
                ShareASale has thousands of small and medium-sized merchants,
                great for niche opportunities. PartnerStack focuses on SaaS and
                B2B products, often with recurring commissions. Simpler
                platforms, easy onboarding.
              </p>
              <p className="mt-1 font-medium">
                Best for: Beginners, niche affiliates, or SaaS-focused
                marketers.
              </p>
            </div>

            <div className="mt-6">
              <p className="font-medium text-[#0C3E83]">✅ Final Thoughts:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>If you want cutting-edge technology → Choose Impact.</li>
                <li>If you want stability and big brands → Choose CJ.</li>
                <li>
                  If you want simplicity or SaaS/niche offers → Choose
                  ShareASale/PartnerStack.
                </li>
              </ul>
              <p className="mt-4 font-semibold">
                👉 Bottom line: Impact gives you the strategic edge if you’re
                serious about scaling and maximizing earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content 2: Trends */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0C3E83] text-center">
            ✨ 5 Trends That Will Shape Affiliate Marketing in the Next 3 Years
          </h3>
          <div className="space-y-6 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-bold text-[#0C3E83]">
                🔹 1. AI-Driven Personalization
              </h4>
              <p>
                AI will power smarter recommendations, content, and chatbots—
                helping affiliates connect the right product with the right
                customer at the perfect time.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#0C3E83]">
                🔹 2. Influencer + Affiliate Hybrid Models
              </h4>
              <p>
                Brands reward influencers with affiliate commissions, blending
                reach with sales. Affiliates who build communities will thrive.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#0C3E83]">
                🔹 3. Short-Form Video Domination
              </h4>
              <p>
                TikTok, YouTube Shorts, and Reels are leading affiliate traffic.
                Quick, engaging videos will be top drivers of clicks and
                conversions.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#0C3E83]">
                🔹 4. Web3 and Blockchain Tracking
              </h4>
              <p>
                With cookies fading, blockchain offers secure, transparent
                tracking—more accuracy, less fraud.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#0C3E83]">
                🔹 5. Multi-Channel Strategies
              </h4>
              <p>
                The future isn’t one platform—it’s many. Winning affiliates will
                combine blogs, video, email, and social media to maximize reach.
              </p>
            </div>

            <p className="mt-6 font-semibold text-[#0C3E83] text-center">
              🚀 Stay adaptable, embrace new tools, and the next wave of
              affiliate marketing will turn your hustle into real growth.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="px-6 py-16 bg-[#e7f8f4] text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-[#0C3E83]">
          Our Impact So Far
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { metric: "15K+", label: "Monthly Readers" },
            { metric: "120+", label: "Affiliate Tools Reviewed" },
            { metric: "3K+", label: "Freebies Downloaded" },
            { metric: "8K+", label: "Newsletter Subscribers" },
          ].map(({ metric, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-[#0C3E83]">{metric}</p>
              <p className="text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-[#0C3E83]">
          What You Can Do Here
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Read Blog Articles", path: "/blog" },
            { title: "Explore Resources", path: "/resources" },
            { title: "Download Freebies", path: "/freebies" },
            { title: "Subscribe to Newsletter", path: "/contact" },
            { title: "Watch Tutorials", path: "/blog" },
            { title: "Shop Digital Products", path: "/shop" },
          ].map(({ title, path }) => (
            <Link
              to={path}
              key={title}
              className="bg-[#f5f5f5] hover:bg-[#e7f8f4] p-6 rounded-lg shadow block"
            >
              <p className="font-semibold text-lg text-[#0C3E83]">{title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 bg-[#0C3E83] text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Start Earning Online?
        </h3>
        <p className="mb-6 max-w-xl mx-auto">
          Join thousands of others who are building successful affiliate
          marketing businesses. Let’s grow together.
        </p>
        <Link
          to="/resources"
          className="px-6 py-3 bg-white text-[#0C3E83] font-semibold rounded-full hover:bg-[#e7f8f4]"
        >
          Explore Resources
        </Link>
      </section>
    </main>
  );
}
