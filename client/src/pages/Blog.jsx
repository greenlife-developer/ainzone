import { Link } from "react-router-dom";
import { posts } from "../data/posts"; 

export default function Blog() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0C3E83] mb-10 text-center">
        Latest Blog Posts
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#0C3E83] mb-2">
              {post.title}
            </h3>
            <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.id}`}
              className="text-sm text-[#032B52] hover:underline"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
