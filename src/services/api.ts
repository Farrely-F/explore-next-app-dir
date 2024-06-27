type APIResponse<T> = {
  data: T | null;
  status: boolean;
  message?: string;
};

type BaseAPIParams = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  token?: string;
  body?: string | Record<string, unknown>;
  type?: "STATIC" | "DYNAMIC";
  revalidate?: number;
};

type URLParams = BaseAPIParams & {
  url: string;
  endpoint?: never;
};

type EndpointParams = BaseAPIParams & {
  endpoint: string;
  url?: never;
};

type APIParams = URLParams | EndpointParams;

const API_BASE_URL = process.env.API_BASE_URL as string;

async function fetchAPI<T>({
  endpoint,
  url,
  method = "GET",
  headers = {},
  token,
  body,
  type,
  revalidate,
}: APIParams): Promise<APIResponse<T>> {
  const URL = endpoint ? API_BASE_URL + endpoint : (url as string);

  const requestHeaders = {
    "content-type": "application/json",
    "X-Merchant-Code": "gamefinity",
    ...headers,
  } as Record<string, string>;

  if (token) {
    requestHeaders["Authorization"] = `Bearer ${token}`;
  }

  const requestOptions = {
    method,
    headers: requestHeaders,
  } as RequestInit;

  if (method !== "GET" && body) {
    requestOptions.body = JSON.stringify(body);
  }

  if (type === "DYNAMIC") {
    requestOptions.cache = "no-store";
  } else if (type === "STATIC") {
    requestOptions.cache = "force-cache";
  }

  if (revalidate) {
    requestOptions.next = { revalidate };
  }

  try {
    const response = await fetch(URL);
    const data = await response.json();
    if (response.ok) {
      if (!data.data) {
        return { data: data, status: true };
      }

      return data as APIResponse<T>;
    } else {
      throw new Error({ ...data });
    }
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return { data: null, status: false, message: error.message };
    } else {
      return { data: null, status: false };
    }
  }
}

export default fetchAPI;
