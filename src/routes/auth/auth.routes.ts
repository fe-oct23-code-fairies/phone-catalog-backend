import { Router } from 'express';
import { signIn, signUp } from './auth.controller.js';

export const authRouter = Router();

authRouter.post('/signin', signIn);

authRouter.post('/signup', signUp);
