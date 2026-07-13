import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import portfolioRoutes from "./routes/portfolio.routes";
import aiRoutes from "./routes/ai.routes";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Genie API");
});

export default app;