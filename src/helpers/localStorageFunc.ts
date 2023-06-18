export const setFromLocalStorage = (key: string, item: any) =>
  localStorage.setItem(key, JSON.stringify(item));
export const getFromLocalStorage = <T,>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;
    return JSON.parse(item);
  } catch (error) {
    return null;
  }
};
export const removeFromLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
};
