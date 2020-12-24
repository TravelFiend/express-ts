import express from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './appRouter';
import './controllers/AuthControllers';
import './controllers/RootContoller';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['dshvgSGGFSGSqdiuyacBL812Ckjsdvsd5rv7r8'] }))
app.use(AppRouter.getInstance());

app.use('/auth', require('./routes/authRoutes'));
app.use('/', require('./routes/home'));

app.listen(4343, () => {
  console.log('Listening on port 4343');
});
