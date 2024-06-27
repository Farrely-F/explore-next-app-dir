type Chip = {
  variant: "static" | "dynamic";
  children: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export default function Chip({ variant, children }: Readonly<Chip>) {
  const variants =
    variant === "static"
      ? `from-blue-200 to-blue-300 text-white`
      : `from-violet-200 to-violet-500 text-white`;

  return (
    <span
      className={`inline-block px-4 py-1 rounded-full text-sm bg-gradient-to-r ${variants}`}
    >
      {children}
    </span>
  );
}
