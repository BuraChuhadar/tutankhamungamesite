import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="dev-blog-intro-panel flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8" style={{ color: '#6b4f1d' }}>
        Dev Blog
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8" style={{ color: '#6b4f1d' }}>
        Follow the journey as we build{" "}
        <span style={{ color: '#c2881b', fontWeight: 600 }}>
          Tutankhamun: Builders of the Eternal
        </span>
      </h4>
    </section>
  );
}
