import BlogCard from './BlogCard.jsx';
import { blogPosts } from '../data/blogPosts.js';

function BlogSection() {
  return (
    <section id="journey" className="border-b border-[#2F2F2F] bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ff5c5c]">
            Learning Journey
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Learning Journey
          </h2>
          <p className="text-base leading-8 text-[#9CA3AF]">
            A simple, reusable feed for documenting each step of the journey.
            Add a new image and a new post object to extend the archive.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
