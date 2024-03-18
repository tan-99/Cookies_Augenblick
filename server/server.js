const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyArppRMJTf5_pXxPofxB9hjqpQjbvVTqgk");

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post("/gemini", async (req, res) => {
  console.log(req.body.history);
  console.log(req.body.message);
});
