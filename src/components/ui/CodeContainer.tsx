export default function CodeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <pre className="p-4 bg-neutral-900/20 w-full rounded-xl overflow-auto">
        <code>{children}</code>
      </pre>
    </>
  );
}
