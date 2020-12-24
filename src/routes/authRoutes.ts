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
  .get('/logout', (req: RequestWithBody, res: Response) => {
    req.session = undefined;
    res.redirect('/');
  })

  .get('/protected', requireAuth, (req: RequestWithBody, res: Response) => {
    res.send('Welcome to protected route, you\'re logged in');
  });
