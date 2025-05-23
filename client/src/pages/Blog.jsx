export default function Blog() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#5bb3a3] mb-10 text-center">Latest Blog Posts</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Blog post cards would be dynamically rendered here */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#5bb3a3] mb-2">How to Choose the Right Affiliate Program</h3>
          <p className="text-gray-700 text-sm mb-4">Not all affiliate programs are created equal. Learn how to evaluate and pick ones that align with your brand and audience.</p>
          <button className="text-sm text-[#5bb3a3] hover:underline">Read more</button>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#5bb3a3] mb-2">Top 5 Tools Every Affiliate Marketer Should Use</h3>
          <p className="text-gray-700 text-sm mb-4">The right tools can make or break your affiliate marketing success. Here are our top recommendations.</p>
          <button className="text-sm text-[#5bb3a3] hover:underline">Read more</button>
        </div>
      </div>
    </section>
  );
}