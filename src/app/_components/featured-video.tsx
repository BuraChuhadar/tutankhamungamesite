export function FeaturedVideo() {
  return (
    <section className="mt-20 mb-16 lg:mt-24 lg:mb-24">
      <div className="relative overflow-hidden rounded-3xl border border-[#d4c1a5]/40 bg-gradient-to-br from-[#fff3df] via-[#f6e4c5] to-[#f1d9ab] px-5 py-8 shadow-[0_30px_80px_-40px_rgba(36,20,1,0.65)] transition-colors dark:border-[#a0762f]/30 dark:from-[#181008] dark:via-[#1e1409] dark:to-[#27180a] sm:px-8 sm:py-12">
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <div className="absolute -left-24 -top-24 size-56 rounded-full bg-[#d8b178]/40 blur-3xl dark:bg-[#c2881b]/30" />
          <div className="absolute -bottom-32 right-0 size-72 rounded-full bg-[#c2881b]/30 blur-3xl dark:bg-[#f8d9a1]/10" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="flex flex-col gap-4 rounded-2xl bg-[#fffaf1]/85 p-5 text-[#1f1406] shadow-[0_10px_30px_-22px_rgba(0,0,0,0.45)] backdrop-blur-sm dark:bg-[#1d1106]/70 dark:text-[#f8e7cd] lg:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9c6c1f] dark:text-[#dfb46a]">
              First Look
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Watch the Intro Movie in Motion
            </h2>
            <p className="text-base leading-relaxed text-[#311f0b] dark:text-[#f3dcb7]">
              Step into the opening cinematic for{" "}
              <em>Tutankhamun: Builders of the Eternal</em>. This
              work-in-progress cut showcases our latest lighting pass, character
              staging, and engineering works tying the whole city together.
            </p>
            <p className="text-base leading-relaxed text-[#2c1c09] dark:text-[#f7e5c9]">
              The game invites you to build, balance, and defend an ancient
              Egyptian dynasty. Every district you plan, from temples to
              engineering hubs, shapes the prosperity and resilience of your
              citizens along the Nile.
            </p>
            <ul className="space-y-2 text-sm font-medium text-[#3a240d] dark:text-[#f5e9d6]/90">
              <li className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-[#c2881b] dark:bg-[#f1c27d]" />
                Official Intro Movie
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-[#c2881b] dark:bg-[#f1c27d]" />
                Steam Store page is now live
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-[#c2881b] dark:bg-[#f1c27d]" />
                Wishlist now for Early Access updates
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -m-6 rounded-[28px] bg-gradient-to-tr from-[#fdf5e4] via-transparent to-transparent opacity-60 blur-2xl dark:from-[#2a1d0d]" />
            <div className="relative overflow-hidden rounded-2xl border border-[#e8d5b6]/50 bg-[#0e0700] shadow-[0_25px_60px_-40px_rgba(0,0,0,0.8)] dark:border-[#5e4115]/60">
              <div className="aspect-video">
                <iframe
                  src="https://player.mux.com/ST01ugOPlgJSwf1TEhMh6RCon00301GYizh00I00op8K1AyE?metadata-video-title=Intro+Movie&video-title=Intro+Movie"
                  className="size-full"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="Intro Movie"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
