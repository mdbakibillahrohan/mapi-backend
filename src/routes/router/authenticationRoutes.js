import expres from 'express';
import Constant from '../../util/constant.js';
import  AuthenticationController  from '../../controllers/AuthenticationController.js';
const AuthenticationRoutes = expres.Router();

AuthenticationRoutes.get(Constant.ENDPOINTS.LOGIN, (req, res) => {
    AuthenticationController.login(req, res);
});

export default AuthenticationRoutes;