import express, {Express} from 'express';
import morgan from 'morgan';
import './config/dbconnection'

import LoginRouter from './Api/Routes/LoginRoute';
import SignupRouter from './Api/Routes/SignupRoute';

class Server {
  server: Express;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(morgan('tiny'));
  }

  routes() {
    // Login / signup
    if (process.env.CONTAINER_ID === "0") {
      this.server.use(LoginRouter);
      this.server.use(SignupRouter);
    }


  }
}

const PORT: string = process.env.SERVER_PORT;

export default new Server().server.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ PORT }` );
});
