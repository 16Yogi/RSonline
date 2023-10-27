const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./Routes/payment");
const connectDB = require("./config/db");
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/payment/", paymentRoutes);

const port = process.env.PORT;

const startServer = async () => {
    try {
      await  connectDB(process.env.MONGO_URL)
      await  app.listen(port, () => console.log(`Listening on port ${port}...`));
    } catch (error) {
        console.log({ error: error })
    }
}

startServer()

