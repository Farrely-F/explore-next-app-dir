import { Suspense } from "react";

export default function Layout({
  children,
  admin,
  user,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  admin: React.ReactNode;
}) {
  return (
    <section className="min-h-[700px] py-24 px-8 space-y-4">
      <div className="flex w-full items-stretch gap-4">
        <Suspense fallback="Loading...">{admin}</Suspense>
        <Suspense fallback="Loading...">{user}</Suspense>
      </div>
      {children}
    </section>
  );
}
