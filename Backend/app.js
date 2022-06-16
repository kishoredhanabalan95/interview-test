import testRoutes from './routes/testRoutes';
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors"

const app = express();
app.use(cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/getData', testRoutes);

app.listen(
    8080,
    console.log(
        `Server running in 8080`
    )
);
