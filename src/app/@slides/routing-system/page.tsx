import SlidesLayout from "@/components/layouts/SlidesLayout";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <SlidesLayout
        title="Routing System"
        href="https://nextjs.org/docs/app/building-your-application/routing"
      >
        <p>
          In version 13, Next.js introduced a new App Router built on React
          Server Components, which supports shared layouts, nested routing,
          loading states, error handling, and more. The App Router works in a
          new directory named app. The app directory works alongside the pages
          directory to allow for incremental adoption. This allows you to opt
          some routes of your application into the new behavior while keeping
          other routes in the pages directory for previous behavior. If your
          application uses the pages directory, please also see the Pages Router
          documentation.
        </p>
        <pre className="p-4 bg-neutral-900 w-full max-w-sm rounded-xl">
          <code>
            {`app/
├── layout.js
├── page.js
├── global.css
├── (routes)/
│   ├── about/
│   │   └── page.js
│   └── blog/
│       ├── layout.js
│       ├── page.js
│       └── [slug]/
│           └── page.js
└── api/
    └── route.js
`}
          </code>
        </pre>
        <h2>File Conventions </h2>
        <ul className="space-y-2 list-disc list-inside *:pl-2">
          Next.js provides a set of special files to create UI with specific
          behavior in nested routes:
          <li>layout: Shared UI for a segment and its children</li>
          <li>
            page: Unique UI of a route and make routes publicly accessible
          </li>
          <li>loading: Loading UI for a segment and its children</li>
          <li>not-found: Not found UI for a segment and its children</li>
          <li>error: Error UI for a segment and its children </li>
          <li>global-error: Global Error UI route Server-side API endpoint</li>
          <li>template: Specialized re-rendered Layout UI</li>
          <li>default: Fallback UI for Parallel Routes</li>
        </ul>
        <h2>Colocation</h2>
        <Image
          src={
            "https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-colocation.png&w=3840&q=75"
          }
          alt="Colocation"
          width={512}
          height={512}
          className="w-full h-auto rounded-xl"
        />
        <h2>Advanced Routing Patterns</h2>
        <ul className="space-y-2 list-disc list-inside *:pl-2">
          The App Router also provides a set of conventions to help you
          implement more advanced routing patterns. These include:
          <li>
            Parallel Routes: Allow you to simultaneously show two or more pages
            in the same view that can be navigated independently. You can use
            them for split views that have their own sub-navigation. E.g.
            Dashboards.
          </li>
          <li>
            Intercepting Routes: Allow you to intercept a route and show it in
            the context of another route. You can use these when keeping the
            context for the current page is important. E.g. Seeing all tasks
            while editing one task or expanding a photo in a feed.
          </li>
        </ul>
        <div className="flex gap-2 flex-wrap">
          <a
            href="/paralel-routes"
            className="inline-block p-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl text-white font-bold"
          >
            Paralel Routes
          </a>
          <a
            href="/intercepting-routes"
            className="inline-block p-2 bg-gradient-to-l from-pink-500 to-violet-500 rounded-xl text-white font-bold"
          >
            Intercepting Routes
          </a>
        </div>
      </SlidesLayout>
    </>
  );
}
