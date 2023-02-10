import express from 'express';
import AuthenticationRoutes from './lib/authentication.js';

const AppRouter = express.Router();
AppRouter.use(AuthenticationRoutes);

export default AppRouter;