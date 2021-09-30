import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import itemRoute from './routes/items.router';

dotenv.config();

const PORT = 3001;
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use('/api', itemRoute);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
