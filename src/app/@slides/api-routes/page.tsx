import SlidesLayout from "@/components/layouts/SlidesLayout";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <SlidesLayout
        title="API Routes"
        href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers"
      >
        <p>
          Route Handlers allow you to create custom request handlers for a given
          route using the Web Request and Response APIs.
        </p>

        <p>
          Good to know: Route Handlers are only available inside the app
          directory. They are the equivalent of API Routes inside the pages
          directory meaning you do not need to use API Routes and Route Handlers
          together.
        </p>

        <div className="space-y-2">
          <p>API Routes in Pages Router:</p>
          <pre className="p-4 bg-neutral-900/20 w-full rounded-xl">
            <p>pages/api/index.ts</p>
            <code>
              {`
import type { NextApiRequest, NextApiResponse } from 'next'
  
type ResponseData = {
  message: string
}
  
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
          `}
            </code>
          </pre>
        </div>

        <div className="space-y-2">
          <p>API Routes in Pages Router:</p>
          <pre className="p-4 bg-neutral-900/20 w-full rounded-xl">
            <p>pages/api/index.ts</p>
            <code>
              {`  
export async function GET(
  req: Request,
) {
  NextResponse.json({ message: 'Hello from Next.js!' })
}
          `}
            </code>
          </pre>
        </div>

        <h2>Caching</h2>
        <p>
          Route Handlers are cached by default when using the GET method with
          the Response object.
        </p>
      </SlidesLayout>
    </>
  );
}
