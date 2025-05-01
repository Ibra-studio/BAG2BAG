import express from "express";
import axios from "axios";
import Cors from "cors";
const cors = Cors;
const corsOptions = {
  origin: ["http://localhost:5173"],
};
const port = 5000;
const app = express();
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ fruits: ["banana", "apple", "orange"] });
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
