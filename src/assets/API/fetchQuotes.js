export const fetchQuotes = async () => {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    if (response.ok) {
      const jsonResponse = await response.json();
      const indexed = jsonResponse.map((qte, idx) => ({ ...qte, id: idx }));
      return indexed;
    }
    throw new Error("Fetch failed, please try again.");
  } catch (err) {
    setTimeout(() => alert(err), 1000);
  }
};
