import fetchAPI from "./api";

export async function getMerchantProfile() {
  return await fetchAPI<MerchantData>({
    endpoint: "/merchants",
    revalidate: 60,
  });
}

export async function getMerchantOperator() {
  return await fetchAPI<any>({
    endpoint: "/operators",
  });
}
