// server.js

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = 3000;

await connectDB();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});