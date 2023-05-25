const express = require("express");
const app = express();
const PORT = 3011;
const users = require("./routes/users");
const pets = require("./routes/myPets");
app.use(express.json());
app.use("/user", users);
app.use("/pet", pets);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
