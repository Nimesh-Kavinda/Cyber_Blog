function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#2F2F2F] bg-[#1A1A1A] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DC2626] hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden">
          <img
            src={post.image}
            alt={post.day}
            className="h-full min-h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-full border border-[#DC2626] bg-black/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff6b6b]">
            {post.day}
          </div>
        </div>

        <div className="flex items-center p-6 sm:p-8">
          <p className="text-base leading-8 text-[#9CA3AF] sm:text-lg whitespace-break-spaces">
            {post.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
