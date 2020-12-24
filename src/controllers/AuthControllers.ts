import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
class AuthController {
  @get('/login')
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

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === 'hi@bye.com' && password === 'trees') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('You must provide email and password');
    }
  }
}