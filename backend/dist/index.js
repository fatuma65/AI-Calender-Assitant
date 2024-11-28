"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cookieParser = require("cookie-parser");
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const eventRoutes_1 = __importDefault(require("./routes/eventRoutes"));
const preferanceRoutes_1 = __importDefault(require("./routes/preferanceRoutes"));
const reminderRoutes_1 = __importDefault(require("./routes/reminderRoutes"));
const locationRoutes_1 = __importDefault(require("./routes/locationRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use("/api", UserRoutes_1.default);
app.use("/events", eventRoutes_1.default);
app.use("/users", preferanceRoutes_1.default);
app.use("/reminders", reminderRoutes_1.default);
app.use("/locations", locationRoutes_1.default);
app.use(cookieParser());
app.listen(port, () => console.log(`Server running on port ${port}`));
