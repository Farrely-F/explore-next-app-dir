import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <Link
            key={id}
            href={`/intercepting-routes/photo/${id}`}
            className="block"
          >
            <div className="">
              <Image
                src={`https://picsum.photos/id/${id + 50}/512/512`}
                alt={`Photo ${id}`}
                className="w-full h-auto rounded-xl"
                width={512}
                height={512}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
