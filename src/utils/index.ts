export const getFromStorage = (key: string) => {
  const data: string | null = localStorage.getItem(key);

  if (!data) return null;

  return JSON.parse(data);
};
