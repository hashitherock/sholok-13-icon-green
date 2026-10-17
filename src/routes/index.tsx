import { createFileRoute } from "@tanstack/react-router";
import { categoryIconComponents } from "@/components/icons/CategoryIcons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sholok Category Icons — SVG Icon System" },
      { name: "description", content: "13 premium SVG category icons for the Sholok e-commerce website." },
      { property: "og:title", content: "Sholok Category Icons" },
      { property: "og:description", content: "13 premium SVG category icons for the Sholok e-commerce website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Sholok · Icon System</p>
        <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">Shop by Category</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          13 unique SVG icons on a 64 × 64 grid, 2.25 stroke, rounded caps. Click any icon to download its SVG file.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categoryIconComponents.map(({ slug, name, Icon }) => (
            <a key={slug} href={`/icons/${slug}.svg`} download className="icon-card group">
              <span className="icon-tile">
                <Icon size={56} />
              </span>
              <span className="mt-4 text-sm font-semibold">{name}</span>
              <span className="mt-1 text-xs text-muted-foreground">{slug}.svg</span>
            </a>
          ))}
        </div>

        <h2 className="mt-20 font-display text-2xl font-bold">Single colour & sizes</h2>
        <div className="mt-6 flex flex-wrap items-end gap-6 rounded-2xl bg-secondary p-8 text-secondary-foreground">
          {categoryIconComponents.map(({ slug, Icon }) => (
            <Icon key={slug} size={32} className="icon-mono" />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-end gap-6 rounded-2xl bg-primary p-8 text-primary-foreground">
          {categoryIconComponents.map(({ slug, Icon }) => (
            <Icon key={slug} size={24} className="icon-mono" />
          ))}
        </div>
      </section>
    </main>
  );
}
