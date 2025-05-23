export default function About() {
  return (
    <section className="bg-[#faf4f0] min-h-screen px-6 py-16 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#5bb3a3] mb-4">
          Our Story
        </h2>
        <p className="text-lg text-gray-600">
          AIN ZONE was born from a passion for empowering everyday people to
          earn online through trusted strategies and authentic tools. We’re here
          to help you navigate affiliate marketing — without the fluff.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Affiliate work"
          className="rounded-xl w-[100%] h-[400px] h-md-[350px] shadow-md object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold text-[#5bb3a3] mb-4">
            Why We Exist
          </h3>
          <p className="text-gray-700 mb-4">
            We know how overwhelming the affiliate space can feel. That’s why we
            focus on clarity, transparency, and results. Whether you're a
            beginner or scaling your business, our tips, tools, and resources
            are tailored to help you thrive.
          </p>
          <p className="text-gray-700">
            We're not just about money — it’s about freedom, creativity,
            and making informed decisions in the digital world.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h4 className="text-2xl font-semibold text-[#5bb3a3] mb-4">
          What You’ll Find Here
        </h4>
        <ul className="text-gray-700 text-left  space-y-2">
          <li>. Actionable blog content on affiliate strategies</li>
          <li>. Handpicked product recommendations</li>
          <li>. Freebies to boost your toolkit</li>
          <li>. Premium resources and templates</li>
        </ul>
      </div>
    </section>
  );
}
