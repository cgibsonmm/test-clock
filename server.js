const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const express = require("express");
const axios = require("axios");

const app = express();
app.use(morgan("dev"));

let api = axios.create({
  baseURL:
    "https://developer.lametric.com/api/v1/dev/widget/update/com.lametric.8a87576a21178974bda26ba7d30de31a/2",
  headers: {
    "X-Access-Token":
      "OTEwZmM5ZjM3Zjg0YTBiMzA1ZTEzZTA5YTk0OGEyNjZiZWJhMjNiNjU5MGI0Zjc2OThjNDdkODlhMzgxZmY1NQ==",
  },
});

app.get("/res", (req, res) => {
  res.json([]);
  api.post("/", { frames: [{ text: `We Hear You!`, icon: "i746" }] });
});

app.post("/sms", (res, res) => {
  console.log(res.body);
});

let count = 0;

setInterval(() => {
  count += 1;
  api
    .post("/", { frames: [{ text: `${count}`, icon: "i59" }] })
    .then(() => {
      console.log(`test ${count}`);
    })
    .catch((e) => console.log(e.message));
}, 30000);
app.listen(PORT, console.log(`App on *:${PORT}`));
