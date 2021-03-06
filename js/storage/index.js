export function save(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export function load(key) {
  try {
    const json = localStorage.getItem(key);
    return JSON.parse(json);
  } catch (error) {
    alert(error);
    return null;
  }
}

export function remove(key) {
  localStorage.removeItem(key);
}