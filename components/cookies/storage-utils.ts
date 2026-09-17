export const savePreferences = (preferences: Record<string, boolean>) => {
  localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
};

export const getPreferences = (): Record<string, boolean> | null => {
  const savedPrefs = localStorage.getItem("cookiePreferences");
  return savedPrefs ? JSON.parse(savedPrefs) : null;
};
