const express = require('express');
const cors = require("cors");
const router = require('./src/routes/TaskRoutes');


const app = express();
const port = 8080;

app.use(cors({
  origin: "http://localhost:3001", 
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json()); 
app.use('/api', router); 



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





