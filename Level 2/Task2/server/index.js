import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv'

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* ROUTES */
app.use("/",);

/* MONGOOSE CONFIUGRATION */
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    app.listen(PORT, () => console.log(`Server: ${PORT}`))
}).catch((err) => console.log(`Error: ${err} \n`));