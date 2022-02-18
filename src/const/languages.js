
export const LANGUAGES = ["JavaScript", "C++", "PHP", "Java", "Ruby", "GO"];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000)
  });
}