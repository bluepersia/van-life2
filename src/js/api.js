async function get(url) {
  const res = await fetch(url);

  if (!res.ok) {
    const json = await res.json();
    throw json;
  }

  return res.json();
}

async function getVans() {
  return await get("/api/vans");
}

async function getVan(id) {
  return await get(`/api/vans/${id}`);
}

export { getVans, getVan };
