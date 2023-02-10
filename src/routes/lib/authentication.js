import expres from 'express';

const AuthenticationRoutes = expres.Router();

AuthenticationRoutes.get("/login", (req, res) => {
    res.send("login routes is working");
})

export default AuthenticationRoutes;