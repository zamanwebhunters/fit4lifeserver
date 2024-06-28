const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 8000;
const apiKey =
  "b51c64c279e7e5cbb7b04543c961ff5ac40d88b412f1b910ee3253dfe754f8829be7084f";
const apiUrl = "https://lhamer70.api-us1.com/api/3/contacts";
const dealsApiUrl = "https://lhamer70.api-us1.com/api/3/deals";
const createContactUrl = "https://lhamer70.api-us1.com/api/3/contacts";

app.use(cors());
app.use(express.json());

app.get("/api/contacts", async (req, res) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "Api-Token": apiKey,
        "Content-Type": "application/json",
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/deals", async (req, res) => {
  const options = {
    method: "POST",
    url: dealsApiUrl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Api-Token": apiKey,
    },
    data: req.body,
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/createcontact", async (req, res) => {
  const options = {
    method: "POST",
    url: createContactUrl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Api-Token": apiKey,
    },
    data: req.body,
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = app;