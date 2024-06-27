"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

export default function PhotoPage() {
  const params = useParams();
  const id = Number(params.id) + 50;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Photo {params.id}</h2>
      <Image
        src={`https://picsum.photos/id/${id}/1024/768`}
        alt={`Full size photo ${params.id}`}
        width={800}
        height={600}
        className="w-full h-auto"
      />
    </div>
  );
}
