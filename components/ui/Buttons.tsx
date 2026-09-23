import type { ReactNode } from "react";

export function ContactButton({
  children,
  href = "#contact",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 -outline-offset-[3px] outline-white transition-transform duration-200 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
      }}
    >
      {children}
    </a>
  );
}

export function GhostButton({
  children,
  href,
  download,
  className = "",
}: {
  children: ReactNode;
  href: string;
  download?: boolean;
  className?: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-mist px-8 py-3 text-sm font-medium uppercase tracking-widest text-mist transition-colors duration-200 hover:bg-mist/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      {children}
    </a>
  );
}
