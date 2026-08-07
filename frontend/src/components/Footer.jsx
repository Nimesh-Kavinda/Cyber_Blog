function Footer() {
  return (
    <>
      <section id="about" className="border-b border-[#2F2F2F] bg-[#050505]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-[#2F2F2F] bg-[#111111] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ff5c5c]">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                A focused space for steady cybersecurity growth.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#9CA3AF]">
                This blog is built to keep the learning process visible,
                organized, and easy to maintain. It is a personal archive for
                notes, experiments, and practical cybersecurity knowledge.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#2F2F2F] bg-[#1A1A1A] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ff5c5c]">
                Goal
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                Current Goal
              </h3>
              <p className="mt-4 text-base leading-8 text-[#9CA3AF]">
                Become a professional Cybersecurity Engineer by documenting my
                daily learning journey and continuously improving my skills
                through consistent learning and practical projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[#9CA3AF] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="space-y-1">
            {/* Update this name everywhere you want the footer branding to match your real identity. */}
            <div className="font-semibold text-white">Nimesh Kavinda</div>
            <div>Cybersecurity Learning Journey</div>
          </div>

          <div className="flex flex-wrap gap-5">
            {/* Update these links to point to your actual GitHub and LinkedIn profiles. */}
            <a
              href="https://github.com/nimesh-kavinda"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-[#ff5c5c]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nimesh-kavinda-karunasinghe"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-[#ff5c5c]"
            >
              LinkedIn
            </a>
          </div>

          <div>
            Copyright © 2026 Nimesh Kavinda Karunasinghe. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
