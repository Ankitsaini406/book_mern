import { PORT, mongodbURL } from "./config.js";
import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CROS POLICY
// Option 1: Allow Origins with Default of cors(*)
app.use(cors());

// Option 2: Allow only you need
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.listen(PORT, () => {
  console.log(`Backend is running on: ${PORT} `);
});

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Failed");
  });
