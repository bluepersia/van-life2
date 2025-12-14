export function updateSearchParams(searchParams, key, value) {
  if (!value) searchParams.delete(key);
  else searchParams.set(key, value);

  return searchParams;
}
