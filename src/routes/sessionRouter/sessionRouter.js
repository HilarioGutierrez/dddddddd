import { Router } from "express";
import { login, logout, singup } from "../../controllers/sessionController.js";
import passport from "passport";

const sessionRouter = Router();

sessionRouter.post('/login', login );
sessionRouter.post('/logout', logout );
sessionRouter.post('/singup', singup );

//sessionRouter.post('/login2', passport.authenticate('login2', {failureRedirect: '/api/sessions/fail'}), login2)
//sessionRouter.post('/register', passport.authenticate('register', {failureRedirect: '/api/sessions/fail'}), register)

//sessionRouter.get('/fail', fail);
//sessionRouter.post('foget-password', forgetPassword);

const githubPassport = () =>{
    sessionRouter.get('/github', passport.authenticate('github', {scope: ['user:email']}), async (req, res) =>{});
    sessionRouter.get('/github-callback', passport.authenticate('github', {failureRedirect: '/login'}), async (req, res) =>{
        req.session.user = req.user;
        console.log(req.user);
        res.redirect('/');
    })
};

//githubPassport()

export default sessionRouter