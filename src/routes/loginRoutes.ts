import { Router, Request, Response } from 'express';

module.exports = Router()
  .get('/login', (req: Request, res: Response) => {
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
  })

.post('/login', (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email + password);
    
    res.send(`${email.toUppercase()} - ${password}`);
  });
