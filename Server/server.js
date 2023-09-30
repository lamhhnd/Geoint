
const express = require("express");
const PORT = 3030;
const app = express();

app.get("/",(req, res) =>{
    res.json({ message: "Welcome to authentication server" });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});