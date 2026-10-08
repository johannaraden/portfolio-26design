import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ZoomableImage } from "@/components/zoomable-image";
import { size } from "@/content/images";
import { caseStudies, getCaseStudy } from "@/content/work";
import { cn } from "@/lib/cn";

const container = "mx-auto max-w-6xl px-5 sm:px-8";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const cs = getCaseStudy((await params).slug);
  if (!cs) return {};
  return {
    title: cs.title,
    openGraph: { images: [{ url: cs.cover }] },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="reveal grid gap-6 border-t border-line pt-6 md:grid-cols-12">
      <h2 className="text-sm tracking-[0.18em] text-ink-2 uppercase md:col-span-3">{label}</h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const index = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

        console.log("versioner!!", cs.screens)


  return (
    <article>
      {/* Header */}
      <header className={cn(container, "pt-12 pb-16 sm:pt-16")}>
        <Link href="/#work" className="text-sm text-ink-2 underline-offset-4 hover:text-ink hover:underline">
          ← All work
        </Link>
        <p className="mt-10 text-sm tracking-[0.18em] text-ink-2 uppercase">
          {cs.client}
        </p>
        <h1 className="mt-4 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] tracking-tight">
          {cs.title}
        </h1>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="My role">
          {cs.role.map((r) => (
            <li key={r} className="rounded-full border border-line px-3 py-1 text-sm">
              {r}
            </li>
          ))}
        </ul>
      </header>

      {/* Hero visual */}
      <div className={container}>
        <div className="flex items-end justify-center overflow-hidden rounded-3xl pt-12 sm:pt-16">
          <Image
            src={cs.cover}
            alt={`${cs.title} — final design`}
            {...size(cs.cover)}
            priority
            sizes="(min-width: 1152px) 1100px, 100vw"
            className={cn(
              size(cs.cover).height > size(cs.cover).width
                ? "-mb-24 h-auto w-1/2 max-w-xs drop-shadow-2xl sm:w-1/3"
                : "w-[88%] rounded-t-xl shadow-2xl",
            )}
          />
        </div>
      </div>

      <div className={cn(container, "space-y-24 py-24")}>
        <Block label="Challenge">
          <p className="text-xl leading-relaxed sm:text-2xl">{cs.challenge}</p>
        </Block>

        <Block label="Approach">
          <p className="text-xl leading-relaxed sm:text-2xl">{cs.approach}</p>
        </Block>

        <Block label="Personas">
          <p className="mb-6 text-ink-2">Select a persona to enlarge.</p>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {cs.personas.map((p) => (
              <figure key={p.name}>
                <ZoomableImage
                  src={p.image}
                  alt={`Persona: ${p.name}`}
                  {...size(p.image)}
                  sizes="(min-width: 768px) 35vw, 50vw"
                  className="rounded-2xl border border-line bg-white"
                />
                <figcaption className="mt-2 text-sm text-ink-2">{p.name}</figcaption>
              </figure>
            ))}
          </div>
        </Block>

        {cs.journeyEmbed && (
          <Block label="User journey">
            <div className="aspect-video overflow-hidden rounded-2xl border border-line bg-paper-2">
              <iframe
                title={`${cs.title} user journey (Figma)`}
                src={cs.journeyEmbed}
                loading="lazy"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </Block>
        )}

        <Block label="Wireframe → design">
          <div className="space-y-20">
            {cs.screens.map((s) => {
              const hasDesign = (screen: typeof s): screen is Extract<typeof s, { design: string }> => {
                return typeof screen.design === "string";
              };

              const variants: [string, string][] = [
                ["Wireframe", s.wireframe],
                ["Design2020", s.prototype],
                ...(hasDesign(s) ? [["Design2026", s.design] as [string, string]] : []),
              ];

              return (
                <div key={s.title} className="reveal">
                  <h3 className="font-display text-3xl sm:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">{s.text}</p>
                  <div
                    className={cn(
                      "mt-8 grid gap-4 sm:gap-6",
                      s.format === "phone" ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 md:grid-cols-3",
                    )}
                  >
                    {variants.map(([label, src]) => (
                      <figure key={`${s.title}-${label}`} className="flex h-full flex-col">
                        <div className="flex h-[260px] items-center justify-center overflow-hidden rounded-xl sm:h-[300px] md:h-[340px]">
                          <ZoomableImage
                            src={src}
                            alt={`${cs.title} ${s.title} — ${label.toLowerCase()}`}
                            {...size(src)}
                            sizes="(min-width: 768px) 33vw, 100vw"
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </figure>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Block>

        {cs.motion && (
          <Block label="In motion">
            <Image
              src={cs.motion}
              alt={`${cs.title} interaction prototype`}
              {...size(cs.motion)}
              className="h-auto w-full max-w-md rounded-2xl"
            />
          </Block>
        )}

        <Block label="Outcome">
          <div className={cn(cs.outcome.placeholder && "placeholder p-4")}>
            <p className="text-xl leading-relaxed sm:text-2xl">{cs.outcome.text}</p>
            {cs.outcome.points && (
              <ol className="mt-6 space-y-3">
                {cs.outcome.points.map((pt, i) => (
                  <li key={pt} className="flex gap-4 text-lg">
                    <span className="font-display text-2xl text-accent">{i + 1}</span>
                    {pt}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </Block>
      </div>

      {/* Next */}
      {next && next.slug !== cs.slug && (
        <Link
          href={`/work/${next.slug}/`}
          className="group block border-t border-line"
          style={{ backgroundColor: next.accent }}
        >
          <div className={cn(container, "py-20 text-[#16140f]")}>
            <p className="text-sm tracking-[0.18em] uppercase opacity-70">Next case study</p>
            <p className="mt-3 font-display text-5xl sm:text-7xl">
              {next.title} <span aria-hidden className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </p>
          </div>
        </Link>
      )}
    </article>
  );
}
