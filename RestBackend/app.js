import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: "./config/config.env" });



// CORS Configuration
const corsOptions = {
  origin: ['https://rest-frontend-b3wu.vercel.app'], // List allowed origins
  methods: ["POST"],
  credentials: true, // Enable credentials
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.setTimeout(180000); // 120 seconds
  next();
});

// Routes
app.use('/api/v1/reservation', reservationRouter);

// Set Referrer Policy
app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Database Connection
dbConnection();

// Error Handling Middleware
app.use(errorMiddleware);

export default app;

