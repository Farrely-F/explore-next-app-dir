import SlidesLayout from "@/components/layouts/SlidesLayout";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <SlidesLayout
        title="Caching Mechanism"
        href="https://nextjs.org/docs/app/building-your-application/caching"
      >
        <p>
          Next.js improves your application{"'"}s performance and reduces costs
          by caching rendering work and data requests.
        </p>
        <h2> Request Memoization</h2>
        <p>
          React extends the fetch API to automatically memoize requests that
          have the same URL and options. This means you can call a fetch
          function for the same data in multiple places in a React component
          tree while only executing it once.
        </p>
        <Image
          src={
            "https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fdeduplicated-fetch-requests.png&w=3840&q=75"
          }
          alt="Request Memoization"
          width={512}
          height={512}
          className="w-full h-auto rounded-xl"
        />
      </SlidesLayout>
    </>
  );
}
