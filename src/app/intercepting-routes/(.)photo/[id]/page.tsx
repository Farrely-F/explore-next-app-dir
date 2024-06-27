"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function InterceptedPhotoModal() {
  const [isOpen, setIsOpen] = useState(true);
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id) + 50;

  const closeModal = useCallback(() => {
    setIsOpen(false);
    router.replace("/intercepting-routes");
  }, [router]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    const handleNext = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        params.id !== "6" &&
          router.push(`/intercepting-routes/photo/${Number(params.id) + 1}`);
      }
    };

    const handlePrev = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        params.id !== "1" &&
          router.push(`/intercepting-routes/photo/${Number(params.id) - 1}`);
      }
    };

    window.addEventListener("keydown", handleNext);
    window.addEventListener("keydown", handlePrev);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleNext);
      window.removeEventListener("keydown", handlePrev);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [params.id, router, closeModal]);

  if (!isOpen) return null;

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
        <div className="grid grid-cols-3 gap-4">
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
                  className="w-full h-auto"
                  width={512}
                  height={512}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <div className="bg-neutral-900/10 backdrop-blur-sm border-white/25 border rounded-lg max-w-3xl w-full">
          <div className="p-4">
            <Image
              src={`https://picsum.photos/id/${id}/800/600`}
              alt={`Modal photo ${params.id}`}
              width={800}
              height={600}
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
}
