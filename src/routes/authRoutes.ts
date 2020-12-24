import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key:string]: string | undefined }
};

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if(req.session && req.session.loggedIn){
    next();
    return;
  };
  res.status(403);
  res.send('Not permitted')
};

module.exports = Router()
  .post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;
    
    if(email && password && email === 'hi@bye.com' && password === 'trees'){
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('You must provide email and password');
    }
  })

  .get('/logout', (req: RequestWithBody, res: Response) => {
    req.session = undefined;
    res.redirect('/');
  })

  .get('/protected', requireAuth, (req: RequestWithBody, res: Response) => {
    res.send('Welcome to protected route, you\'re logged in');
  });
