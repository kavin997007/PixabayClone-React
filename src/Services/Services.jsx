const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

export const getImages = async (search) => {
  const response = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=200`
  );

  const data = await response.json();
  return data.hits;
};