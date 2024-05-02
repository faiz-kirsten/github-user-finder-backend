import express from "express";
import { PORT } from "./config.js";
import helmet from "helmet";
import userRoutes from "./routes/user.js"; // import the user routes

export const app = express();

app.get("/", (req, res) => {
    res.send("This is the home page!");
});

app.use(helmet()); // use helmet

app.use("/user", userRoutes); // use the userRoutes

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
