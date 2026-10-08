import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { size } from "@/content/images";
import {
  articles,
  codeProjects,
  hero,
  site,
  skills,
} from "@/content/site";
import { caseStudies } from "@/content/work";
import { cn } from "@/lib/cn";

const container = "mx-auto max-w-6xl px-5 sm:px-8";

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={cn(container, "grid items-end gap-12 pt-14 pb-24 sm:pt-20 md:grid-cols-12 md:pb-32")}>
        <div className="md:col-span-8">
          <p className="text-sm tracking-[0.18em] text-ink-2 uppercase">{hero.eyebrow}</p>
          <h1 className="mt-6 font-display text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.9] tracking-tight">
            {hero.headline[0]}
            <br />
            <em className="text-accent">{hero.headline[1]}</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl">{hero.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#work"
              className="rounded-full bg-ink px-6 py-3 font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              See selected work
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-ink/25 px-6 py-3 font-medium transition-colors hover:border-ink"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-56 sm:w-64 md:col-span-4 md:w-full">
          <div aria-hidden className="absolute -inset-3 translate-x-4 translate-y-4 rounded-[2rem] bg-accent" />
          <Image
            src="/img/profile.webp"
            alt={`Portrait of ${site.name}`}
            {...size("/img/profile.webp")}
            priority
            sizes="(min-width: 768px) 30vw, 16rem"
            className="relative aspect-[4/5] rounded-[2rem] object-cover grayscale-[15%]"
          />
        </div>
      </section>

      {/* ---------- 01 Selected work ---------- */}
      <section aria-labelledby="work-title" id="work" className={cn(container, "pb-28")}>
        <SectionHeading
          id="work-title"
          index="01"
          label="Selected work"
          title={<>From brief to <em>finished experience.</em></>}
          intro="Case studies where I owned the message, the visual direction and the user experience."
        />
        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <li key={cs.slug} className="reveal">
              <Link href={`/work/${cs.slug}/`} className="group block">
                <div
                  className="relative flex aspect-[4/3] items-end justify-center overflow-hidden rounded-3xl"
                  style={{ backgroundColor: cs.accent }}
                >
                  <Image
                    src={cs.cover}
                    alt=""
                    {...size(cs.cover)}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={cn(
                      "transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]",
                      size(cs.cover).height > size(cs.cover).width
                        ? "h-[88%] w-auto translate-y-[18%] drop-shadow-2xl"
                        : "w-[88%] translate-y-[6%] rounded-t-xl shadow-2xl",
                    )}
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl sm:text-4xl">{cs.title}</h3>
                </div>
                <p className="mt-3 text-sm text-ink-2">{cs.role.join(" · ")}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 group-hover:underline">
                  Read case study <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- 02 Skills ---------- */}
      <section aria-labelledby="skills-title" id="skills" className={cn(container, "pb-28")}>
        <SectionHeading
          id="skills-title"
          index="02"
          label="Skills"
          title={<>Languages, code <em>and pixels.</em></>}
          intro="I found my way into design and code through communication. After years of working as a communicator as well as teaching, I combine an ear for language with a sense for visuals — and some code to build what I envision."
        />
        <div className="mt-14 flex justify-center">
          <dl className="grid w-full max-w-5xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.title} className={cn("reveal", group.placeholder && "placeholder")}>
                <dt className="border-b border-line pb-3 text-sm tracking-[0.18em] text-ink-2 uppercase">
                  {group.title}
                </dt>
                {group.items.map((item) => (
                  <dd key={item} className="border-b border-line/60 py-2.5">
                    {item}
                  </dd>
                ))}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- 03 Writing ---------- */}
      <section aria-labelledby="writing-title" className="bg-paper-2 py-28">
        <div className={container}>
          <SectionHeading
            id="writing-title"
            index="03"
            label="Writing"
            title={<>On code <em>as communication.</em></>}
          />
          <ul className="mt-14 divide-y divide-line border-y border-line">
            {articles.map((a) => (
              <li key={a.href} className="reveal">
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-8"
                >
                  <h3 className="font-display text-3xl group-hover:text-accent md:col-span-5">
                    {a.title}
                  </h3>
                  <p className="text-ink-2 md:col-span-6">{a.summary}</p>
                  <span aria-hidden className="hidden text-right text-xl transition-transform group-hover:translate-x-1 md:col-span-1 md:block">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- 04 Build ---------- */}
      <section aria-labelledby="build-title" className={cn(container, "py-28")}>
        <SectionHeading
          id="build-title"
          index="04"
          label="Build"
          title={<>I also <em>write the code.</em></>}
          intro="Earlier front-end projects from my developer training."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {codeProjects.map((p) => (
            <li key={p.title} className="reveal flex flex-col overflow-hidden rounded-2xl border border-line">
              <Image
                src={p.image}
                alt={`Screenshot of ${p.title}`}
                {...size(p.image)}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[16/9] w-full border-b border-line bg-white object-cover object-top"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 flex-1 text-sm text-ink-2">{p.summary}</p>
                <p className="mt-4 text-xs text-ink-2">{p.stack.join(" · ")}</p>
                <div className="mt-4 flex gap-4 text-sm font-medium">
                  <a href={p.live} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                    Live ↗
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                    Code ↗
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
