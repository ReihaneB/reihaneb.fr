import type { FetchParams, FetchResponse, RequestInit } from './enhancedFetch.d';

async function enhancedFetch<T = unknown>({
  method,
  path = '',
  tag,
  params = '',
  headers = {},
  payload,
  state = 'static',
  responseType = 'json',
}: FetchParams): Promise<FetchResponse<T>> {
  const options: RequestInit = {
    method,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      ...headers,
    },
    next: {
      tags: [tag],
    },
    cache: state === 'dynamic' ? 'no-store' : 'force-cache',
    body: payload ? JSON.stringify(payload) : undefined,
  };

  const slug = '/api';

  const parameters = `?populate=deep${params}`;

  try {
    const result = await fetch(`${process.env.API_URL}${slug}${path}${parameters}`, options);

    let body;
    switch (responseType) {
      case 'json':
        body = await result.json();
        break;
      case 'text':
        body = await result.text();
        break;
      case 'blob':
        body = await result.blob();
        break;
      default:
        body = await result.json();
    }

    return {
      status: result.status,
      ok: result.ok,
      body,
    };
  } catch (error: unknown) {
    let errorMessage: string;
    if (error instanceof Error) {
      errorMessage = `An error occurred while fetching data: ${error.message}`;
      return {
        status: error.name === 'AbortError' ? 408 : 500,
        ok: false,
        body: { message: errorMessage } as T,
      };
    }
    errorMessage = 'An unknown error occurred';
    return {
      status: 500,
      ok: false,
      body: { message: errorMessage } as T,
    };
  }
}

export default enhancedFetch;
