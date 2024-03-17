export interface FetchParams {
  method: string;
  path?: string;
  tag: string;
  params?: string;
  headers?: Record<string, string>;
  payload?: Record<string, unknown>;
  state?: 'static' | 'dynamic';
  responseType?: 'json' | 'text' | 'blob';
}

export interface FetchResponse<T = unknown> {
  status: number;
  ok: boolean;
  body: T;
}

export interface RequestInit {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  withCredentials?: boolean;
  next?: {
    tags: string[];
  };
  cache?: 'default' | 'no-store' | 'force-cache';
}
