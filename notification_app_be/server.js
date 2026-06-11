

const express = require('express');
const { Log } = require('logging_middleware'); 

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    Log("backend", "info", "handler", "Root API was hit successfully");
    res.send("Notification Backend Running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    Log("backend", "debug", "controller", "Server started on port 5000");
});