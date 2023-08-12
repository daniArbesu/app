const fetchAPI = async (apiExtension: string) => {
  try {
    const url = (process.env.NEXT_PUBLIC_STRAPI_API_URL as string) + apiExtension;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Error while fetching data...');
    }

    const fetchData = await res.json();
    return fetchData.data;
  } catch (err) {
    throw new Error('Error while fetching data...');
  }
};

export default fetchAPI;
