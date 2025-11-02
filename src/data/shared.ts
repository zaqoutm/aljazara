const API = process.env.API_PATH;

export const tryFetch = async (params: string, endpoitName: string = 'endpointName') => {
  try {
    const req = await fetch(API + params);
    return await req.json();
  } catch (error) {
    console.error('trying to fetch ', API, params);
    return new Promise((resolve) => {
      resolve({ data: [], meta: '' });
    });
  }
};
