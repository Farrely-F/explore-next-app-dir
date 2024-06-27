import SlidesLayout from "@/components/layouts/SlidesLayout";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <SlidesLayout title="Component System">
        <p>
          By default, components inside app are React Server Components. This is
          a performance optimization and allows you to easily adopt them, and
          you can also use Client Components.
        </p>

        <h2>Component Hierarchy</h2>
        <ul className="space-y-2 list-disc list-inside *:pl-2">
          The React components defined in special files of a route segment are
          rendered in a specific hierarchy:
          <li>layout.js</li>
          <li>template.js</li>
          <li>error.js (React error boundary)</li>
          <li>loading.js (React suspense boundary)</li>
          <li>not-found.js (React error boundary)</li>
          <li>page.js or nested layout.js</li>
        </ul>
        <Image
          src={
            "https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Ffile-conventions-component-hierarchy.png&w=3840&q=75"
          }
          alt="Component Hierarchy"
          width={512}
          height={512}
          className="w-full h-auto rounded-xl"
        />

        <h2>Server Components</h2>
        <ul className="space-y-2 list-disc list-inside *:pl-2">
          React Server Components allow you to write UI that can be rendered and
          optionally cached on the server. In Next.js, the rendering work is
          further split by route segments to enable streaming and partial
          rendering, and there are three different server rendering strategies:
          <li>Static Rendering</li>
          <li>Dynamic Rendering</li>
          <li>Streaming</li>
        </ul>
      </SlidesLayout>
    </>
  );
}
