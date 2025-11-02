const API = process.env.API_PATH;

export async function getMixedLatestArticles(max: number) {
  return await tryFetch(`/articles?sort[1]=publishedAt:desc&pagination[0]=start&pagination[limit]=${max}`, 'articles');
}

export const tryFetch = async (path: string) => {
  try {
    const req = await fetch(API + path);
    return await req.json();
  } catch (error) {
    console.error('trying to fetch ', API, path);
    return new Promise((resolve) => {
      resolve({ data: [], meta: '' });
    });
  }
};
