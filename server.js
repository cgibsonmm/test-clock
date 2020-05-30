const PORT = process.env.PORT || 3000;
const express = require("express");
const axios = require("axios");

const app = express();

let api = axios.create({
  baseURL:
    "https://developer.lametric.com/api/v1/dev/widget/update/com.lametric.8a87576a21178974bda26ba7d30de31a/1",
  headers: {
    "X-Access-Token":
      "OTEwZmM5ZjM3Zjg0YTBiMzA1ZTEzZTA5YTk0OGEyNjZiZWJhMjNiNjU5MGI0Zjc2OThjNDdkODlhMzgxZmY1NQ==",
  },
});

app.get("/res", () => {
  console.log("Button click");
});

let count = 0;

setInterval(() => {
  count += 1;
  api
    .post("/", { frames: [{ text: `${count}`, icon: "i59" }] })
    .then(() => {
      console.log("test");
    })
    .catch((e) => console.log(e.message));
}, 5000);
app.listen(PORT, console.log(`App on *:${PORT}`));
