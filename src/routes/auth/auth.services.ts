import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

import { Users } from '../../db/models/User.js';
import { User } from '../../types/User.js';

export const register = async(email: string, password: string) => {
  try {
    if (!email || !password) {
      throw new Error('No credentials provided!');
    }

    const existingUser = await Users.findOne({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new Error('Such user already exists!');
    }

    const cypheredPass = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET || 'secret',
    ).toString();

    const newUser = await Users.create({
      id: uuidv4(),
      email,
      password: cypheredPass,
    });

    return newUser;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('An error occured!');
  }
};

export const login = async(email: string, password: string) => {
  try {
    if (!email || !password) {
      throw new Error('No credentials provided!');
    }

    const existingUser = (
      await Users.findOne({
        where: {
          email,
        },
      })
    )?.get({ plain: true }) as User;

    if (!existingUser) {
      throw new Error('No users with such email exist!');
    }

    const decypheredPass = CryptoJS.AES.decrypt(
      existingUser.password,
      process.env.SECRET || 'secret',
    ).toString(CryptoJS.enc.Utf8);

    if (decypheredPass !== password) {
      throw new Error('Invalid password!');
    }

    return existingUser;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('An error occured!');
  }
};
