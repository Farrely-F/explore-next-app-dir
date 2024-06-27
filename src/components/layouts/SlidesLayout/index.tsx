import { BiLinkExternal } from "react-icons/bi";

export default function SlidesLayout({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <>
      <section>
        <a
          href={href}
          className="w-full bg-black/10 backdrop-blur-sm p-4 sticky top-0 flex items-center gap-2 text-white"
        >
          <h2>{title}</h2>
          <BiLinkExternal />
        </a>
        <div className="space-y-8 p-4 pb-16">{children}</div>
      </section>
    </>
  );
}
