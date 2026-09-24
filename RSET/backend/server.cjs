const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const eventsFile = path.join(
  __dirname,
  "data",
  "events.json"
);

app.get("/api/events", (req, res) => {
  try {
    const data = fs.readFileSync(eventsFile, "utf8");
    const events = JSON.parse(data);

    res.json(events);
  } catch (error) {
    console.error("Error reading events:", error);

    res.status(500).json({
      message: "Could not load events"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});