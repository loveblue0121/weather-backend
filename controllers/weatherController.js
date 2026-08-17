import axios from "axios";

export const getWeather = async (req, res) => {
  try {
    const response = await axios.get(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001",
      { params: { Authorization: process.env.AUTH_KEY } },
    );
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "無法取得天氣資料" });
  }
};

export const getCityWeather = async (req, res) => {
  try {
    const { locationName } = req.query;
    const response = await axios.get(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001",
      {
        params: {
          Authorization: process.env.AUTH_KEY,
          locationName: locationName,
        },
      },
    );
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "無法取得天氣資料" });
  }
};

export const getSunTimes = async (req, res) => {
  try {
    const { CountyName, timeFrom, timeTo } = req.query;
    const response = await axios.get(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/A-B0062-001",
      {
        params: {
          Authorization: process.env.AUTH_KEY,
          CountyName: CountyName,
          timeFrom: timeFrom,
          timeTo: timeTo,
        },
      },
    );
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "無法取得日出日落資料" });
  }
};
