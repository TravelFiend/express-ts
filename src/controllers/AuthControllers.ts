import { NextFunction, Request, Response } from 'express';
import { get, controller, use } from './decorators';

function logger(req: Request, res: Response, next: NextFunction){
  console.log('Request was made');
  next();
}

@controller('/auth')
class AuthController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method='POST'>
      <div>
        <label>Email</label>
        <input type='text' name='email' />
      </div>

      <div>
        <label>Password</label>
        <input type='password' name='password' />
      </div>

      <button>Submit</button>
    </form>
    `)
  }
}