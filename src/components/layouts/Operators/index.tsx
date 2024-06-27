import { getMerchantOperator } from "@/services/merchant";
import { unstable_noStore } from "next/cache";
import Image from "next/image";

export default async function Operator() {
  unstable_noStore();
  const { data: operators } = await getMerchantOperator();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="grid grid-cols-8 gap-4">
      {operators?.map((operator: any) => (
        <div key={operator.id} className="w-20">
          <Image
            src={operator?.image_url}
            alt={operator?.name}
            width={100}
            height={100}
            className="size-20 object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  );
}
