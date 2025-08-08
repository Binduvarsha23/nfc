// // server.js (ES Module compatible version)
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import path from "path";
// import { fileURLToPath } from "url";

// // Route imports
// import securePDFRouter from "./routes/securePDF.js";
// // Import other existing routers here as needed
// // import authRoutes from "./routes/auth.js";
// // import securityConfigRoutes from "./routes/security-config.js";

// // Setup __dirname in ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json({ limit: "10mb" })); // Adjust size as needed

// // Routes
// app.use("/api", securePDFRouter);
// // app.use("/api/auth", authRoutes);
// // app.use("/api/security-config", securityConfigRoutes);

// // Default route
// app.get("/", (req, res) => {
//   res.send("Server is running.");
// });

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("✅ Connected to MongoDB");
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection failed:", err);
//   });
// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// receive posted tag data
app.post('/tag', (req, res) => {
  console.log('Tag received from client:', req.body);
  // TODO: save to DB or process as needed
  res.json({ ok: true });
});

app.get('/health', (req, res) => res.send('ok'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Open the web page at https://<your-domain> or use ngrok to expose https to your phone`);
});
