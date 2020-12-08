import { Router, Request, Response } from 'express';

module.exports = Router()
  .get('/', (req: Request, res: Response) => {
    if(req.session && req.session.loggedIn){
      res.send(`
      <div>
        <p>You are logged in!</p>
        <a href='/auth/logout'>Logout</a>
      </div>
      `);
    } else {
      res.send(`
      <div>
        <p>You are not logged in</p>
        <a href='/auth/login'>Login</a>
      </div>
      `);
    }
  })