import express from 'express';
import helmet from 'helmet';
import {join} from 'path';
import route from './routes/studentRoutes.js';
// import router from './routes/templateRoutes.js';
import authRouter from './routes/authRouter.js';
import errorHandler from './middilewares/errorHandler.js';
const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.set('views',join(process.cwd(), 'views'));
app.set('view engine', 'ejs');
app.use(authRouter)
// app.use(router);
app.use('/api',route);
app.use(errorHandler);
export default app.listen(port,host,()=> console.log(`server is running on http://${host}:${port}`));