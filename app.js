const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline with GitHub Actions & Docker 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

if (require.main === module) {
  app.listen(3000, () => console.log("Server running"));
}
