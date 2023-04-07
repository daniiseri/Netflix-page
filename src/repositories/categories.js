import config from "../config";

const CATEGORY_URL = `${config.URL}/categories`;

function getAll() {
  return fetch(CATEGORY_URL).then((response) => response.json());
}

function getAllCategoriesWithVideos() {
  return fetch(`${CATEGORY_URL}?_embed=videos`).then((response) =>
    response.json()
  );
}

function create(data) {
  fetch(CATEGORY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export default {
  getAllCategoriesWithVideos,
  getAll,
  create,
};
