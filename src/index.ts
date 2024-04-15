import express from 'express';
import { PORT } from './config/constants';
import { userRouter } from './routes';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to restfull-API gateway");
});
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Endpoint listening on port ${PORT}`);
})