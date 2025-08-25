import axios from "axios";

export const getWeather = async (req, res) => {
  try {
    const response = await axios.get(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001",
      { params: { Authorization: process.env.AUTH_KEY } }
    );
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "無法取得天氣資料" });
  }
};
