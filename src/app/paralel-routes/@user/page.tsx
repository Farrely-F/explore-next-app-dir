import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export default async function Page() {
  noStore();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // const data = await getData();

  // reenable/disable to try error boundary
  // throw new Error("Error");

  return (
    <>
      <div className="w-full max-w-md p-4 border rounded-lg">
        <h1>User View</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          voluptates, provident deserunt saepe necessitatibus repudiandae harum
          architecto soluta quaerat consectetur voluptatibus voluptatem, itaque
          vel doloremque quisquam, fugiat repellat natus esse labore. Ea nemo
          architecto nam, voluptate blanditiis error quisquam non!
        </p>
        <Link
          className="p-2 bg-white mt-2 inline-block rounded-lg text-black"
          href={"/paralel-routes/setting"}
        >
          user setting
        </Link>
      </div>
    </>
  );
}
