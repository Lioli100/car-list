const api = async ({ url, method = "GET", body }) => {
  const result = await fetch(`http://localhost:8000${url}`, {
    headers: { "Content-Type": "application/json" },
    method,
    body: JSON.stringify(body),
  });

  const data = await result.json();
  return data;
};

export default api;
