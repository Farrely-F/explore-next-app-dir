import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import TextRevealByWord from "@/components/magicui/text-reveal";
import WordRotate from "@/components/magicui/word-rotate";
import { LearningCard } from "@/components/ui/Card";
import { learn } from "@/constants/learn";

export default function Home() {
  return (
    <main className="px-4 md:px-8 py-16">
      <div className="flex flex-col w-full">
        <section id="title" className="space-y-4 text-center">
          <h1>
            Explore NEXT<span className="text-xs">Js</span>{" "}
            <span className="bg-black p-2 border rounded-xl">14</span> APP
            Directory
          </h1>
          <p>a brief and short introduction about NEXTjs 14</p>
        </section>
        <section
          id="content"
          className="lg:py-16 lg:flex w-fit mx-auto space-y-8"
        >
          <div className="space-y-4 w-full lg:max-w-sm text-center lg:text-start">
            <h2>We Will Learn: </h2>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {learn.slice(0, 4).map((item) => (
                <LearningCard
                  key={item.id}
                  title={item.name}
                  icons={<item.icon size={32} />}
                />
              ))}
            </div>
            <p>and so on ...</p>
          </div>
          <div className="self-start w-full max-w-sm space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 min-h-[80px]">
              <p className="text-2xl text-balance">Create Apps that</p>
              <WordRotate
                words={["Scale", "Fast", "Reliable", "Enjoyable"]}
                className="text-4xl"
              />
            </div>
            <p>Experience the power of Next 14 and APP directory</p>
            <blockquote>
              <em>
                {`" For performance, efficiency and developer experience.
Next.js is trusted by some of the biggest names on the web. "`}
              </em>
            </blockquote>
          </div>
        </section>
        <section>
          <TextRevealByWord text="APP Router Will Change The Way You Build Applications" />
        </section>
        <section>
          <div className="w-full max-w-fit mx-auto min-h-[700px] flex items-center">
            <NeonGradientCard>
              <p className="font-bold text-2xl">
                Ready to Learn?, Lets Deep Dive into NEXT 14! 🚀
              </p>
            </NeonGradientCard>
          </div>
        </section>
      </div>
    </main>
  );
}
