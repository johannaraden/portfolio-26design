import { site } from "@/content/site";

const links = [
  { href: `mailto:${site.email}`, label: site.email },
  { href: site.linkedin, label: "LinkedIn" },
  { href: site.github, label: "GitHub" },
  { href: site.medium, label: "Medium" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#16140f] text-[#f4f0e8]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm tracking-[0.18em] text-[#f4f0e8]/60 uppercase">Contact</p>
        <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] sm:text-7xl">
          Want to collaborate? <em className="text-[#ff7a50]">Let’s talk.</em>
        </h2>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#ff7a50] px-6 py-3 font-medium text-[#16140f] transition-transform hover:-translate-y-0.5"
        >
          Email me <span aria-hidden>→</span>
        </a>
        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#f4f0e8]/15 pt-8 text-sm text-[#f4f0e8]/70">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="underline-offset-4 hover:text-[#f4f0e8] hover:underline"
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="sm:ml-auto">© {site.name}</li>
        </ul>
      </div>
    </footer>
  );
}
