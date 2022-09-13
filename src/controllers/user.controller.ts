import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

const secret = 'secrettoken';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const { id } = req.body;
    
    await this.userService.create(product);
    const token = jwt.sign({ id }, secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });

    res.status(StatusCodes.CREATED).json({ token });
  };
}