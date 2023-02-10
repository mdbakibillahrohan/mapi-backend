import express from 'express';
import AuthenticationRoutes from './router/authenticationRoutes.js';
const AppRouter = express.Router();
AppRouter.use(AuthenticationRoutes);
export default AppRouter;