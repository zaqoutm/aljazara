const API = process.env.API_PATH;

export const tryFetch = async (params: string, endpoitName: string = "endpointName") => {
  if (process.env.NODE_ENV == "development") {
    params = "/articles/";
  }

  try {
    const req = await fetch(API + params);
    const json = await req.json();
    return json;
  } catch (error) {
    console.error("trying to fetch ", API, params);
    console.log(error);
    return new Promise((resolve) => {
      resolve({ data: [], meta: "" });
    });
  }
};
