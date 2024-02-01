import { Request as ERequest, Response as EResponse } from 'express';
import { register, login } from './auth.services.js';

export const signUp = async(req: ERequest, res: EResponse) => {
  const { email, password } = req.body;

  try {
    res.status(200).send(await register(email, password));
  } catch (error) {
    if (error instanceof Error) {
      res.status(403).send({ error: error.message });

      return;
    }

    res.status(503).send({ error: 'An error occured!' });
  }
};

export const signIn = async(req: ERequest, res: EResponse) => {
  const { email, password } = req.body;

  try {
    res.status(200).send(await login(email, password));
  } catch (error) {
    if (error instanceof Error) {
      res.status(403).send({ error: error.message });

      return;
    }

    res.status(503).send({ error: 'An error occured!' });
  }
};
