export function save(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export async function load(key) {
  try {
    const json = localStorage.getItem(key);
    return await JSON.parse(json);
  } catch (error) {
    alert(error);
    return null;
  }
}