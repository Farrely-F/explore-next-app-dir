export function LearningCard({
  title,
  icons,
}: {
  title: string;
  icons: JSX.Element;
}) {
  return (
    <div className="group size-32 p-4 bg-white/5 backdrop-blur-[2px] hover:border border-white/10 rounded-2xl text-center grid justify-center place-items-center">
      {icons}
      <p className="text-xs">{title}</p>
    </div>
  );
}
