// server.js
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// API endpoint for receiving NFC tag data
app.post("/tag", (req, res) => {
  console.log("📡 Tag data received:", req.body);
  res.json({ status: "ok" });
});

app.get("/health", (req, res) => res.send("OK"));

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
