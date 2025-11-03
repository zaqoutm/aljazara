const API = process.env.NEXT_PUBLIC_API_PATH || 'http://localhost:3000/api';
console.log(API);

interface ApiResponse {
  data: any;
  meta: unknown;
}

export const tryFetch = async (path: string) => {
  try {
    const res = await fetch(`${API}${path}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('trying to fetch ', API, path);
    return new Promise((resolve) => {
      console.error('Error fetching:', API + path, error);
      return { data: [], meta: {} } as ApiResponse;
    });
  }
};

export async function getMixedLatestArticles(limit: number) {
  // return await tryFetch('/articles');
  return await tryFetch(`/items/articles?fields=*,photo.*&limit=${limit}&sort=-date_created`);
}
