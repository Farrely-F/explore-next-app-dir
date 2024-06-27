export default function Page() {
  return (
    <>
      <section className="space-y-4 p-4">
        <h1>
          About NEXT<span className="text-xs">Js</span>{" "}
          <span className="bg-black p-2 border rounded-xl">14</span>
        </h1>
        <p>
          A popular React framework for building web applications Created by
          Vercel, first released in 2016
        </p>
        <ul className="space-y-2 list-disc list-inside *:pl-2">
          Key features:
          <li>Server-side rendering (SSR)</li>
          <li>Static site generation (SSG)</li>
          <li> Automatic code splitting</li>
          <li>Built-in CSS support</li>
          <li>API routes</li>
        </ul>
        <p>Widely adopted by companies like Netflix, Twitch, and Uber</p>
        <h2>The significance of the App Router in Next.js 14</h2>
        <p>
          Introduced in Next.js 13, stable in version 14 Represents a paradigm
          shift in how Next.js applications are structured and built Addresses
          limitations of the previous Pages Router Aligns with React{"'"}s
          latest features and best practices Enables more intuitive and powerful
          application architectures
        </p>
        <h2>What is APP Directory?</h2>
        <p>
          The App Directory: A new organizational structure for Next.js
          applications Located at the root of your project as the app folder
          Implements the new App Router, replacing the Pages Router Purpose: To
          provide a more intuitive and powerful way to build complex
          applications
        </p>
        <h2>Comparison with the old Pages Router</h2>
        <div className="flex flex-col lg:flex-row gap-2">
          <div>
            <p>Pages Router:</p>
            <p>
              Uses a pages directory Each file automatically becomes a route
              Limited nested routing capabilities Mixing of concerns (routing,
              layouts, data fetching)
            </p>
          </div>
          <div>
            <p> App Router: </p>
            <p>
              Uses an app directory More flexible and hierarchical routing
              Better separation of concerns Enhanced support for layouts and
              nested routes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
