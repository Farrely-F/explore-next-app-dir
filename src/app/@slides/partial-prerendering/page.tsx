import SlidesLayout from "@/components/layouts/SlidesLayout";
import CodeContainer from "@/components/ui/CodeContainer";
import fetchAPI from "@/services/api";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <SlidesLayout
        title="Partial Prerendering"
        href="https://www.partialprerendering.com/"
      >
        <p>
          Partial Prerendering is an experimental feature that allows static
          portions of a route to be prerendered and served from the cache with
          dynamic holes streamed in, all in a single HTTP request.
        </p>

        <h2>Example</h2>

        <div className="flex flex-col lg:flex-row items-stretch gap-2">
          <Suspense fallback={<Skeleton />}>
            <Store />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <Store2 />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <Store3 />
          </Suspense>
        </div>

        <h2>Enabling this Feature</h2>
        <CodeContainer>
          <p>next.config.js</p>
          {`
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
}
 
module.exports = nextConfig
          `}
        </CodeContainer>
      </SlidesLayout>
    </>
  );
}

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

async function Store() {
  unstable_noStore();
  const { data: product } = await fetchAPI<Product>({
    url: "https://fakestoreapi.com/products/1",
  });

  // add delay to simulate slow network
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <div className="w-fit max-w-sm h-auto bg-neutral-900 grid place-items-center p-4 gap-4 rounded-xl">
        <Image
          src={product?.image!}
          alt={product?.title!}
          width={512}
          height={512}
          className="size-32 object-contain"
        />
        <h3>{product?.title}</h3>
      </div>
    </>
  );
}

async function Store2() {
  const { data: product } = await fetchAPI<Product>({
    url: "https://fakestoreapi.com/products/2",
    revalidate: 60,
  });

  return (
    <>
      <div className="w-fit max-w-sm h-auto bg-neutral-900 grid place-items-center p-4 gap-4 rounded-xl">
        <Image
          src={product?.image!}
          alt={product?.title!}
          width={512}
          height={512}
          className="size-32 object-contain"
        />
        <h3>{product?.title}</h3>
      </div>
    </>
  );
}

async function Store3() {
  unstable_noStore();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    throw new Error("Error");
  } catch (error) {
    return (
      <>
        <div className="px-16 h-auto bg-red-500/20 grid place-items-center p-4 gap-4 rounded-xl w-full lg:max-w-fit">
          <h3>Error</h3>
        </div>
      </>
    );
  }
}

function Skeleton() {
  return (
    <>
      <div className="w-64 h-64 bg-gray-100/10 animate-pulse rounded-xl" />
    </>
  );
}
