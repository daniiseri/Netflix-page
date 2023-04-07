import config from "../config";

const VIDEO_URL = `${config.URL}/videos`;

function create(data) {
  return fetch(`${VIDEO_URL}?_embed=videos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

export default {
  create,
};
