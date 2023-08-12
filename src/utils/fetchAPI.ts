import type { APIData } from '../../types';

const fetchAPI = async (apiExtension: string) => {
  try {
    const url = (process.env.STRAPI_API_URL as string) + apiExtension;

    const res = await fetch(url);

    const products = await res.json();
    return products.data as APIData[];
  } catch (err) {
    console.log(err);
  }
};

export default fetchAPI;
