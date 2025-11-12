import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "express-session";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(
  session({
    secret: "kambaz-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours - session persists for 1 day
    },
  })
);

app.use(express.json());

Hello(app);
Lab5(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});