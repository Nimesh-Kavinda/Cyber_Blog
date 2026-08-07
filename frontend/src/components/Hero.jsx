// Update this image when you replace the profile portrait in src/assets/profile/.
const heroImage = new URL('../assets/profile/profile.jpg', import.meta.url)
  .href;

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/your-username',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/your-username',
  },
];

// Update these social URLs with your real profiles.

function Hero() {
  return (
    <section id="home" className="border-b border-[#2F2F2F] bg-black">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[28px] border border-[#2F2F2F] bg-[#111111] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1 sm:max-w-md lg:mx-0">
            <div className="overflow-hidden rounded-[22px] border border-[#2F2F2F] bg-[#1A1A1A]">
              <img
                src={heroImage}
                alt="Profile portrait for the cybersecurity learning journey"
                className="h-[420px] w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#2F2F2F] bg-[#0f0f0f] px-4 py-3 text-xs uppercase tracking-[0.24em] text-[#9CA3AF]">
              <span>Self-learning</span>
              <span>Daily notes</span>
            </div>
          </div>
        </div>

        <div className="order-1 space-y-8 lg:order-2 lg:pl-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#2F2F2F] bg-[#111111] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#9CA3AF]">
            <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
            Cybersecurity Learning Log
          </div>

          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Cybersecurity Learning Journey
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[#9CA3AF] sm:text-lg">
              I am documenting my self-learning journey into Cybersecurity,
              sharing everything I learn—from beginner fundamentals to advanced
              concepts. This blog serves as both my personal knowledge base and
              a record of my continuous growth.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#journey"
              className="inline-flex items-center justify-center rounded-full bg-[#DC2626] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#ef4444] hover:shadow-[0_14px_30px_rgba(220,38,38,0.25)]"
            >
              Read My Journey
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#2F2F2F] bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-[#DC2626] hover:text-[#ff5c5c]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['Beginner-friendly', 'Structured notes'],
              ['Hands-on', 'Practical learning'],
              ['Always growing', 'Continuous updates'],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#2F2F2F] bg-[#111111] p-4"
              >
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="mt-1 text-sm text-[#9CA3AF]">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
