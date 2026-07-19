import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 id={id} className="font-display text-3xl font-semibold text-purple-deep sm:text-4xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
};

export function Section({ id, children, className = "", ariaLabelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`scroll-mt-24 py-16 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
