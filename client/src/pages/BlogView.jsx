import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts"; 

export default function BlogView() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#0C3E83] mb-4">Post not found</h2>
        <Link to="/blog" className="text-[#032B52] underline">
          Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0C3E83] mb-6">
        {post.title}
      </h1>
      <div
        className="prose prose-base text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Link
        to="/blog"
        className="inline-block mt-8 text-[#032B52] hover:underline"
      >
        ← Back to Blog
      </Link>
    </section>
  );
}
