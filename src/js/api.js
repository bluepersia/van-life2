async function getVans() {
  const res = await fetch("/api/vans");

  if (!res.ok) {
    const json = await res.json();
    throw json;
  }

  return res.json();
}

export { getVans };
