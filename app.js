// app.js

const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  try {
    const response = await axios({
      method: "get",
      url: "https://core.mend.zone/client/getMachineTestDetail/1/110001/N/OFFER",
      headers: {
        "Content-Type": "application/json",
        "api-key": "dU9Aq8mxlFtAH9Vybr7OyUezYB5CE4qTdU9Aq8mxlFtAH9Vybr7OyUezYB5CE4qT",
      },
      data: {
        clientKey: "9IEcgUVWNOjW-lnmP_KiMw==",
      },
    });
    res.render("index", { title: "Cards List", cards: response.data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("An error occurred");
  }
});

// Start the server
const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
