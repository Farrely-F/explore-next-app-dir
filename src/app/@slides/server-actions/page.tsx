"use client";

import { submitForm } from "@/app/actions/formActions";
import SlidesLayout from "@/components/layouts/SlidesLayout";
import CodeContainer from "@/components/ui/CodeContainer";
import { useTransition } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitForm(formData);
      if (result.message === "Form submitted successfully") {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <>
      <SlidesLayout
        title="Server Actions and Mutations"
        href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
      >
        <p>
          Server Actions are asynchronous functions that are executed on the
          server. They can be used in Server and Client Components to handle
          form submissions and data mutations in Next.js applications.
        </p>
        <h2>Usage</h2>
        <h3>Server Components</h3>
        <p>
          {
            'Server Components can use the inline function level or module level "use server" directive. To inline a Server Action, add "use server" to the top of the function body:'
          }
        </p>
        <CodeContainer>
          <p>app/action.ts</p>
          {`
// Server Component
export default function Page() {
  // Server Action
  async function create() {
    'use server'
 
    // ...
  }
 
  return (
    // ...
  )
}
            `}
        </CodeContainer>
        <h3>Client Components</h3>
        <p>{`Client Components can only import actions that use the module-level "use
        server" directive. To call a Server Action in a Client Component, create
        a new file and add the "use server" directive at the top of it. All
        functions within the file will be marked as Server Actions that can be
        reused in both Client and Server Components:`}</p>

        <CodeContainer>
          <p>app/ui/button.tsx</p>
          {`
'use server'
 
export async function create() {
  // ...
}
          `}

          {`
import { create } from '@/app/actions'
 
export function Button() {
  return (
    // ...
  )
}
            `}
        </CodeContainer>

        <form action={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2 flex flex-col w-full max-w-sm">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              className="bg-neutral-900 py-2 px-4 rounded-xl"
            />
          </div>
          <div className="w-full max-w-sm">
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              className="bg-neutral-900 block w-full rounded-xl p-4"
            />
          </div>
          <button
            className="inline-block w-full max-w-fit px-4 py-1 bg-white rounded-lg text-pink-500"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </SlidesLayout>
      <Toaster />
    </>
  );
}
