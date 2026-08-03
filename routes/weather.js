import express from "express";
import {
  getWeather,
  getCityWeather,
} from "../controllers/weatherController.js";

const router = express.Router();

// GET /weather 即時觀測
router.get("/", getWeather);
// GET /cityWeather 城市預報
router.get("/cityWeather", getCityWeather);

export default router;
