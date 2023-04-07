const URL = window.location.hostname.includes("localhost")
  ? "http://localhost:3000"
  : "https://helptechflix-server.herokuapp.com";

export default { URL };
