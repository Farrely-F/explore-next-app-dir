import Chip from "@/components/ui/Chip";
import { getMerchantProfile } from "@/services/merchant";
import Image from "next/image";

export default async function Navbar() {
  const { data: merchant } = await getMerchantProfile();

  return (
    <>
      <nav className="min-h-16 px-4 md:px-8 border-b flex items-center justify-between sticky top-0 z-10 bg-white">
        <Image
          src={merchant?.logo!}
          alt={merchant?.name!}
          width={100}
          height={100}
          className="w-auto h-5"
        />
        <div>
          <Chip variant="static">STATIC</Chip>
        </div>
      </nav>
    </>
  );
}
