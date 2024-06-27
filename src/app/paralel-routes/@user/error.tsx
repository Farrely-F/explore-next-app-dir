"use client";

import { useRouter } from "next/navigation";

export default function ErrorPage({ error }: { error: Error }) {
  const router = useRouter();

  return (
    <>
      <div className="w-full max-w-md rounded-xl p-4 border border-red-500 text-red-500 bg-red-200/10">
        {/* <div>{error.message}</div> */}
        <h2>
          Sorry currently the service is unavailable please try again later.
        </h2>
        <p>This error occured on the user boundary, please try again later</p>
      </div>
    </>
  );
}
