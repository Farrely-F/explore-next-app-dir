import SlidesContainer from "@/components/layouts/SlidesContainer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="lg:p-8 p-4">
        <SlidesContainer>{children}</SlidesContainer>
      </section>
    </>
  );
}
