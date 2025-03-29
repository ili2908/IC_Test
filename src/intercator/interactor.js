const axios = require('axios');

const canisterId = `bkyz2-fmaaa-aaaaa-qaaaq-cai`;

(async () => {
  axios.get(`http://${canisterId}.raw.localhost:8000/db`).then(console.log);
})();
